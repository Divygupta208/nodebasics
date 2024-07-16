const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/product" method="POST" ><input name="title" type="text"><button type="submit">Add product</button></form></body></html>'
  );
});

app.use("/product", (req, res, next) => {
  const body = req.body;
  console.log(body);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
