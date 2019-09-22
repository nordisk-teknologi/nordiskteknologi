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
import book from "../assets/png/book.png";

const Copyright = () => {
    return (
      <>
        <Row>
          <Col md="8" sm="6" lg="6">
            <Container>
              <div className="col-10 design-container">
                <p className="design-text copywrite-title">
                Vi stärker ditt 
                  {' '}
                  <br />
                  {' '}
                  varumärke med text.
                </p>
                <p className="design-text copywrite-subtitle">
                Vi skapar inspirerande och ögonöppnande
                  <br />
                texter till din hemsida. Innehållet är anpassade
                  <br />
                till din affärsidé, layouten är snygg och enkel.
                </p>
              </div>
            </Container>
          </Col>
          <Col md="4" sm="6" lg="6" className="copywrite-right-sid">
            <img className="col-6 center" src={book} alt="design" />
          </Col>
        </Row>
      </>
    )
}

export default Copyright;