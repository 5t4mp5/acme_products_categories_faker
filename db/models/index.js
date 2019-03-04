const Product = require("./Product");
const Category = require("./Category");
const faker = require("faker");

Category.hasMany(Product);
Product.belongsTo(Category);

function createProduct(catId) {
  return Product.create({ name: faker.commerce.productName(), categoryId: catId });
};


function deleteCat(catId) {
  return Product.destroy({ where: { categoryId: catId } })
    .then(() => Category.destroy({ where: { id: catId } }))
    .catch(ex => console.err(ex.message));
}

module.exports = { Product, Category, deleteCat, createProduct };
