const Pool = require("pg").Pool;

 const pool = new Pool({
  user: "postgres",
  password: "1982",
  host: "localhost",
  port: 5432,
  database: "JobForge"
 });

 module.exports = pool;