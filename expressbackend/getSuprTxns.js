// const { response } = require("express");
// const { set } = require("./app");

const db = require("monk")("localhost:27017/nftArt");
const { ethers } = require("ethers");
const axios = require("axios");
const tabletojson = require("tabletojson").Tabletojson;
// const cheerio = require("cheerio");

// https://eth-mainnet.alchemyapi.io/v2/ndQNh5eN1yC9q2PDWqmJGYckxdT34Zwl

function makeTxnsReq(address, start, end) {
  apiKey = "ZHRC3U85F9Q4YI99P6GQEHCPC87V6RSQ2T";
  slug = "https://api.etherscan.io/api";
  endpoint = `${slug}?module=account&action=txlist&address=${address}&startblock=${start}&endblock=${end}&sort=asc&apikey=${apiKey}`;
  return axios.get(endpoint).then((response) => response.data);
}

async function getTxns() {
  const network = "homestead";
  const provider = ethers.getDefaultProvider(network, {
    etherscan: "ZHRC3U85F9Q4YI99P6GQEHCPC87V6RSQ2T",
  });

  const blockHeight = await provider.getBlockNumber();

  console.log(`block height: ${blockHeight}`);

  const suprAddress = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0";

  const data = { days: {}, collected: Date.now() };
  for (batch = 0; batch < 3; batch++) {
    const start = blockHeight - 100000 * (batch + 1);
    const end = blockHeight - 100000 * batch;

    console.log(`${start} -> ${end}`);

    suprTxns = await makeTxnsReq(suprAddress, start, end);

    // console.log(suprTxns);

    for (t of suprTxns.result) {
      console.log(t)
      let date = new Date(t.timeStamp * 1000);
      date = date.toISOString().split("T")[0];

      if (date in data.days) {
        data.days[date]++;
      } else {
        data.days[date] = 1;
      }
    }
  }

  console.log(data);

  // const suprTxnsDB = db.get("suprTxns");
  // const inserted = await suprTxnsDB.insert(data);
  // console.log("You may exit safely.");
}

getTxns();
// log();

// const collection = db.get("sales");

// collection.insert({ tuesday: 100 });

// collection.find({}).then((res) => {
//   console.log(res);
// });
