const db = require("./db");
const { Product, Category, deleteCat, createProduct, getCategories } = require("./models");

module.exports = { db, Product, Category, deleteCat, createProduct, getCategories };
