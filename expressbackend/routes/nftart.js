const express = require("express");
const router = express.Router();
const db = require("monk")("localhost:27017/nftArt");

/* GET home page. */
router.get("/", async (req, res) => {
  const collection = await db.get("suprTxns");
  const allData = await collection.find({});
  res.json(allData);
});

module.exports = router;
