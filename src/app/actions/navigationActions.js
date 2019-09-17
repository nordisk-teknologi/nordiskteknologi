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

module.exports = {
    menu: (open) => {
        try {
            if (open === true) {
                return {
                    type: 'menu',
                    style: 'fullscreen-menu-active',
                    show: true,
                }
            } 
                return {
                    type: 'menu',
                    style: 'fullscreen-menu',
                    show: false,
                }
            
            
        } catch (error) {
            if (error) throw new Error(error);
        }
        return open;
    },
    encryption: (object) => {
        return {
            type: 'encryption',
            payload: {
                encryption: {
                    lang: {
                      sv: {
                        status: object.status,
                        after: object.after,
                        before: object.before,
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
            }
        }
    },
    seo: (object) => {
        return {
            type: 'seo',
            payload: object
        }
    },
    copywrite: (object) => {
        return {
            type: 'copywrite',
            payload: object
        }
    },
    design: (object) => {
        return {
            type: 'design',
            payload: object
        }
    },
    programming: (object) => {
        return {
            type: 'programming',
            payload: object
        }
    },
    vision: (object) => {
        return {
            type: 'vision',
            payload: object
        }
    },
    nordiskTeknologi: (object) => {
        return {
            type: 'nordiskTeknologi',
            payload: object
        }
    },

    encryptionType: (object) => {
        return {
            type: 'encryption',
            payload: object
        }
    },
    seoType: (object) => {
        return {
            type: 'seo',
            payload: object
        }
    },
    copywriteType: (object) => {
        return {
            type: 'copywrite',
            payload: object
        }
    },
    designType: (object) => {
        return {
            type: 'design',
            payload: object
        }
    },
    programmingType: (object) => {
        return {
            type: 'programming',
            payload: object
        }
    },
    visionType: (object) => {
        return {
            type: 'vision',
            payload: object
        }
    },
    nordiskTeknologiType: (object) => {
        return {
            type: 'nordiskTeknologi',
            payload: object
        }
    }
};
