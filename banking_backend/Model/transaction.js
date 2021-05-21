const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    transac_from: {
      type: String,
      required: true,
      maxlength: 100,
    },
    transac_to: {
      required: true,
      type: String,
      maxlength: 100,
    },
    transac_from_user: {
      type: String,
      required: true,
      maxlength: 100,
    },
    transac_to_user: {
      required: true,
      type: String,
      maxlength: 100,
    },
    transac_amount: {
      required: true,
      type: String,
      maxlength: 20,
    },
  },
  { timestamps: true }
);

const Transactions = mongoose.model("Transaction", customerSchema);

module.exports.Transactions = Transactions;
