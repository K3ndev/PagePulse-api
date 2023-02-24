"use strict";

const ResultScan = () => {
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
                  >sample.com/
                </p>
              </div>
              <div class="d-flex flex-column">
                <h2>Request Time</h2>
                <p>1 min ago</p>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <p>state: succeeded</p>
              <p>
                lighthouse <span class="d-none d-md-inline">version</span>:
                10.0.1
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
                  <p style="color: #4ade80" class="typo-text-3xl">350</p>
                  <span>/</span>
                  <p>400</p>
                </div>
              </div>
              <div class="mt-3 d-flex flex-row justify-content-between">
                <div>
                  <p>LCP: 1.20s</p>
                  <!-- <p>MPFID: 28ms</p> -->
                  <p>TBT: 0ms</p>
                  <p>CLS: 0.02</p>
                </div>
                <div>
                  <p>FCP: 1.01s</p>
                  <p>SI: 1.01s</p>
                  <p>TTI: 1.01s</p>
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
                  <p>total: 1,006 KiB</p>
                </div>
              </div>
              <div class="mt-3 d-flex flex-row justify-content-between">
                <div>
                  <p>Image: 26.3kb</p>
                  <!-- <p>MPFID: 28ms</p> -->
                  <p>Script: 8.95kb</p>
                  <p>Document: 5.17kb</p>
                </div>
                <div>
                  <p>Font: 1.02kb</p>
                  <p>Stylesheet: 2.79kb</p>
                  <p>ThirdParty: 3.63kb</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ads -->
          <div
            class="mb-5 p-3 p-md-4 d-flex justify-content-between align-items-center flex-column flex-md-row"
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
            <div class="accordion accordion-flush" id="accordionFlushExample">
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
                    Performance: <span style="color: #4ade80"> 100</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Page prevented back/forward cache restoration
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
                    Eliminate render-blocking resources
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
                    Image elements have explicit width and height
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
                    <span style="color: #4ade80"> 90</span>
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
                    [aria-hidden="true"] is not present on the document body tag
                  </div>
                  <div class="accordion-body">
                    [aria-*] attributes have valid values
                  </div>
                  <div class="accordion-body">
                    [aria-*] attributes are valid and not misspelled
                  </div>
                  <div class="accordion-body">
                    Background and foreground colors have a sufficient contrast
                    ratio
                  </div>
                  <div class="accordion-body">
                    Document has a title tag element
                  </div>
                  <div class="accordion-body">
                    Heading elements appear in a sequentially-descending order
                  </div>
                  <div class="accordion-body">
                    html tag element has a [lang] attribute
                  </div>
                  <div class="accordion-body">
                    html tag element has a valid value for its [lang] attribute
                  </div>
                  <div class="accordion-body">
                    Image elements have [alt] attributes
                  </div>
                  <div class="accordion-body">
                    Links have a discernible name
                  </div>
                  <div class="accordion-body">
                    Lists contain only li tag elements and script supporting
                    elements (script and template tag).
                  </div>
                  <div class="accordion-body">
                    List items (li tag) are contained within ul, ol or menu tag
                    parent elements
                  </div>
                  <div class="accordion-body">
                    [user-scalable="no"] is not used in the meta name="viewport"
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
                    Best Practices: <span style="color: #4ade80"> 80</span>
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
                    Avoids requesting the geolocation permission on page load
                  </div>
                  <div class="accordion-body">
                    Avoids requesting the notification permission on page load
                  </div>
                  <div class="accordion-body">
                    Allows users to paste into input fields
                  </div>
                  <div class="accordion-body">
                    Displays images with correct aspect ratio
                  </div>
                  <div class="accordion-body">
                    Serves images with appropriate resolution
                  </div>
                  <div class="accordion-body">Page has the HTML doctype</div>
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
                    SEO: <span style="color: #4ade80"> 80</span>
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
                      Has a <code>&lt;meta name="viewport"&gt;</code> tag with
                      width or initial-scale
                    </p>
                  </div>
                  <div class="accordion-body">
                    <p>Document has a <code>&lt;title&gt;</code> element</p>
                  </div>
                  <div class="accordion-body">
                    Document has a meta description
                  </div>
                  <div class="accordion-body">
                    Page has successful HTTP status code
                  </div>
                  <div class="accordion-body">Links have descriptive text</div>
                  <div class="accordion-body">
                    Page isn&rsquo;t blocked from indexing
                  </div>
                  <div class="accordion-body">
                    Image elements have [alt] attributes
                  </div>
                  <div class="accordion-body">
                    Document has a valid hreflang
                  </div>
                  <div class="accordion-body">
                    Document uses legible font sizes
                  </div>
                  <div class="accordion-body">Document avoids plugins</div>
                  <div class="accordion-body">
                    Tap targets are sized appropriately
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
};

export default ResultScan;
