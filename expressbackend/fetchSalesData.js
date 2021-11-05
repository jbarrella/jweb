// const { response } = require("express");
// const { set } = require("./app");

const db = require("monk")("localhost:27017/nftArt");
const { ethers } = require("ethers");
const axios = require("axios");
const tabletojson = require("tabletojson").Tabletojson;
// const cheerio = require("cheerio");

// https://eth-mainnet.alchemyapi.io/v2/ndQNh5eN1yC9q2PDWqmJGYckxdT34Zwl
// const provider = ethers.getDefaultProvider(network, {etherscan: 'ZHRC3U85F9Q4YI99P6GQEHCPC87V6RSQ2T'});
// const network = "homestead";
// provider = new ethers.providers.EtherscanProvider(
//   network,
//   "ZHRC3U85F9Q4YI99P6GQEHCPC87V6RSQ2T"
// );

function getNormalTransactions(address, start, end) {
  apiKey = "ZHRC3U85F9Q4YI99P6GQEHCPC87V6RSQ2T";
  slug = "https://api.etherscan.io/api";
  endpoint = `${slug}?module=account&action=txlist&address=${address}&startblock=${start}&endblock=${end}&sort=asc&apikey=${apiKey}`;
  return axios.get(endpoint).then((response) => response.data);
}

function getSUPRTxnsHTML(page) {
  let headers = {
    authority: "etherscan.io",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    "sec-ch-ua-mobile": "?0",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "iframe",
    referer:
      "https://etherscan.io/token/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    "accept-language": "en-US,en;q=0.9",
    cookie:
      "ASP.NET_SessionId=4w1wzxfzuig5vz4xzvvevwjj; etherscan_userid=Shining; etherscan_pwd=4792:Qdxb:hwGpFj/rjlI4YEKjE8BUC5Ga417587a3sTdd95Baoqw=",
  };

  endpoint = `https://etherscan.io/token/generic-tokentxns2?m=normal&contractAddress=0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0&a=&sid=2f438a7f00c58c7c54e07601fa623aca&p=${page}`;

  return axios
    .get(endpoint, { headers })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

async function getSUPRTxnsData(page) {
  // console.log("Requesting token data...");

  const rawHTML = await getSUPRTxnsHTML(page);

  // console.log("Processing table...");

  const table = tabletojson.convert(rawHTML);
  if (table.length == 0) {
    console.log("waiting");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("waited");
    getSUPRTxnsData(page);
  }
  const cleanTable = [];
  for (row of table[0]) {
    data = {
      timestamp: row["3"],
      from: row["5"],
      to: row.TokenID,
      tokenID: row["8"],
      txnHash: row["Txn Hash"],
      method: row.Method,
    };
    cleanTable.push(data);
  }

  return cleanTable;
}

function getNSales(page) {
  return new Promise(async (resolve) => {
    const nBuys = {};
    const nAcceptedBids = {};
    const nSales = {};
    const transactions = await getSUPRTxnsData(page);
    console.log(transactions[0].timestamp);
    for (t of transactions) {
      const day = t.timestamp.split(" ")[0];
      if (t.method == ("Buy" || "Accept Bid")) {
        day in nSales ? nSales[day]++ : (nSales[day] = 1);
      }
      resolve(nSales);
      // if (t.method == "Buy") {
      //   day in nBuys ? nBuys[day]++ : (nBuys[day] = 1);
      // } else if (t.method == "Accept Bid") {
      //   day in nAcceptedBids ? nAcceptedBids[day]++ : (nAcceptedBids[day] = 1);
      // }
    }
    // resolve([nBuys, nAcceptedBids]);
  });
}

async function sendPromises() {
  const nPages = 2;
  let allData = { days: {}, collected: Date.now() };
  for (pageBatch = 0; pageBatch <= 200; pageBatch++) {
    // const pages = [...Array(10).keys()].slice(1);
    let pages = [...Array(nPages).keys()];
    pages = pages.map((p) => p + 1 + nPages * pageBatch);
    console.log(pages);
    const data = await Promise.all(pages.map(getNSales));

    for (page of data) {
      if (Object.keys(page).length == 0) {
        continue;
      }
      for (day of Object.keys(page)) {
        if (day in allData.days) {
          allData.days[day] += page[day];
        } else {
          allData.days[day] = page[day];
        }
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
  const superrareSales = db.get("superrareSales");
  const inserted = await superrareSales.insert(allData);
  console.log("You may exit safely.");
  // console.log(allData);
}

async function log() {
  var blockHeight = await provider.getBlockNumber();
  console.log(blockHeight);

  superRareAddress = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0";
  //   superRareAddress = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0";
  start = blockHeight - 10000;
  end = blockHeight;
  //   provider.getBlock(blockHeight - 10)
  //   .then((res) => {
  //       console.log(res)
  //   })

  superRareSales = await getNormalTransactions(superRareAddress, start, end);
  console.log(superRareSales);

  var offerMethodId = "0xc0f4ed31";
  var bidMethodId = "0x0f41ba4b";
  offersTotal = 0;
  bidsTotal = 0;
  methods = new Set();
  for (t of superRareSales.result) {
    code = t.input;
    console.log(code);
    methodId = code.substring(0, 10);
    // console.log(methodId)
    methods.add(methodId);
    if (methodId == offerMethodId) {
      offersTotal++;
    } else if (methodId == bidMethodId) {
      bidsTotal++;
    }
  }

  console.log(offersTotal, bidsTotal);
  console.log(methods);

  // provider
  //   .getTransactionCount("0xcd4EC7b66fbc029C116BA9Ffb3e59351c20B5B06")
  //   .then((res) => {
  //     console.log(res);
  //     // console.log(interface.parseTransaction(res))
  //     // console.log(ethers.utils.parseBytes32String(res.data))
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

sendPromises();
// log();

// const collection = db.get("sales");

// collection.insert({ tuesday: 100 });

// collection.find({}).then((res) => {
//   console.log(res);
// });
