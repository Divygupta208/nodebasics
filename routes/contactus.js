const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

const body = [];

router.post("/contactus", (req, res, next) => {
  body.push(req.body);
  res.redirect("/contactus/success");
});

router.get("/contactus/success", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
