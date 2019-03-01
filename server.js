const { db } = require("./db/db");
const seed = require("./db/seed");

db.authenticate()
  .then(() => db.sync({force: true}))
  .then(console.log("db sync successful"))
  .then(() => seed())
  .then(() => console.log("db seeded"))
  .catch(ex => console.error(ex));
