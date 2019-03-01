const db = require("../db");
const Sequelize = db.Sequelize;
const Product = require("./Product");
const faker = require("faker");

const Category = db.define("category", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});

Category.add = function() {
  return Category.create({
    name: faker.commerce.department()
  });
};

Category.prototype.addProduct = function() {
  return Product.create({
    name: faker.commerce.productName()
  }).then(prod => prod.setCategory(this));
};

Category.prototype.delete = function() {
  return Product.findAll({ where: { categoryId: this.id } })
    .then(products => Promise.all(products.map(product => product.delete())))
    .then(() => Category.destroy({ where: { id: this.id } }));
};

module.exports = Category;