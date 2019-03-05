const { db, Product, Category, deleteCat, getCategories } = require("./db/index");
const seed = require("./db/seed");
const app = require("./app");
const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => db.sync({force: true}))
  .then(console.log("db sync successful"))
  .then(() => seed())
  .then(() => console.log("db seeded"))
  .then(() => app.listen(PORT, () => {
    console.log("I'm listening...");
  }))
  .catch(ex => console.error(ex));
