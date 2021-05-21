//Package Imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors')


// Imports
const {Customer, Transactions} = require("./Routes");

//Configurations
const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


//Declarations
const port = process.env.PORT || 4000;

//MongoDB Configuration and Setup
const MongoUriString = process.env.MONGO_URI;
const MongoConfigObject = { useNewUrlParser: true, useUnifiedTopology: true };
const MongoCallback = (err) => {
  if (err) {
    console.log("Error==>>>", err);
    return;
  }
  console.log("MongoDB connection has been established successfully");
};

mongoose.connect(MongoUriString, MongoConfigObject, MongoCallback);

//Setting Up basic home route
app.get("/", (req, res) => {
  res.send(
    "Connections are running successfully, Please checkout Routes for further endpoints"
  );
});

//Assigning Routes
app.use("/customer", Customer);
app.use("/transactions", Transactions);

//Setting Up Server
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
