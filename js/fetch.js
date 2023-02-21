"use strict";

const mockData = {
  url: "",
  timestamp: "",
  ranks: { hundos: 1, performance: 1, accessibility: 1, cumulative: 1 },
  lighthouse: {
    version: "8.0.0",
    performance: 1,
    accessibility: 1,
    bestPractices: 1,
    seo: 1,
    total: 400,
  },
  firstContentfulPaint: 1152.3029999999999,
  firstMeaningfulPaint: 1152.3029999999999,
  speedIndex: 1152.3029999999999,
  largestContentfulPaint: 1152.3029999999999,
  totalBlockingTime: 36,
  cumulativeLayoutShift: 0.02153049045138889,
  timeToInteractive: 1238.3029999999999,
  maxPotentialFirstInputDelay: 97,
  timeToFirstByte: 54.63900000000001,
  weight: {
    summary: "14 requests • 178 KiB",
    total: 182145,
    image: 124327,
    imageCount: 10,
    script: 7824,
    scriptCount: 1,
    document: 30431,
    font: 15649,
    fontCount: 1,
    stylesheet: 3914,
    stylesheetCount: 1,
    thirdParty: 15649,
    thirdPartyCount: 1,
  },
  run: { number: 2, total: 3 },
  axe: { passes: 850, violations: 0 },
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
  // new deep [] haha
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
