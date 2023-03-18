const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
require('./config');

const app = express();

// //  Parsing URL
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  credentials:true
}));

// //  Importing Routes
const registerRoute = require("./routes/registerRoute");
const sendOtpRoute  = require('./routes/sendotpRoute');
const loginRoute = require('./routes/loginRoute.js');
const authuserRoute  = require('./routes/authuserRoute');

// //   Defining Routes
app.get("/", (req, res) => { res.send("Hello World");});
app.use('/api/register',registerRoute);
app.use('/api/sendotp',sendOtpRoute);
app.use('/api/login',loginRoute);
app.use('/api/authuser',authuserRoute);

module.exports = app;
