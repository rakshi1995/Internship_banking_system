const mongoose = require("mongoose");
const assert = require("assert");
const { Customer } = require("../Model/customer.model");
const { read } = require("fs");
const { Transactions } = require("../Model/transaction");

//==========================================Customer Route Methods =================================================

const viewCustomer = async (req, res) => {
  const success = {
    status: "Success",
  };
  const error = {
    status: "Error",
  };
  try {
    const customer = await Customer.find();
    success.customers = customer;
    res.status(200).send(success);
  } catch (err) {
    error.error = err;
    res.status(400).send(error);
  }
};

const viewCustomerById = async (req, res) => {
  const success = {
    status: "Success",
  };
  const error = {
    status: "Error",
  };
  try {
    const id = req.params._id;
    const customer = await Customer.findById({ _id: id });
    success.customers = customer;
    res.status(200).send(success);
  } catch (err) {
    error.error = "User not Found";
    console.log(err);
    res.status(400).send(error);
  }
};

const addCustomer = async (req, res) => {
  const success = {
    status: "Success",
  };
  const error = {
    status: "Error",
  };
  try {
    console.log("req.body===>", req.body);
    const body = req.body;
    const query = {};

    body.email &&
      body.acc_no &&
      (query.$or = [{ email: body.email }, { acc_no: body.acc_no }]);

    console.log(query);

    let user = await Customer.find(query);
    console.log("user exists===>>>>", user);

    if (user.length) {
      error.msg = "User Already Exists";
      res.status(400).send(error);
      return;
    }

    user = new Customer(req.body);
    user = await user.save();
    success.message = "User Added Successfully";
    success.user = user;
    res.status(200).send(success);
  } catch (err) {
    console.log(err);

    const error = {
      status: "Error",
      error: err,
    };
    res.status(400).send(error);
  }
};

//==========================================Transaction Route Methods =================================================

const transfer = async (req, res) => {
  const success = {
    status: "Success",
  };
  const error = {
    status: "Error",
  };
  try {
    const { from_account, to_account, transaction_amount } = req.body;
    error.message = "Customer not found";

    let query = {};
    let payload = {};

    query.acc_no = from_account;
    let from_user = await Customer.findOne(query);
    console.log('from_user==>',from_user);

    query.acc_no = to_account;
    let to_user = await Customer.findOne(query);
    console.log('to_user==>',to_user);


    (!from_user || !to_user) && res.status(400).send(error);

    payload.acc_balance =
      Number(from_user.acc_balance) - Number(transaction_amount);
    query.acc_no = from_account;
    from_user = await Customer.findOneAndUpdate(query, payload);

    payload.acc_balance =
      Number(to_user.acc_balance) + Number(transaction_amount);
    query.acc_no = to_account;
    to_user = await Customer.findOneAndUpdate(query, payload);

    const to_user_name = `${to_user.fname} ${to_user.lname}`;
    const from_user_name = `${from_user.fname} ${from_user.lname}`;

    const transactionQuery = {
      transac_from_user: from_user_name,
      transac_to_user: to_user_name,
      transac_from: from_account,
      transac_to: to_account,
      transac_amount: transaction_amount,
    };

    const transaction = new Transactions(transactionQuery);
    console.log('transaction==>',transaction);

    transaction.save();

    success.message = "Transaction is Completed Successfully";
    res.status(200).send(success);

  } catch (error) {
    console.log("error===>", error);
    res.send(error);
    console.log(error);

  }
};

const transactionHistory = async (req, res) => {
  const success = {
    status: "Success",
  };
  const error = {
    status: "Error",
  };
  try {
    const transactions = await Transactions.find().sort({_id:-1})
    success.transactions = transactions;
    res.send(success);
  } catch (erro) {
    error.error = err;
    res.status(400).send(error);
  }
};

module.exports = {
  viewCustomer,
  viewCustomerById,
  transfer,
  addCustomer,
  transactionHistory,
};
