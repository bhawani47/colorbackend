
// //  Importing Libraries
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const cors = require("cors");
// require('dotenv').config();
// require('./config');

// //  Parsing URL
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors({
//   credentials:true
// }));

// //  Importing Routes
// const registerRoute = require("./routes/registerRoute");
// const sendOtpRoute  = require('./routes/sendotpRoute');
// const loginRoute = require('./routes/loginRoute.js');
// const authuserRoute  = require('./routes/authuserRoute');

// //   Defining Routes
// app.get("/", (req, res) => { res.send("Hello World");});
// app.use('/api/register',registerRoute);
// app.use('/api/sendotp',sendOtpRoute);
// app.use('/api/login',loginRoute);
// app.use('/api/authuser',authuserRoute);

// //   Listening The Server
// app.listen(5000, () => {
//   console.log("Server Started :)");
// });

const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://bhawani47:BPFI43FJEBA3SrcT@win4you.b9d3glu.mongodb.net/?retryWrites=true&w=majority';
const database = 'test';
const client = new MongoClient(url);

async function getData(){
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('users');
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();