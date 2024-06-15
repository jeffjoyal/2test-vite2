(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",n="/test-vite/vite.svg";function d(r){let i=0;const o=a=>{i=a,r.innerHTML=`count is ${i}`};r.addEventListener("click",()=>o(i+1)),o(0)}const p="/test-vite/assets/BarChart6-DZbBuahf.png";document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${n}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${s}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;d(document.querySelector("#counter"));var c=document.createElement("div");c.innerHTML=`
  <h1> Below we'll be displaying some visanatomy charts</h1>
  <div class="container">
    <div id="checkboxes">
      <div id="browserFrom">
        <form action="#" id="facetedbrowsingform">
          <div class="criteriagroup">
            <ul class="collapsible">
              <!-- Visualization elements -->
              <h3>Visualization Elements</h3>
                <div class="collapsible-body">
                  <div class="row">
                    <div class="col s6">
                      <p>
                        <label>
                          <input type="checkbox" name="line" value="line" />
                          <span>Line Graph</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input type="checkbox" name="bar" value="bar" />
                          <span>Bar Chart</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input type="checkbox" name="dot" value="dot" />
                          <span>Dot Plot</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input
                            type="checkbox"
                            name="marimekko"
                            value="marimekko"
                          />
                          <span>Marimekko Chart</span>
                        </label>
                      </p>

                      <p>
                        <label>
                          <input
                            type="checkbox"
                            name="grouped"
                            value="grouped"
                          />
                          <span>Grouped Bar Chart</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
            </ul>
          </div>
        </form>
      </div>  
    </div>
    <div id="chart-image">
      <img src="${p}"/>
    </div>
  </div>
`;document.querySelector("#app").appendChild(c);
