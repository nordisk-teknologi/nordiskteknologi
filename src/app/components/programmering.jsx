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
import { Container, Col, Row } from 'react-bootstrap';
import code from "../assets/png/Code.png";

const programmering = () => { 
    return (
      <>
        <Row>
          <Col md="4" sm="6" lg="6" className="programmering-right-sid">
            <img className="col-10 center" src={code} alt="design" />
          </Col>
          <Col md="8" sm="6" lg="6">
            <Container>
              <div className="col-10 design-container">
                <p className="design-text programmering-title">
                Hur vi arbetar.
                </p>
                <p className="design-text programmering-subtitle">
                1. Vi har en workshop
                  {' '}
                  <span>
                     tillsammans där vi lär känna 
                    varandra och erat upplevda problem.
                  </span>
                </p>
                <p className="design-text programmering-subtitle">
                2. Vi startar arbetsprocessen 
                  {' '}
                  <span> och hjälper dig med exempelvis design, copywrite, SEO, kryptering.</span>
                </p>
                <p className="design-text programmering-subtitle">
                3. Vi utvärderar projektet,
                  <span> efterfrågas dataanalyser, serverdesign och hosting hjälper vi till. </span>
                </p>
                <p className="design-text programmering-subtitle">
                4. Vi färdigställer projektet 
                  {' '}
                  <span> och underhåller hemsidan när jobbet är klart. En gång i månaden presenteras statisitk som visar på hur konverteringen ökat.</span>
                </p>
              </div>
            </Container>
          </Col>
          
        </Row>
      </>
    )
}
export default programmering;