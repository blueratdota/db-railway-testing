const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "john",
//   password: "123456",
//   host: "localhost",
//   port: 5050,
//   database: "perntodo"
// }).Pool;

const pool = new Pool({
  user: process.env.DB_USER, // AWS MASTER USERNAME
  password: process.env.DB_PASSWORD, // AWM MASTER PASSWORD
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
