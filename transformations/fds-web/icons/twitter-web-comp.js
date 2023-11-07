
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      width: 42px;
      height: 42px;
    }
      :host, #root {
        display: inline-block;
      }
        #root, svg {
          width: 100%;
          height: 100%;
        }
          svg, svg * {
            fill: var( --color, #222 ) !important;
          }
      .error {
        font-family: sans-serif;
        font-size: 12px;
        color: #f00;
      }
  </style>
  <div id="root"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.4492 19.0013C51.4835 19.481 51.4835 19.9608 51.4835 20.4404C51.4835 35.0711 40.3477 51.929 19.9949 51.929C13.7246 51.929 7.89976 50.1129 3 46.9608C3.89089 47.0635 4.74741 47.0978 5.67258 47.0978C10.8463 47.0978 15.6091 45.3504 19.4124 42.3694C14.5469 42.2666 10.4695 39.08 9.06466 34.6942C9.75 34.7969 10.4352 34.8655 11.1548 34.8655C12.1485 34.8655 13.1422 34.7284 14.0673 34.4887C8.99621 33.4607 5.1928 29.0064 5.1928 23.627V23.49C6.66609 24.3123 8.37943 24.8262 10.1953 24.8947C7.21432 22.9074 5.26136 19.5153 5.26136 15.6777C5.26136 13.6219 5.80948 11.7374 6.76893 10.0927C12.2169 16.8084 20.406 21.1941 29.5887 21.6739C29.4174 20.8516 29.3146 19.995 29.3146 19.1384C29.3146 13.0394 34.2486 8.07117 40.3818 8.07117C43.5683 8.07117 46.4465 9.40746 48.4681 11.5661C50.9693 11.0864 53.3678 10.1612 55.4922 8.89351C54.6698 11.4634 52.9224 13.622 50.6267 14.9924C52.8539 14.7527 55.0125 14.1358 56.9998 13.2793C55.4924 15.4721 53.6078 17.4251 51.4492 19.0013Z" fill="#353739"/>
</svg>
</div>
`;

class TSTtwitter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('tst-icon-twitter', TSTtwitter);