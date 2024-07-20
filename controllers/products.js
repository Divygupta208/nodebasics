const path = require("path");
const rootDir = require("../util/path");
const body = [];

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  res.redirect("/shop");
};

exports.getProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};

exports.getContact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

exports.postContact = (req, res, next) => {
  body.push(req.body);
  res.redirect("/contactus/success");
};

exports.getSuccessPage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
