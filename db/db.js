const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });
module.exports = db;
const { Product, Category } = require("./models");
const faker = require("faker");

const addCategory = () =>
  Category.create({
    name: faker.commerce.department()
  });

const addProduct = category =>
  Product.create({
    name: faker.commerce.productName()
  }).then(prod => prod.setCategory(category));

module.exports = { db, addCategory, addProduct };
