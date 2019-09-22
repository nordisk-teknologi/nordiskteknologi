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
import { Navbar, Form, Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";
import navigationStates from '../states/navigation.state';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = navigationStates;
  }

  closeMenu = () => {
    const { menu } = this.state;
    if (menu.show === false) {
      this.setState({
        menu: {
          show: true,
          style: 'fullscreen-menu-active'
        }
      })
    } else {
      this.setState({
        menu: {
          show: false,
          style: 'fullscreen-menu'
        }
      })
    }
  }

  render() {
    const { menu } = this.state
    const { encryption, seo, copywrite, design, programming, vision, nordiskTeknologi} = this.state
    return (
      <>
        <Navbar className="navbar justify-content-center">
          <Form inline>
            <div>
              <Link
                activeClass="active"
                to="about-us"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              Om oss
              </Link>
              <Link
                activeClass="active"
                to="design"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              Design
              </Link>
              <Link
                activeClass="active"
                to="Copywrite"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              Copywrite
              </Link>
              <Link
                activeClass="active"
                to="SEO"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              SEO
              </Link>
              <Link
                activeClass="active"
                to="AI"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              AI
              </Link>
              <Link
                activeClass="active"
                to="Programmering"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              Programmering
              </Link>
              <Link
                activeClass="active"
                to="Encryption"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              Kryptering
              </Link>
              <Link
                activeClass="active"
                to="Vision"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              Vision
              </Link>
              <Link
                activeClass="active"
                to="Kontakt"
                spy
                smooth
                offset={-70}
                duration={500}
              >
              Kontakt
              </Link>
            </div>
          </Form>
        </Navbar>
        <>
          <section className={menu.style}>
            <spen className="menu-left" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faChevronLeft} className="center" /></spen>
            <spen className="menu-Linkedin" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faLinkedinIn} className="center" /></spen>
            <spen className="menu-Facebook" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faFacebookF} className="center" /></spen>
            <spen className="menu-Instagram" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faInstagram} className="center" /></spen>
            <Container>
              <Col className="justify-content-center">
                <Row>
                  <div>
                    <div className="menu-list">
                      <span id="menu">
                        <a href="/">
                          <p>{encryption.lang.sv.afterText}</p>
                          <span className="button">{encryption.lang.sv.beforeText}</span>
                        </a>
                      </span>
                      <span id="menu">
                        <a href="/">
                          <p>{seo.lang.sv.afterText}</p>
                          
                          <span className="button">{seo.lang.sv.beforeText}</span>
                        </a>
                      </span>
                      <span id="menu">
                        <a href="/">
                          <p>{copywrite.lang.sv.afterText}</p>
                          
                          <span className="button">{copywrite.lang.sv.beforeText}</span>
                        </a>
                      </span>
                      <span id="menu">
                        <a href="/">
                          <p>{design.lang.sv.afterText}</p>
                          
                          <span className="button">{design.lang.sv.beforeText}</span>
                        </a>
                      </span>
                      <span id="menu">
                        <a href="/">
                          <p>{programming.lang.sv.afterText}</p>
                          
                          <span className="button">{programming.lang.sv.beforeText}</span>
                        </a>
                      </span>
                      <span id="menu">
                        <a href="/">
                          <p>{vision.lang.sv.afterText}</p>
                          
                          <span className="button">{vision.lang.sv.beforeText}</span>
                        </a>
                      </span>
                      <span id="menu">
                        <a href="/">
                          <p>{nordiskTeknologi.lang.sv.afterText}</p>
                          
                          <span className="button">{nordiskTeknologi.lang.sv.beforeText}</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Container>
          </section>  
        </>
      </>
    )
  }
}

export default NavigationBar;