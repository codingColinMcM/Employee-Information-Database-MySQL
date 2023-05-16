# Employee-Information-Database-MySQL

## Description

### Problem:

Business owners need to view and manage information about departments, roles, and employees in their company. An application is needed that offers options to view 
all departments, roles, and employees in a formatted table, as well as the ability to add departments, roles, and employees. Furthermore, the application has to 
provide functionality to update an employee's role in the database.

### Solution:
To fulfill the requirements of the business owner, I developed a command-line application using Node.js and the MySQL2 package. This application allows users to 
interact with a MySQL database and perform various queries. The application utilizes the Inquirer package for command-line user input and the console.table 
package to format and display MySQL rows. You are able to do the following with this application in your terminal: 

1. Upon starting the application, the user is presented with a menu of options, including viewing all departments, roles, and employees, as well as adding 
departments, roles, employees, and updating an employee's role.

2. When the user chooses to view all departments, the application retrieves the department names and department IDs from the database and presents them in a 
formatted table.

3. Similarly, when the user selects the option to view all roles, the application fetches the job titles, role IDs, associated departments, and salaries from the 
database, and displays them in a formatted table.

4. To view all employees, the application fetches employee data such as employee IDs, first names, last names, job titles, departments, salaries, and managers from the database and presents them in a formatted table.

5. When the user wants to add a department, the application prompts for the department name, and upon receiving user input, adds the department to the database.

6. To add a role, the application asks for the role's name, salary, and department, and upon user input, inserts the role into the database.

7. For adding an employee, the application prompts the user for the employee's first name, last name, role, and manager. Once the user provides the required 
information, the employee is added to the database.

8. Lastly, when the user chooses to update an employee's role, the application presents a list of employees for selection and prompts for the new role. The selected employee's role is then updated in the database accordingly.

By following these steps, I have developed a command-line application that fulfills the requirements of the user story. This application provides business owners 
with the capability to view and manage departments, roles, and employees in their company, enabling them to effectively organize and plan their business.

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Demo Video](#demo)
- [License](#license)
- [Questions?](#questions?)

## Screenshot

![Screenshot 2023-01-16 143048](https://user-images.githubusercontent.com/112663656/212753808-78cdcc55-5e8e-4974-aa51-7805cb46908f.png)

## Demo Vid

https://drive.google.com/file/d/1Ru1HgPWMflV5q_3wtXiLwdxUPVTR_oOe/view?usp=share_link
