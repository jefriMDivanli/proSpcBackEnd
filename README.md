COMPANY DIRECTORY WEB-APPLICATION


APP OVERVIEW

- The simple application is created to add and delete data of a company and its offices. The application front-end was coded with React and Redux, while the animation was done with CSS. The front-end is conencted to the API with Axios, and the API was coded with Express.js and created to be paired specifically with MySQL database.

CONFIGURATION INSTRUCTION

- The simple app should be good on most popular web browsers such as Chrome, Firefox and Safari. 

INSTALLATION INSTRUCTION

- Install all projects dependencies via your terminal (for Team macOS)/command line (for team Windows):
  1. Install npm. You can follow the step here: "https://www.npmjs.com/get-npm".

  2. On your Terminal/CL, navigate to the "prospace" folder. Type "npm  install". This command should install all dependencies on the package.json file. Repeat the process for "prospaceBE".

  3. After installing is done, follow it with "npm start" to let the "prospace" folder run.
  
  4. Open a new Terminal/CL window and navigate to "prospaceBE". Command "nodemon .".

  5. It is important to keep both Terminals/CLs running.

SETTING UP MySQL DATABASE

- It is important that the column naming on the MySQL database matches perfectly, with the one in both "prospace" and "prospaceBE" folder.

- The database should be named "prospace". If you want to change it you can do so on the "database" section of "const conn" on prospaceBE.

```javascript
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',
    password: 'yourPassword',
    database: 'prospace',
    port: -yourPort as in MySQL Database- 
})
```
- The database shold have 2 tables:

  1. The first table name should be "company".
    - Table "company" should have 6 columns. Their name and spelling should match exactly as the list bellow:
      - id
      - name
      - address
      - revenue
      - countryCode
      - telephone

    - Column "id" should be set as the primary key and the box for "auto increment" abbreviated as "AI" should be ticked.

  2. The second table name should be "office".
    - Table "office" should have 6 columns too. Their name and spelling should match exactly as the list bellow:
      - id
      - officeName
      - latitude
      - longitude
      - startDate
      - company
    
    - Column "id" should be set as the primary key and the box for "auto increment" abbreviated as "AI" should be ticked.

  3. If the database naming is et up per list above, the application should run smoothly.


USING THE APPLICATION

1. The application can be use to register a company, and render it to the "Company" section of the main page. 

  - To do so, simply fill in all the fields on "Create Company" section.

  - Note that all fields must be filled for the company to be submitted to the database. But, don't worry, if you accidentally missed a column, an alert will pop up, and notification will be printed on the input filed you missed.

  - Once you filled all the text fields on the "Company Form". Press "Submit". The new company will be rendered on the "Company section" automatically.

  - To delete, simple clicked on the "X" button.
  
  - Note: if you delete a company, you will delete all the offices that the company contain.

2. The application can also be use to register an office to a company, and render it to the "office" section page.

  - To do so, simply fill in all the fields on "Create Office" section.

  - Note that all fields must be filled for the company to be submitted to the database. But, don't worry, if you accidentally missed a column, an alert will pop up, and notification will be printed on the input filed you missed.

  - Select a date manually, if you want to show a calender, click on the arrow button on the right corner of the input field.

  - Select the company that the office belongs to by choosing one of the company on the dropdown list.

3. To navigate to the Office list page, simply click on the company data card on the company section on the main page.

  - To delete, simple clicked on the "X" button.

  - To go back to the main page, click on "Back to overview" button.


