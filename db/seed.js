const { Category } = require("./db");

const items = [...new Array(3)];

module.exports = () => {
  return Promise.all(items.map(() => {
    return Category.add().then(cat => items.map(() => cat.addProduct()));
  }));
};
