const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const productController = require("../controllers/products");

router.get("/contactus", productController.getContact);

router.post("/contactus", productController.postContact);

router.get("/contactus/success", productController.getSuccessPage);

module.exports = router;
