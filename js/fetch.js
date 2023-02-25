"use strict";

const mockData = {
  url: "",
  timestamp: "",
  ranks: { hundos: 1, performance: 1, accessibility: 1, cumulative: 1 },
  lighthouse: {
    version: "10.0.1",
    performance: "100",
    accessibility: "90",
    bestPractices: "80",
    seo: "80",
    total: "350",
  },
  firstContentfulPaint: "785ms",
  speedIndex: "785ms",
  largestContentfulPaint: "1.47s",
  totalBlockingTime: "0ms",
  cumulativeLayoutShift: "0.00",
  timeToInteractive: "785ms",
  maxPotentialFirstInputDelay: "46ms",
  weight: {
    summary: "85 requests • 91 kib",
    total: "91 kib",
    image: "6 kib",
    imageCount: 18,
    script: "27 kib",
    scriptCount: 41,
    document: "3 kib",
    font: "49 kib",
    fontCount: 2,
    stylesheet: "6 kib",
    stylesheetCount: 2,
    thirdParty: "6 kib",
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
  // there's a log, probably use that to show the violations?
  axe: { passes: 994, violations: 13 },
};

// instead of using cache we use localStorage
// the function will going to check if the url scan before, if yes then get a data from localStorage if not then re setItem the data
const fetchData = (isCache = "", url = "") => {
  if (isCache !== "cacheOn") {
    return;
  }
  const randomNum = () => {
    return Math.floor(Math.random() * 1000000) + 1;
    // too long
    // return Date.now();
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
