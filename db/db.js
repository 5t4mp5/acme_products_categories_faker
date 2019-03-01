const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/acme_products_categories_faker");
module.exports = db;
const {Product, Category} = require('./models');

db.sync({force: true})
    .then(() => console.log("db synced"))
    .catch(ex => console.error(ex));

