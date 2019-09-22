/* eslint-disable jsx-a11y/control-has-associated-label */
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

import React from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap';
import cup from "../assets/png/cup.png";

const Contact = () => { 
    return (
      <>
        <Row>
          <Col md="4" sm="6" lg="6" className="contact-right-sid">
            <img className="col-6 center" src={cup} alt="design" />
            <p className="contact-right-sid-p">
                    Vi sammarbetar med optimistiska 
              {' '}
              <br />
              {' '}
                personer och varumärken.
            </p>
          </Col>
          <Col md="8" sm="6" lg="6">
            <Container>
              <Form className="col-8 center">
                <input className="Input-text" type="email" placeholder="Skriv din email adress" />
                <textarea className="Input-textarea" name="dis" id="dis" cols="30" rows="5" placeholder="Skriv ditt meddelande" />
                <button className="contact-button" type="submit" onClick={()=>{}}>Skicka</button>
              </Form>
              
              <hr className="col-8" />
              <p className="phone-text">Telefon</p>
              <h1 className="phone-number">070 866 03 40</h1>
            </Container>
          </Col>
          
        </Row>
      </>
    )
}
export default Contact;