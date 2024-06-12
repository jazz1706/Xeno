const express = require("express");
const router = express.Router();
const { sendBulkMessages } = require("../controllers/communicationController");

router.post("/sendMessages", sendBulkMessages);

module.exports = router;
