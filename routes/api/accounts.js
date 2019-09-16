const router = require("express").Router();
const accountsController = require("../../controllers/accountsController");

// Matches with "/api/accounts/:id"
router
  .route("/:id")
  .get(accountsController.findById)

module.exports = router;
