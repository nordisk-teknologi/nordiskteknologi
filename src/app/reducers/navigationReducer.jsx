/*
 *   Copyright (c) 2019 Martin Ak && Nordiskteknologi AB
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

const navigationReducer = (state = {
  menu: {
    style: 'fullscreen-menu',
    show: false
  },
  encryption: {
    lang: {
      sv: {
        status: true,
        after: false,
        before: true,
        afterText: "VI GÖR DIN HEMSIDA SÄKER",
        beforeText: "KRYPTERING"
      },
      en: {
        status: false,
        after: false,
        before: true,
        afterText: "WE SECURE YOUR WEBSITE",
        beforeText: "ENCRYPTION"
      },
    },
  },
  seo: {
    lang: {
      sv: {
        status: true,
        after: false,
        before: true,
        afterText: "VI MARKNADSFÖR DIN HEMSIDA",
        beforeText: "SÖKOPTIMERING"
      },
      en: {
        status: false,
        after: false,
        before: true,
        afterText: "SEARCH ENGINE OPTIMAZATION",
        beforeText: "SEO"
      },
    },
  },
  copywrite: {
    lang: {
      sv: {
        status: true,
        after: false,
        before: true,
        afterText: "VI SKAPAR TEXTER TILL DIN HEMSIDA",
        beforeText: "COPYWRITE"
      },
      en: {
        status: false,
        after: false,
        before: true,
        afterText: "WE WRITE TEXT FOR YOUR WEBSITE",
        beforeText: "COPYWRITE"
      },
    },
  },
  design: {
    lang: {
      sv: {
        status: true,
        after: false,
        before: true,
        afterText: "VI DESIGNAR DIN HEMSIDA",
        beforeText: "DESIGN"
      },
      en: {
        status: false,
        after: false,
        before: true,
        afterText: "WE DESIGN YOUR WEBSITE",
        beforeText: "DESIGN"
      },
    },
  },
  programming: {
    lang: {
      sv: {
        status: true,
        after: false,
        before: true,
        afterText: "VI KODAR DIN HEMSIDA",
        beforeText: "PROGRAMMERING"
      },
      en: {
        status: false,
        after: false,
        before: true,
        afterText: "WE CODE YOUR WEBSITE",
        beforeText: "PROGRAMMING"
      },
    },
  },
  vision: {
    lang: {
      sv: {
        status: true,
        after: false,
        before: true,
        afterText: "VÅR VISION",
        beforeText: "VISION"
      },
      en: {
        status: false,
        after: false,
        before: true,
        afterText: "OUR VISION",
        beforeText: "VISION"
      },
    },
  },
  nordiskTeknologi: {
    lang: {
      sv: {
        status: true,
        after: false,
        before: true,
        afterText: "OM OSS",
        beforeText: "NORDISK TEKNOLOGI"
      },
      en: {
        status: false,
        after: false,
        before: true,
        afterText: "ABOUT US",
        beforeText: "NORDISK TEKNOLOGI"
      },
    },
  },
}, action) => {
  switch (action.type) {
    case 'menu':
      state = {
        ...state,
        menu: action.payload
      };
      break;
    case 'encryption':
      state = {
        ...state,
        encryption: action.payload
      };
      break;
    case 'seo':
      state = {
        ...state,
        seo: action.payload
      };
      break;
    case 'copywrite':
      state = {
        ...state,
        copywrite: action.payload
      };
      break;
    case 'design':
      state = {
        ...state,
        design: action.payload
      };
      break;
    case 'programming':
      state = {
        ...state,
        programming: action.payload
      };
      break;
    case 'vision':
      state = {
        ...state,
        vision: action.payload
      };
      break;
    case 'nordiskTeknologi':
      state = {
        ...state,
        nordiskTeknologi: action.payload
      };
      break;
    default:
      return state;
  };
  return state;
};

export default navigationReducer;