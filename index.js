const inquirer = require('inquirer');
const path = require('path');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER, 
      // MySQL password
      password: process.env.DB_PW, 
      database: process.env.DB_NAME, 
      port: 3305,
    },
    console.log(`Connected to the company_db database.`)
  );

const pickActionChoices = [
    "View All Employees",
    "Add Employee",
    "Update Employee Role",
    "View All Roles",
    "Add Role",
    "View All Departments",
    "Add Department",
    "Quit"

]

function appMenu() {
    function pickAction() {
        inquirer
            .prompt([
                {
                type: 'list',
                name: 'firstAction',
                message: "What would you like to do?",
                choices: pickActionChoices
                }
                
            ])
            .then((answer) => {
                answer.firstAction
                if (answer.firstAction == "View All Employees"){
                    db.query('SELECT * FROM employee', function (err, results) {
                        console.log(cTable.getTable(results));
                        appMenu();
                    });
                }
                else if (answer.firstAction == "View All Roles"){
                    db.query('SELECT * FROM roll', function (err, results) {
                        console.log(cTable.getTable(results));
                        appMenu();
                    });
                }
                else if (answer.firstAction == "View All Departments"){
                    db.query('SELECT * FROM department', function (err, results) {
                        console.log(cTable.getTable(results));
                        appMenu();
                    });
                }
                else if (answer.firstAction == "Add Department"){
                    addDepartment();
                    appMenu();
                }
                else if (answer.firstAction == "Add Role"){
                    addRoll();
                    appMenu();
                }
                else if (answer.firstAction == "Add Employee"){
                    addEmployee();
                    appMenu();
                }
                else if (answer.firstAction == "Update Employee Role") {
                    updateEmpRoll();
                    appMenu();
                }
                else if (answer.firstAction == "Quit") {
                    process.exit(0)
                }
            });
    }

    function addDepartment() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'departmentName',
                    message: "What is the name of the department?",
                    validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter at least one character.';
                    },
                },
            ])
            .then((answer) => {
                insertDep = 'INSERT INTO department (name) VALUES (?)';
                db.query(insertDep, [answer.departmentName], function(err) {
                    if (err) throw err;
                })
            })
    }

    function addRoll() {
        var departments = {};
        var departmentNames = []

        db.query('SELECT * FROM department', function (err, results) {
            departments = results;
            for (name in departments) {
                departmentNames.push(departments[name])
        
            }
        });
        
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'rollTitle',
                    message: "What is the title of the role?",
                    validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter at least one character.';
                    },
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: "What is the salary?",
                    validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return 'Please enter a positive number greater than zero.';
                    },
                },
                {
                    type: 'list',
                    name: 'department',
                    message: "Which department does the role belong to?",
                    choices: departmentNames
                },
            ])
            .then((answers) => {
                findID = `SELECT id FROM department WHERE name=?`
                var departmentID = 0;
                db.query(findID, [answers.department], function(err, result) {
                    departmentID = result[0].id;
                    answersArr = [
                        answers.rollTitle,
                        answers.salary,
                        departmentID
                    ]
                    insertRoll = 'INSERT INTO roll (title, salary, department_id) VALUES (?)';
                    db.query(insertRoll, [answersArr], function(err) {
                        if (err) throw err;
                    })
                })
            })
    }

    function addEmployee() {
        var rolls = {};
        var rollTitles = [];

        db.query('SELECT * FROM roll', function (err, results) {
            rolls = results
            i = 1
            for (id in rolls) {
                rollTitles.push(`${i}) ${rolls[id].title}`);
                i++
            }
        });

        var managers = {};
        var managerNames = ['None'];

        db.query('SELECT * FROM employee WHERE manager_id is NULL', function (err, results) {
            managers = results;
            for (id in managers) {
                managerNames.push(`${managers[id].first_name}` + ' ' + `${managers[id].last_name}`)
            }
        });
        
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: "What is the employee's first name?",
                    validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter at least one character.';
                    },
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: "What is the employee's last name?",
                    validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter at least one character.';
                    },
                },
                {
                    type: 'list',
                    name: 'roll',
                    message: "What is the role of this new employee?",
                    choices: rollTitles
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: "Who is the manager?",
                    choices: managerNames
                },

            ])
            .then((answers) => {
                if (answers.manager == 'None') {
                    answersArr = [
                        answers.firstName,
                        answers.lastName,
                        answers.roll[0]
                    ]
                    insertEmp = 'INSERT INTO employee (first_name, last_name, roll_id) VALUES (?)';
                    db.query(insertEmp, [answersArr], function(err) {
                        if (err) throw err;
                    })
                }
                else{
                    findID = 'SELECT id FROM employee WHERE first_name=? AND last_name=?';
                    var managerID = 0;
                    first = answers.manager.split(' ')[0];
                    last = answers.manager.split(' ')[1];
                    db.query(findID, [first, last], function(err, result) {
                        managerID = result[0].id;
                        answersArr = [
                            answers.firstName,
                            answers.lastName,
                            answers.roll[0],
                            managerID
                        ]
                        insertEmp = 'INSERT INTO employee (first_name, last_name, roll_id, manager_id) VALUES (?)';
                        db.query(insertEmp, [answersArr], function(err) {
                            if (err) throw err;
                        })
                    })
                }
            })
    }

    function updateEmpRoll() {
        var rolls = {};
        var rollTitles = [];

        db.query('SELECT * FROM roll', function (err, results) {
            rolls = results
            i = 1
            for (id in rolls) {
                rollTitles.push(`${i}) ${rolls[id].title}`);
                i++
            }
        });

        var employees = {};
        var empNames = [];

        db.query('SELECT * FROM employee', function (err, results) {
            employees = results;
            for (id in employees) {
                empNames.push(`${employees[id].first_name}` + ' ' + `${employees[id].last_name}`)
            }
        });


        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'confirm',
                    message: `This does nothing, the sql query just won't execute until inqirer does its thing¯|_(ツ)_/¯`,
                    choices: ['Yes', 'Okay']
                },
                {
                    type: 'list',
                    name: 'employee',
                    message: "Who is the employee getting a new role?",
                    choices: empNames
                },
                {
                    type: 'list',
                    name: 'roll',
                    message: "What is the new role of this employee?",
                    choices: rollTitles
                },
            ])
            .then((answers) => {
                updateRoll = 'UPDATE employee SET ? WHERE ? AND ?';
                    first = answers.employee.split(' ')[0];
                    last = answers.employee.split(' ')[1];
                    answersObj = {
                        roll_id: answers.roll[0],
                        first_name: first,
                        last_name: last
                    }
                    db.query(updateRoll, [
                        {roll_id: answers.roll[0]},
                        {first_name: first},
                        {last_name: last}
                    ],function(err) {
                            if (err) throw err;
                        })
            })

    }

    pickAction();
}
appMenu();
