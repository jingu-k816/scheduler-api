const pg = require("pg");
console.log("THIS IS THE NODE ENV",process.env.NODE_ENV);
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  ssl: process.env.DATABASE_URL ? true : false
  
});
client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
