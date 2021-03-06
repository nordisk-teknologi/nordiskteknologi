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
import { Container, Col, Row } from 'react-bootstrap';
import design from  "../assets/png/design.png"

const Design = () => {
    return (
      <>
        <Row>
          <Col md="4" sm="6" lg="6" className="design-left-sid  text-center overflow-hidden">
            <img className="design-image" src={design} alt="design" />
          </Col>
          <Col md="8" sm="6" lg="6" className="design-right-sid overflow-hidden">
            <Container>
              <div className="col-10 design-container">
                <p className="design-text design-title">
                Dålig design är som ett dåligt skämt.
                  <br />
                Krävs förklaring, krävs förbättring. 
                </p>
                <p className="design-text design-subtitle">
                Vi skapar eller förbättrar logotyper, hemsidor,
                  <br />
                grafiska profiler och presentationer. Anpassat
                efter ditt företags vision och önskemål. 
                </p>
              </div>
            </Container>
          </Col>
            
        </Row>
      </>
    )
};

export default Design;