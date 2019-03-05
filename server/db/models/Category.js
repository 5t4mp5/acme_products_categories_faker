const db = require("../db");
const Sequelize = db.Sequelize;
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

module.exports = Category;