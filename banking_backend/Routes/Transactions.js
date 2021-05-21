const Router = require("express").Router();
const { transfer,transactionHistory } = require("./Controller");
const { transactionsValidation } = require("../Validations");

Router.post("/transfer", transactionsValidation, transfer);
Router.get("/transac-history", transactionHistory);

module.exports = Router;
