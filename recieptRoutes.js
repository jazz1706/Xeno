const express = require("express");
const router = express.Router();
const { receiptApi } = require("../controllers/receiptController");

router.post("/receipt", receiptApi);

module.exports = router;
