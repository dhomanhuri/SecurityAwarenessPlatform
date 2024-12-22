require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
var cors = require("cors");
const flash = require("connect-flash");

var expressHbs = require("express-handlebars");

var hbs = expressHbs.create({});
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var targetRouter = require("./routes/target");
var usersRouter = require("./routes/users");
var dashboardRouter = require("./routes/dashboard");
var demoRouter = require("./routes/demo");
var apiRouter = require("./routes/api");

var app = express();

app.use(session({ secret: process.env.JWT_SECRET, resave: false, saveUninitialized: true }));
app.use(flash());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/apinya", usersRouter);
app.use("/auth", authRouter);
app.use("/dashboard", dashboardRouter);
app.use("/demo", demoRouter);
app.use("/api", apiRouter);
app.use("/target", targetRouter);

module.exports = app;
