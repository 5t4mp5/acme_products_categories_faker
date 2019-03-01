const {db, Product, Category} = require("./db");
const seed = require("./seed");
const expect = require("chai").expect;

describe("db delete methods", () => {
  it("deletes a single product", () => {
    db.authenticate()
      .then(() => db.sync({force: true}))
      .then(() => seed())
      .then(() => Category.findByPk(1))
      .then(category => category.delete())
      .then(() => Category.findAll())
      .then(categories => expect(categories.length).to.equal(2))
  });
});
