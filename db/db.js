const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL);
module.exports = db;
const { Product, Category } = require("./models");

db.sync({ force: true })
  .then(() => console.log("db synced"))
  .catch(ex => console.error(ex));
