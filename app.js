const axios = require("axios");
const fs = require("fs");
const Json2csvParser = require("json2csv").Parser;
const shell = require("shelljs");

const siteData = require("./data.site.config");

const loopOverSites = async siteData => {
  for (let i = 0; i < siteData.length; i += 1) {
    const site = siteData[i];

    for (let j = 0; j < site.items.length; j += 1) {
      const item = site.items[j];
      const folder = site.name + "/" + item.name;
      await fetchFreeData(folder, item.urls);
    }
    console.log("Complete : " + site.name);
  }
};

const fetchFreeData = async (folder, urls) => {
  let finalData = [];
  for (let i = 0; i < urls.length; i += 1) {
    const url = urls[i];
    try {
      const dataResp = await axios(url);
      if (dataResp.status === 200) {
        finalData = [...finalData, ...dataResp.data];
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }
  saveDataOnFiles(folder, finalData);
};

const saveDataOnFiles = (folder, data) => {
  const dir = __dirname + "/data/" + folder;
  if (data && data.length > 0) {
    shell.mkdir("-p", dir);
    fs.writeFileSync(dir + "/data.json", JSON.stringify(data));

    const fields = Object.keys(data[0]);
    const opts = { fields };
    const parser = new Json2csvParser(opts);
    const csvData = parser.parse(data);
    fs.writeFileSync(dir + "/data.csv", csvData);
  }
};

loopOverSites(siteData);
