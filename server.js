const { db, Product, Category, deleteCat, getCategories } = require("./db/index");
const seed = require("./db/seed");
const app = require("./app");

db.authenticate()
  .then(() => db.sync({force: true}))
  .then(console.log("db sync successful"))
  .then(() => seed())
  .then(() => console.log("db seeded"))
  .then(() => app.listen(3000, () => {
    console.log("I'm listening...");
  }))
  .catch(ex => console.error(ex));
