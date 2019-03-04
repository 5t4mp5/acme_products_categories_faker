const { db, Product, Category, deleteCat } = require("./db/index");
const seed = require("./db/seed");

db.authenticate()
  .then(() => db.sync({force: true}))
  .then(console.log("db sync successful"))
  .then(() => seed())
  .then(() => console.log("db seeded"))
  .then(() => deleteCat(1))
  .catch(ex => console.error(ex));
