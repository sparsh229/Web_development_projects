const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require("./date");
var items = ["Click on + sign to add items", "click on checkbox to delete item", "Example list"];
var workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  var day = date();
  res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", function (req, res) {
  var item = req.body.newItem;
  console.log(req.body.list);
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});
app.get("/about", function (req, res) {
  res.render("about");
});
let port = process.env.PORT;
if(port==null||port==""){
    port = 3000;
}
app.listen(port, function (req, res) {
  console.log("Server is running at port 3000");
});
