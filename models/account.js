const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  account: { type: String, required: true },
  balance: { type: String, required: true }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
