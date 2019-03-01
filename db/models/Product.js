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

Product.prototype.delete = function() {
  Product.destroy({where:{id: this.id}});
};

module.exports = Product;