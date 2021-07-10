const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 7000;
const staticpath = path.join(__dirname, "/public");
const partialslink = path.join(__dirname, "/templateengine/partials");
const templateengine = path.join(__dirname, "/templateengine/views");
hbs.registerPartials(partialslink);
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templateengine);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/clients", (req, res) => {
  res.render("clients");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
