const db = require("./db");
const { Product, Category, deleteCat, createProduct } = require("./models");

module.exports = { db, Product, Category, deleteCat, createProduct };
