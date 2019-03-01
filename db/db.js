const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });
module.exports = db;
const { Product, Category } = require("./models");

module.exports = { db, Product, Category };
