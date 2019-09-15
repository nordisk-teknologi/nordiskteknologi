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
import { Navbar, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      style: 'fullscreen-menu',
    }
  }

  closeMenu = () => {
    const { show } = this.state;
    if (show === false) {
        this.setState({
          show: true,
          style: 'fullscreen-menu-active'
        })
    } else {
        this.setState({
          show: false,
          style: 'fullscreen-menu'
        })
    }
}

  render() {
    const { style } = this.state
    return (
      <>
        <Navbar className="navbar justify-content-between">
          <Form inline>
            <a className="active space-left" href="#about-us">Om oss</a>
            <a href="#design">Design</a>
            <a href="#Copywrite">Copywrite</a>
            <a href="#SEO">SEO</a>
            <a href="#Programmering">Programmering</a>
            <a href="#Kryptering">Kryptering</a>
            <a href="#Vision">Vision</a>
            <a href="#Kontakt">Kontakt</a>
          </Form>
          <Form inline>
              
            <spen className="menu" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faBars} className="center" /></spen>
          </Form>
          
        </Navbar>
        <>
          <section className={style}>
            <spen className="menu-left" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faChevronLeft} className="center" /></spen>
            <spen className="menu-Linkedin" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faLinkedin} className="center" /></spen>
            <spen className="menu-Facebook" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faFacebook} className="center" /></spen>
            <spen className="menu-Instagram" onClick={this.closeMenu}><FontAwesomeIcon size="2x" icon={faInstagram} className="center" /></spen>
          </section>  
        </>
      </>
    )
  }
}

export default NavigationBar;