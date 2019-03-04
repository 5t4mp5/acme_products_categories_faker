const { Category, createProduct } = require("./");

const items = [...new Array(3)];

module.exports = () => {
  return Promise.all(items.map(() => {
    return Category.add().then(cat => items.map(() => createProduct(cat.id)));
  }));
};
