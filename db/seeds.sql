INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Electives");

INSERT INTO roll (title, salary, department_id)
VALUES  ("Manager", 100000, 1),
        ("Employee", 80000, 1),
        ("Manager", 200000, 2),
        ("Employee", 70000, 2),
        ("Manager", 300000, 3),
        ("Employee", 60000, 3);

INSERT INTO employee (first_name, last_name, roll_id, manager_id)
VALUES  ("John", "Yu", 1, NULL),
        ("Colin", "McMurtray", 2, 1),
        ("Ryan", "Whitacre", 2, 1),
        ("John", "Madden", 3, NULL),
        ("Brendan", "McMurtray", 4, 4),
        ("TRowe", "Price", 4, 4),
        ("Aaron", "Rodgers", 4, 4),
        ("Xi", "Yu", 5, NULL),
        ("Colin", "Firth", 6, 8),
        ("Lamar", "Jackson", 6, 8),
        ("Mark", "Andrews", 6, 8);