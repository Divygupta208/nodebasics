const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/product" method="POST" ><input name="title" type="text"><input type="number" name="size" ><button type="submit">Add product</button></form></body></html>'
  );
});

let body = {};

app.post("/product", (req, res, next) => {
  body = req.body;
  res.redirect("/");
  console.log(body);
});

app.use("/", (req, res, next) => {
  res.send(`<h1>${body.title}</h1>`);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
