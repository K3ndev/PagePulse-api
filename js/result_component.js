"use strict";

const ResultScan = ({
  url,
  lighthouse,
  lcp,
  tbt,
  cls,
  fcp,
  si,
  tti,
  assetsTotal,
  assetsImage,
  assetsJs,
  assetsHtml,
  assetsFont,
  assetsCss,
  assetsThirdParty,
  timestamp,
}) => {
  const { accessibility, bestPractices, performance, seo, total, version } =
    lighthouse;

  return `<section class="ut-container px-3 typo-slate-600">
          <div
            style="
              border: solid #f3f4f6 1px;
              padding: 1rem;
              width: 100%;
              background: white;
            "
            class="ut-drop-shadow mb-2"
          >
            <div
              class="pb-3 d-flex justify-content-between align-items-baseline"
              style="border-bottom: solid #f3f4f6 1px"
            >
              <div class="d-flex flex-column">
                <h1>URL</h1>
                <p>
                  <span class="d-none d-md-inline">https://</span
                  >${url}/
                </p>
              </div>
              <div class="d-flex flex-column">
                <h2>timestamp</h2>
                <p>${timestamp}</p>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <p>state: succeeded</p>
              <p>
                lighthouse <span class="d-none d-md-inline">version</span>:
                ${version}
              </p>
            </div>
          </div>
          <!-- metrics -->
          <div class="d-flex flex-column flex-md-row gap-2 mb-5">
            <div
              style="
                border: solid #f3f4f6 1px;
                padding: 1rem;
                width: 100%;
                background: white;
              "
              class="ut-drop-shadow custom-vitalWidth"
            >
              <div
                class="pb-3 d-flex justify-content-between align-items-center"
                style="border-bottom: solid #f3f4f6 1px; height: 3.5rem"
              >
                <h1>Web Vitals</h1>
                <div class="d-flex align-items-baseline">
                  <p style="color: #4ade80" class="typo-text-3xl">${total}</p>
                  <span>/</span>
                  <p>400</p>
                </div>
              </div>
              <div class="mt-3 d-flex flex-row justify-content-between">
                <div>
                  <p>LCP: ${lcp}</p>
                  <!-- <p>MPFID: 28ms</p> -->
                  <p>TBT: ${tbt}</p>
                  <p>CLS: ${cls}</p>
                </div>
                <div>
                  <p>FCP: ${fcp}</p>
                  <p>SI: ${si}</p>
                  <p>TTI: ${tti}</p>
                </div>
              </div>
            </div>
            <div
              style="
                border: solid #f3f4f6 1px;
                padding: 1rem;
                width: 100%;
                background: white;
              "
              class="ut-drop-shadow"
            >
              <div
                class="pb-3 d-flex justify-content-between align-items-center"
                style="border-bottom: solid #f3f4f6 1px; height: 3.5rem"
              >
                <h1>Transferred Assets</h1>
                <div class="d-flex align-items-center">
                  <p>total: ${assetsTotal}</p>
                </div>
              </div>
              <div class="mt-3 d-flex flex-row justify-content-between">
                <div>
                  <p>Image: ${assetsImage}</p>
                  <!-- <p>MPFID: 28ms</p> -->
                  <p>Script: ${assetsJs}</p>
                  <p>Document: ${assetsHtml}</p>
                </div>
                <div>
                  <p>Font: ${assetsFont}</p>
                  <p>Stylesheet: ${assetsCss}</p>
                  <p>ThirdParty: ${assetsThirdParty}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ads -->
          <div
            class="mb-5 p-3 p-md-4 d-flex justify-content-between align-items-center flex-column flex-md-row ut-shadow-inner"
            style="background-color: #ededed"
          >
            <div>
              <h2 class="">Monitor Your Website</h2>
              <p class="mb-3 mb-md-0">
                Automate performance monitoring, gain insights over time, save
                previous scans for easy progress comparison and tracking.
              </p>
            </div>
            <div>
              <button class="btn btn-light ut-shadow-md">
                Create an Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  style="width: 1.25rem"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-4 4l4-4m-4-4l4 4"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="">
            <h2 class="text-black typo-text-lg">Lighthouse Audits</h2>
            <div class="accordion accordion-flush ut-shadow-md" id="accordionFlushExample" style='border: solid #f3f4f6 1px;'>
              <!-- 1 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Performance: <span style="color: #4ade80"> ${performance}</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    The page should be prevented back/forward cache restoration
                  </div>
                  <div class="accordion-body">First Contentful Paint</div>
                  <div class="accordion-body">Largest Contentful Paint</div>
                  <div class="accordion-body">Total Blocking Time</div>
                  <div class="accordion-body">Cumulative Layout Shift</div>
                  <div class="accordion-body">Speed Index</div>
                  <div class="accordion-body">Time to Interactive</div>
                  <div class="accordion-body">
                    Max Potential First Input Delay
                  </div>
                  <div class="accordion-body">First Meaningful Paint</div>
                  <div class="accordion-body">
                    Eliminate the render-blocking resources
                  </div>
                  <div class="accordion-body">Properly size images</div>
                  <div class="accordion-body">Defer offscreen images</div>
                  <div class="accordion-body">Minify CSS</div>
                  <div class="accordion-body">Minify JavaScript</div>
                  <div class="accordion-body">Reduce unused CSS</div>
                  <div class="accordion-body">Reduce unused JavaScript</div>
                  <div class="accordion-body">Efficiently encode images</div>
                  <div class="accordion-body">
                    Serve images in next-gen formats
                  </div>
                  <div class="accordion-body">Enable text compression</div>
                  <div class="accordion-body">
                    Preconnect to required origins
                  </div>
                  <div class="accordion-body">
                    Initial server response time was short
                  </div>
                  <div class="accordion-body">
                    Avoid multiple page redirects
                  </div>
                  <div class="accordion-body">Use HTTP/2</div>
                  <div class="accordion-body">
                    Use video formats for animated content
                  </div>
                  <div class="accordion-body">
                    Remove duplicate modules in JavaScript bundles
                  </div>
                  <div class="accordion-body">
                    Avoid serving legacy JavaScript to modern browsers
                  </div>
                  <div class="accordion-body">
                    Avoids enormous network payloads
                  </div>
                  <div class="accordion-body">
                    Uses efficient cache policy on static assets
                  </div>
                  <div class="accordion-body">Avoids an excessive DOM size</div>
                  <div class="accordion-body">JavaScript execution time</div>
                  <div class="accordion-body">Minimizes main-thread work</div>
                  <div class="accordion-body">
                    All text remains visible during webfont loads
                  </div>
                  <div class="accordion-body">
                    Uses passive listeners to improve scrolling performance
                  </div>
                  <div class="accordion-body">Avoids document.write()</div>
                  <div class="accordion-body">
                    Image elements should have explicit width and height
                  </div>
                  <div class="accordion-body">
                    Has a <meta name="viewport" /> tag with width or
                    initial-scale
                  </div>
                </div>
              </div>

              <!-- 2 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Accessibility:
                    <span style="color: #4ade80"> ${accessibility}</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    [aria-*] attributes match their roles
                  </div>
                  <div class="accordion-body">
                    [aria-hidden="true"] should  not present on the document body tag
                  </div>
                  <div class="accordion-body">
                    [aria-*] attributes should have valid values
                  </div>
                  <div class="accordion-body">
                    [aria-*] attributes should be valid and not misspelled
                  </div>
                  <div class="accordion-body">
                    Background and foreground colors should have a sufficient contrast
                    ratio
                  </div>
                  <div class="accordion-body">
                    Document should have a title tag element
                  </div>
                  <div class="accordion-body">
                    Heading elements should appear in a sequentially-descending order
                  </div>
                  <div class="accordion-body">
                    html tag element should have a [lang] attribute
                  </div>
                  <div class="accordion-body">
                    html tag element should have a valid value for its [lang] attribute
                  </div>
                  <div class="accordion-body">
                    Image elements should have [alt] attributes
                  </div>
                  <div class="accordion-body">
                    Links should have a discernible name
                  </div>
                  <div class="accordion-body">
                    Lists contain should only have li tag elements and script supporting
                    elements (script and template tag).
                  </div>
                  <div class="accordion-body">
                    List items (li tag) should contained within ul, ol or menu tag
                    parent elements
                  </div>
                  <div class="accordion-body">
                    [user-scalable="no"] should  not used in the meta name="viewport"
                    element and the [maximum-scale] attribute is not less than
                    5.
                  </div>
                </div>
              </div>

              <!-- 3 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Best Practices: <span style="color: #4ade80"> ${bestPractices}</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">Uses HTTPS</div>
                  <div class="accordion-body">
                    Should avoid requesting the geolocation permission on page load
                  </div>
                  <div class="accordion-body">
                    Should avoid requesting the notification permission on page load
                  </div>
                  <div class="accordion-body">
                    Should allow users to paste into input fields
                  </div>
                  <div class="accordion-body">
                    Should displays images with correct aspect ratio
                  </div>
                  <div class="accordion-body">
                    should serves images with appropriate resolution
                  </div>
                  <div class="accordion-body">Page should have the HTML doctype</div>
                  <div class="accordion-body">Properly defines charset</div>
                  <div class="accordion-body">
                    Avoids unload event listeners
                  </div>
                  <div class="accordion-body">Avoids deprecated APIs</div>
                  <div class="accordion-body">
                    No browser errors logged to the console
                  </div>
                  <div class="accordion-body">Page has valid source maps</div>
                  <div class="accordion-body">
                    No issues in the Issues panel in Chrome Devtools
                  </div>
                </div>
              </div>

              <!-- 4 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    SEO: <span style="color: #4ade80"> ${seo}</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">Links are not crawlable</div>
                  <div class="accordion-body">
                    <p>
                      Should have a <code>&lt;meta name="viewport"&gt;</code> tag with
                      width or initial-scale
                    </p>
                  </div>
                  <div class="accordion-body">
                    <p>Document should have a <code>&lt;title&gt;</code> element</p>
                  </div>
                  <div class="accordion-body">
                    Document should have a meta description
                  </div>
                  <div class="accordion-body">
                    Page should have successful HTTP status code
                  </div>
                  <div class="accordion-body">Links have descriptive text</div>
                  <div class="accordion-body">
                    Page isn&rsquo;t blocked from indexing
                  </div>
                  <div class="accordion-body">
                    Image elements should have [alt] attributes
                  </div>
                  <div class="accordion-body">
                    Document should have a valid hreflang
                  </div>
                  <div class="accordion-body">
                    Document should uses legible font sizes
                  </div>
                  <div class="accordion-body">Document avoids plugins</div>
                  <div class="accordion-body">
                    Tap targets should have sized appropriately
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
};

export default ResultScan;
