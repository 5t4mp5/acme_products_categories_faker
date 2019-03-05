const express = require("express");
const router = express.Router();
const {
  getCategories,
  createProduct,
  deleteCat,
  Category,
  Product
} = require("../db");

router.get("/categories", (req, res, next) => {
  getCategories()
    .then(categories => res.json(categories))
    .catch(next);
});

router.post("/categories", (req, res, next) => {
  Category.add()
    .then(res.sendStatus(201))
    .catch(next);
});

router.post("/categories/:id", (req, res, next) => {
  createProduct(req.params.id * 1)
    .then(res.sendStatus(201))
    .catch(next);
});

router.delete("/categories/:id", (req, res, next) => {
  deleteCat(req.params.id * 1)
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.delete("/products/:id", (req, res, next) => {
  Product.destroy({ where: { id: req.params.id * 1 } })
    .then(res.sendStatus(204))
    .catch(next);
});

module.exports = router;
