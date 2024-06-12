const express = require("express");
const router = express.Router();
const { getCampaignStats } = require("../controllers/campaignController");

router.get("/stats", getCampaignStats);

module.exports = router;
