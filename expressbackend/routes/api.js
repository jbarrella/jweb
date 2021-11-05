var express = require("express");
var router = express.Router();

const nftart = require("./nftart");

/* GET home page. */
router.get("/", function (req, res) {
  res.json({
    message: "General purpose api",
  });
});

router.use("/nftart", nftart);

module.exports = router;
