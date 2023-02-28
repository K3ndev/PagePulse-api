"use strict";

// import
import fetchData from "./fetch.js";
import ResultScan from "./result_component.js";

// variables
const scanInsight = document.querySelector("#scanInsight");
const elScan = document.querySelector("#resultScan");
const inputURL = document.querySelector("#inputURL");
const scanInput = document.querySelector("#scanInput");

// loading svg
const loadingSvg = `
<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="width: 1.22rem"
  viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="1s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
</svg>
`;

const checkUrl = (url) => {
  const regexHttp = /^http/;
  const regexDot = /\./;
  if (!regexHttp.test(url) && regexDot.test(url)) {
    return true;
  }
  return false;
};

scanInsight?.addEventListener("click", () => {
  // guard
  if (inputURL.value === "") {
    inputURL.classList.add("ut-input-warning");
    return;
  }

  // for some reason -> inputURL.value === "" && !checkUrl(inputURL.value), doesn't work
  if (!checkUrl(inputURL.value)) {
    inputURL.classList.add("ut-input-warning");
    return;
  }

  scanInsight.innerHTML = `Run Test ${loadingSvg}`;
  scanInsight.disabled = true;

  // 3s then show
  setTimeout(() => {
    scanInsight.innerHTML = `Run Test`;
    scanInsight.disabled = false;
    inputURL.classList.remove("ut-input-warning");
    elScan.innerHTML = "";
    const resultScan = document.createElement("div");
    elScan.appendChild(resultScan);
    scanInput.remove();

    // fetch data
    const { data } = fetchData("cacheOn", inputURL.value);

    // create element
    resultScan.innerHTML = ResultScan({
      url: inputURL.value,
      lighthouse: data[0].lighthouse,
      lcp: data[0].largestContentfulPaint,
      tbt: data[0].totalBlockingTime,
      cls: data[0].cumulativeLayoutShift,
      fcp: data[0].firstContentfulPaint,
      si: data[0].speedIndex,
      tti: data[0].timeToInteractive,
      assetsTotal: data[0].weight.total,
      assetsImage: data[0].weight.image,
      assetsJs: data[0].weight.script,
      assetsHtml: data[0].weight.document,
      assetsFont: data[0].weight.font,
      assetsCss: data[0].weight.stylesheet,
      assetsThirdParty: data[0].weight.thirdParty,
      timestamp: data[0].timestamp,
    });
  }, 3000);
});
