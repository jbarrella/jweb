var express = require("express");
var router = express.Router();

const nftCharts = require("./nftCharts");

/* GET home page. */
router.get("/", function (req, res) {
  res.json({
    message: "General purpose api",
  });
});

router.use("/nftCharts", nftCharts)

module.exports = router;
