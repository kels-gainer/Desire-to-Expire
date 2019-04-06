# Desire-to-Expire

![Desire-to-Expire](https://i.ytimg.com/vi/eHpGS9-8Rd0/hqdefault.jpg)
## A helpful app designed to keep your Refidgerator fresh, and remind you to use parishable items before they COME ALIVE!

- - -

### Our Team

 * Ariana R. - [view on GitHub](https://github.com/ReturnofVenus)
 * Kelsey G. - [view on GitHub](https://github.com/kels-gainer)
 * Kennith S. - [view on GitHub](https://github.com/KennethS13)
 * Jesse MH. - [view on GitHub](https://github.com/Gamlilorien)
 * Tim L. - [view on GitHub](https://github.com/TimothyLee504)

### Divisions of Labor
 * Ariana R. - Usecase research, design, and form component
 * Kelsey G. - Database Schemas, Seed data, and help with modal
 * Kennith S. - API definitions, routes and proof-reader
 * Jesse MH. - User authentication, merging content, MySQL tweaks
 * Tim L. - Modal component and cascading value list

- - -

### App Concept
The purpose of this mobile web app is to allow users to easily record and track parishable items that they have in their fridge so they can be reminded to use them before they expire. If possible, we would also like to allow users to get suggested recipies for the ingredients that they have on hand, and even prioritize such recipie suggestions so as to use the soon to expire itmes first.

- - -
### Research:
* Americans waste approximately 100 billion pounds of food each year.
* This equates to roughly 14% of food purchased in an average household.
* This breaks down to approximately $500 of wasted food on an annual basis per household.
* 15% of this waste comes from food unopened and still within its expiration date.
* We throw away about 1.5 pounds of food daily.
* Additionally, this discarded food translates into increased pollution through increased methane production

- - -

### Technology Used:

  * [REACT](https://reactjs.org/) - for a user responsive front end Javascript framework
  * [node.js](https://nodejs.org/en/) - for Javascript based server code and logic
  * [express](https://expressjs.com/) - companion Web Framework for node.js
  * [MySQL](https://www.npmjs.com/package/mysql) - for the App storage and database
  * [Sequelize](http://docs.sequelizejs.com/) - for node to directly recieve and send data to our MySQL database via GET and POST requests.
  * [Auth0](https://auth0.com/docs/quickstart/spa) - for node based user authentication
  * [React Bootstrap](https://react-bootstrap.github.io/components/alerts/) - a UI framework that uses the power of Bootstrap with REACT applications
  * [Heroku](https://www.heroku.com/) - for app deployment and hosting
  * A folder struction that follows the MVC Pardigm
  * Custom MySQL, Javascript, HTML, and CSS - for everything else!

- - -

### USER Stories/ Features

1. User account creation and login, if possible a remember me option as well.

2. Quick data-entry of perishable items

3. An internal database with pre-seeded food types and their suggested expirations based on common food types. For example: Raw Meat 3 days, Deli Meat 7 days, Milk 2 weeks, Soft Fruit 1 week, Firm Fruit 2 weeks etc

4. Options to Find, Update, and Delete entries of users perishable items as well as the ability to see them sorted by expiration

5. Some sort of logic to calculate days remaining till expiration when a user opens the app

6. Users should see some sort of Toast, or Notification upon opening the app if one or more of their entered items is about to expire.

- - -

### Development Notes

 * For local deployment or testing you will need to do the following using terminal from the project directory:
    
       npm install
    
       npm start
    
       sequelize db:seed:all
    
 The first is a one-time command for installing all of the require npm packages and dependencies. The npm start and sequelize db:seed:all commands are required EACH time the app is started from local deployment as the app clears the database records each time it starts, and the sequelize command re-populates it with seed data.

Also, if you do not already have MySQL configured on your machine, this is required along with initalization of the Fridge_db database table before starting the app. In [MySQL Workbench](https://www.mysql.com/products/workbench/) run the following command to created the desired app MySQL database:

    DROP DATABASE IF EXISTS Fridge_db;

    CREATE DATABASE Fridge_db;

- - -

### Future Development*

* Intregration with a recipies API

