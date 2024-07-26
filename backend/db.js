const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "john",
//   password: "123456",
//   host: "localhost",
//   port: 5050,
//   database: "perntodo"
// }).Pool;

const pool = new Pool({
  user: "postgres", // pc to pc basis
  password: "qvgp96nm", // @home 123456 pud ang pass
  host: "database-1.chigy6gykcgu.ap-southeast-2.rds.amazonaws.com",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
