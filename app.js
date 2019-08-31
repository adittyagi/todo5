const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const mainRoutes = require("./backend/routes/MainRoutes");
const session = require("express-session");

app.use(cors()); //Line1
app.use(compression()); //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //Line4
app.set("views", __dirname + "/client/views"); //line5

// ejs - for rendering ejs in html format
app.engine("html", require("ejs").renderFile); //Line6

// setting view-engine as ejs
app.set("view engine", "ejs"); //Line7

app.use(express.static(path.resolve(__dirname, "client"))); //Line8

// for logging purposes
app.use(logger("dev")); //Line9
app.use(session({
    secret: "KonfinitySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie : { path: '/', httpOnly: true, secure: false, maxAge: null }
}));
app.use("/", mainRoutes); 

app.set("port", process.env.PORT || 4000); //Line11
app.listen(app.get("port"), () => {
  //Line12
  console.log("Application running in port: " + app.get("port"));
});

module.exports = app;