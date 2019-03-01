const db = require("../db");
const Sequelize = db.Sequelize;

module.exports = db.define("product", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});
