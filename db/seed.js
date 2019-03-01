const { addProduct, addCategory } = require("./db");

const items = [...new Array(3)];

module.exports = () => {
  return items.map(() => {
    addCategory().then(cat => items.map(() => addProduct(cat)));
  });
};
