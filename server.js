// Require NPM Packages
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers")

// App setup
var PORT = process.env.PORT || 8080;

//Express
var app = express();

// public files
app.use(express.static("public"));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes
app.use(routes);

// Parsing handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Start the Server
app.listen(PORT, function () {
    console.log("App now listening at http://localhost:" + PORT);
});