const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Accounts collection and inserts the ones below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/godaddyatm"
);

const accountsSeed = [
  {
    account: 23416,
    balance: "$2051.52"
  },
  {
    account: 82352,
    balance: "(-$124.44)"
  },
  {
    account: 65275,
    balance: "$3.55"
  },
  {
    account: 31038,
    balance: "(-$51.22)"
  }
];

db.Account
  .remove({})
  .then(() => db.Account.collection.insertMany(accountsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
