const pg = require("pg");

let client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: process.env.DATABASE_URL ? true : false
  
});

if (process.env.NODE_ENV === "production") {
  client = new pg.Client({
    connectionString: process.env.DATABASE_URL || "",
    ssl: {
      rejectUnauthorized: false,
    }
  });
} 


client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
