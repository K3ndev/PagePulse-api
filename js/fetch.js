"use strict";

const mockData = {
  url: "",
  timestamp: "",
  ranks: { hundos: 1, performance: 1, accessibility: 1, cumulative: 1 },
  lighthouse: {
    version: "10.0.1",
    performance: 0.25,
    accessibility: 0.98,
    bestPractices: 0.83,
    seo: 0.93,
    total: 299,
  },
  firstContentfulPaint: 7072.134999999999,
  firstMeaningfulPaint: 7072.134999999999,
  speedIndex: 12179.751227258272,
  largestContentfulPaint: 18287.6765,
  totalBlockingTime: 5485.376,
  cumulativeLayoutShift: 0,
  timeToInteractive: 20514.459000000003,
  maxPotentialFirstInputDelay: 2360,
  timeToFirstByte: 188.765,
  // kB
  weight: {
    summary: "85 requests • 1,006 KiB",
    total: 1030498,
    image: 124039,
    imageCount: 18,
    script: 653565,
    scriptCount: 41,
    document: 123234,
    font: 55622,
    fontCount: 2,
    stylesheet: 3051,
    stylesheetCount: 2,
    thirdParty: 200003,
    thirdPartyCount: 36,
  },
  run: { number: 3, total: 3 },
  sidequests: {
    "-weight.total": 1,
    "+weight.total": 1,
    "-weight.document": 1,
    "+weight.document": 1,
    "-weight.script": 1,
    "+weight.script": 1,
    "-weight.image": 1,
    "+weight.image": 1,
    "-weight.font": 1,
    "+weight.font": 1,
    "+weight.fontCount": 1,
    "-timeToFirstByte": 1,
    "-totalBlockingTime": 1,
    "-largestContentfulPaint": 1,
  },
  // there's a log, probably you can see the violations?
  axe: { passes: 994, violations: 13 },
};

// instead of using cache we use localStorage for the requirement of the proj
// the function will going to check if the url scan before, if yes then get a data from localStorage if not then re setItem the data
const fetchData = (isCache = "", url = "") => {
  if (isCache !== "cacheOn") {
    return;
  }
  const randomNum = () => {
    return Math.floor(Math.random() * 1000000) + 1;
  };
  // new deep
  const cloneData = () => {
    return [mockData].map((i) => {
      i.url = url;
      i.timestamp = randomNum();
      return i;
    });
  };
  const prevUrl = () => {
    return localStorage.getItem("prevUrl");
  };
  //  re-setItem
  if (prevUrl() !== url) {
    console.log("getting new data");
    // json() JSON body -> object or arr
    // JSON.stringify() arr or obj -> JSON string
    // JSON.parse()  JSON string -> arr or obj

    localStorage.setItem("localData", JSON.stringify(cloneData()));
    localStorage.setItem("prevUrl", url);

    let data = JSON.parse(localStorage.getItem("localData"));
    return { data };
  }
  let data = JSON.parse(localStorage.getItem("localData"));
  console.log("getting prev data");
  return { data };
};

export default fetchData;
