const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminroutes.router);
app.use(shoproutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
