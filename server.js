var bodyParser = require("body-parser");

var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.send('i did it world');
})

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)
})