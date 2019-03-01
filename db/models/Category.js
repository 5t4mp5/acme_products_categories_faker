const db = require("../db");
const Sequelize = db.Sequelize;

module.exports = db.define("category", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});
