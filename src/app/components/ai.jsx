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
import Ai from "../assets/png/AI.png";

const AI = () => {
    return (
      <>
        <Container>
          <Row>
            <Col md="4" sm="6" lg="12">
              <img className="col-10 ai" src={Ai} alt="design" />
            </Col>
            <Col md="4" sm="6" lg="12">
              <div className="col-10 design-container">
                <p className="design-text ai-title">
                Vi skriver historia.
                </p>
                <p className="design-text ai-subtitle">
                Vi skapar inspirerande och ögonöppnande
                  <br />
                texter till din hemsida. Innehållet är anpassade
                  <br />
                till din affärsidé, layouten är snygg och enkel.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
}
export default AI;