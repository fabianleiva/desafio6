import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  allowExitOnIdle: true,
});

pool.query("SELECT NOW()", (err, res) => {
  res ? console.log("DB-CONNECTED", res.rows[0].now) : console.log({ err });
});

export default pool;
