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

import React from 'react';
import Particles from 'react-particles-js';
import logo from "../assets/svg/small.svg";

const AboutUs = () => {
    return (
      <Particles
        params={{
            "fps_limit": 60,
                "particles": {
                    "color": {
                    "value":"#212121"
                },
                "number": {
                    "value": 200,
                    "density": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 30,
                    "opacity": 0.4,
                    "color":"#212121"
                },
                "move": {
                    "speed": 2
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "opacity_min": 0.05,
                        "speed": 2,
                        "sync": false
                    },
                    "value": 0.4
                }
            },
            "polygon": {
                "enable": true,
                "scale": 0.7,
                "type": "inline",
                "move": {
                    "radius": 10
                },
                "url": logo,
                "inline": {
                    "arrangement": "equidistant"
                },
                "draw": {
                    "enable": true,
                    "stroke": {
                        "color": "rgba(33, 33, 33, .5)"
                    }
                }
            },
            "retina_detect": false,
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    }
                },
                "modes": {
                    "bubble": {
                        "size": 6,
                        "distance": 40
                    }
                }
            }
            }}
        style={{
            width: '100%',
            minHeight: '110vh',
            backgroundColor: `#fbfbfb` 
            }}
      />
    )
}
export default AboutUs;