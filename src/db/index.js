const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  ssl: {
    rejectUnauthorized: process.env.DATABASE_URL ? true : false
  }
    
  
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
