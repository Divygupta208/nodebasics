const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const productData = req.body;

  res.send(`<h1>${productData.title}</h1><p>Size: ${productData.size}</p>`);
});

module.exports = router;
