const db = require("../models");

// Defining methods for the accountsController
module.exports = {
  findById: function(req, res) {
    db.Account
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
