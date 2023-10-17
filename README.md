 ygjhkj kjhjkj

# Employee-Information-Database-MySQL

## Description

### Problem:

Business owners need to view and manage information about departments, roles, and employees in their company. An application is needed that offers options to view 
all departments, roles, and employees in a formatted table, as well as the ability to add departments, roles, and employees. Furthermore, the application has to 
provide the functionality to update an employee's role in the database.

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
- [Questions?](#quest)

## Overview 

The application is organized as follows:


* db folder: Contains the schema.sql file, which defines the initial structure of the MySQL database, and the seeds.sql file, which contains seed data for populating the database.
  * schema.sql: This file defines the structure of the MySQL database, including tables, columns, and relationships. It serves as the initial setup for the database.
  * seeds.sql: This file contains seed data that can be used to populate the database with predefined information. Seed data can be used for testing or providing initial data for the application.
* LICENSE: This file includes the license agreement for the application.
* README.md: This file serves as the README, providing instructions and information about the application.
* server.js: This file establishes a connection to the MySQL database and imports the inquirer library, which enables user prompts.
The db folder contains the following files:

The LICENSE file contains the license agreement for the application. It specifies the terms and conditions for using and distributing the code.

The README.md file provides comprehensive information about the application. It includes installation instructions, usage guidelines, and any other relevant details for developers and users.

The server.js file is the main entry point of the application. It establishes a connection to the MySQL database, allowing the application to interact with it. It also imports the inquirer library, which provides functionality for prompting the user with interactive questions or options.

Overall, this application's main directory contains the necessary files for setting up and interacting with a MySQL database. The schema.sql file defines the database structure, the seeds.sql file provides optional seed data, and the server.js file establishes the database connection and enables user prompts using the inquirer library. The LICENSE and README.md files provide legal and informational documentation for the application.


## Installation 

To run this project, install the necessary npm packages:

```
npm i inquirer@8.2.4 mysql2 console.table

```

## Usage

To set up the data base to be populated with the seed data, execute the following commands:

```
mysql -u root -p
source db/schema.sql
source db/seeds.sql
quit
```

Finally, you can run the application using the command: 

```
npm run server.js
```

## Screenshot

![Screenshot 2023-01-16 143048](https://user-images.githubusercontent.com/112663656/212753808-78cdcc55-5e8e-4974-aa51-7805cb46908f.png)

## Demo Video

<a href="https://drive.google.com/file/d/1Ru1HgPWMflV5q_3wtXiLwdxUPVTR_oOe/view?usp=share_link">Employee Information Database Demonstration</a>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<pre>
The MIT License

© Colin McMurtray University at North Carolina Chapel Hill Coding Bootcamp MIT License Copyright (c) 2023 Permission is hereby granted, free of charge, to 
any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to 
whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
</pre>

## Questions? <a name="quest"></a>

If you have any questions, please reach out to me using one of the following:

- [Email](mailto:mcmurtraycolin@gmail.com)
- [GitHub Profile](https://github.com/codingColinMcM)
