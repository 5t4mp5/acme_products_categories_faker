const db = require("../db");
const Sequelize = db.Sequelize;

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Product;
