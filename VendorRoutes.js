const express = require("express");
const router = express.Router();
const { vendorApi } = require("../controllers/vendorController");

router.post("/vendor", vendorApi);

module.exports = router;
