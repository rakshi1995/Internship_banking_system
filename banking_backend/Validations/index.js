const viewCustomerByIdValidator = (req, res, next) => {
  console.log(req.params);
  if (!("_id" in req.params)) {
    res.status(400).send("Invalid Request Parameters");
    return;
  }
  next();
};

const addCustomerValidator = (req, res, next) => {
  const body = req.body;
  const validation = validationCheck(body);
  console.log(body);

  if (!validation) {
    res.status(400).send(`Invalid Request Parameters`);
    return;
  } else {
    next();
  }
};

const transactionsValidation = (req, res, next)=>{
  const body = req.body;
  const validation = transactionValidationCheck(body);
  if (!validation) {
    res.status(400).send(`Invalid Request Parameters`);
    return;
  } else {
    next();
  }

}

const validationCheck = (body) => {
  if (!("fname" in body)) return false;
  if (!("lname" in body)) return false;
  if (!"acc_no" in body) return false;
  if (!("acc_balance" in body)) return false;
  if (!("email" in body)) return false;
  return true;
};

const transactionValidationCheck = (body) => {
  if (!("from_account" in body)) return false;
  if (!("to_account" in body)) return false;
  if (!"transaction_amount" in body) return false;
  return true;
};

module.exports = {
  viewCustomerByIdValidator,
  addCustomerValidator,
  transactionsValidation
};
