const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      maxlength: 100,
    },
    lname: {
      required: true,
      type: String,
      maxlength: 100,
    },
    acc_no: {
      required: true,
      type: String,
      maxlength: 20,
      unique: true
    },
    email: {
      required: false,
      type: String,
      maxlength: 100,
      unique: true
    },
    acc_balance: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports.Customer = Customer;
