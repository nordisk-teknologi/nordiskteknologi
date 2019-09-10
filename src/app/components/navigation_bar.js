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
/*
import React from 'react';
import { Navbar, Form, InputGroup, FormControl,Button } from 'react-bootstrap';

class NavigationBar extends React.Component {
    render(){
        return(
            <nav class="navbar sticky" role="navigation" aria-label="main navigation">
                <a className="active" href="#">Om oss</a>
                <a href="#">Design</a>
                <a href="#">Copywrite</a>
                <a href="#">SEO</a>
                <a href="#">Programmering</a>
                <a href="#">Kryptering</a>
                <a href="#">Vision</a>
                <a href="#">Kontakt</a>
            </nav>
            <Navbar className="bg-light justify-content-between">
            <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <Form inline>
              <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              <Button type="submit">Submit</Button>
            </Form>
          </Navbar>
        )
    }
}

export default NavigationBar;*/

import React from 'react';
import { Navbar, Form, InputGroup, FormControl,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends React.Component {
    render(){
        return(
            <Navbar className="navbar justify-content-between">
            <Form inline>
                <a className="active" href="#">Om oss</a>
                <a href="#">Design</a>
                <a href="#">Copywrite</a>
                <a href="#">SEO</a>
                <a href="#">Programmering</a>
                <a href="#">Kryptering</a>
                <a href="#">Vision</a>
                <a href="#">Kontakt</a>
            </Form>
            <Form inline>
              
              <spen className="menu"><FontAwesomeIcon icon={faBars} className="center"/></spen>
            </Form>
          </Navbar>
        )
    }
}

export default NavigationBar;