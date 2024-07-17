const express = require("express");
const router = express.Router();

// In-memory store
let productData = {};

router.get("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/admin/add-product" method="POST"><input name="title" type="text"><input type="number" name="size"><button type="submit">Add product</button></form></body></html>'
  );
});

router.post("/add-product", (req, res, next) => {
  productData = req.body;
  // Store the form data in the in-memory store
  res.redirect("/");
});

module.exports = { router, productData };
