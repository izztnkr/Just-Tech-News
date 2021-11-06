// import the Sequelize constructor from the library
const Sequelize = require("sequelize");

//loading environment variables from .env file into the connection code/file 
require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;

// This is where we set up the application to connect to the database using 
//Sequelize. All we're doing here is importing the base Sequelize class and 
// using it to create a new connection to the database. The new Sequelize() function 
// accepts the database name, MySQL username, and MySQL password (respectively) 
// as parameters, then we also pass configuration settings. Once we're done, 
// we simply export the connection.

//Also where we pass through environment variables from .env file using dotenv. 
