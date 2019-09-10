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
import {connect} from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import NavigationBar from '../components/navigation_bar';
//import Loading  from '../components/loading';
import google from '../assets/png/google.png'
import design from '../assets/png/design.png'


//import { onEncryptionHover }  from '../actions/navigationActions';
import { setName } from '../actions/userActions';


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
        <NavigationBar/>
        </header>
        <section class="fullscreen primary_color">
        <div className="window-frame back-1">
        <span className="window-frame-item error_color"></span><span className="window-frame-item primary_variant_color"></span><span className="window-frame-item secondary_variant_color"></span>
          <div className="window-content"></div>
        </div>
        <div className="window-frame back-2">
        <span className="window-frame-item error_color"></span><span className="window-frame-item primary_variant_color"></span><span className="window-frame-item secondary_variant_color"></span>
          <div className="window-content"></div>
        </div>
        <div className="window-frame back-3">
        <span className="window-frame-item error_color"></span><span className="window-frame-item primary_variant_color"></span><span className="window-frame-item secondary_variant_color"></span>
          <div className="window-content"></div>
        </div>
        <div className="window-frame back-4">
        <span className="window-frame-item error_color"></span><span className="window-frame-item primary_variant_color"></span><span className="window-frame-item secondary_variant_color"></span>
          <div className="window-content"></div>
        </div>
        <div className="window-frame back-5">
        <span className="window-frame-item error_color"></span><span className="window-frame-item primary_variant_color"></span><span className="window-frame-item secondary_variant_color"></span>
          <div className="window-content"></div>
        </div>
        <div className="window-frame back-6">
        <span className="window-frame-item error_color"></span><span className="window-frame-item primary_variant_color"></span><span className="window-frame-item secondary_variant_color"></span>
          <div className="window-content"></div>
        </div>
        <div className="window-frame">
        <span className="window-frame-item error_color"></span><span className="window-frame-item primary_variant_color"></span><span className="window-frame-item secondary_variant_color"></span>
          <div className="window-content primary_variant_color">
            <p className="window-content-title">
            Vi hjälper företag att utveckla konverterande,<br/>
            effektiva och prisvärda hemsidor.<br/>
            Samtidigt som ditt varumärke sticker ut och<br/>
            kommunicerar effektivt med dina kunder.
            </p>
            <p className="window-content-subtitle">
            Nordisk teknologi består av passionerade<br/>
            individer vars syfte är att hjälpa ditt företag<br/>
            att uppnå digital mognad. Vi gör ditt företag<br/>
            och samhället starkare med teknologi.
            </p>
          </div>
        </div>
        
        </section>
        <section class="fullscreen design">
          <div className="design-card">
            <p className="design-card-title">
            Dålig design är som ett dåligt skämt.Krävs förklaring, krävs förbättring. 
            </p>
            <p className="design-card-subtitle">
            Vi skapar eller förbättrar logotyper, hemsidor,<br/>
            grafiska profiler och presentationer. Anpassat<br/>
            efter ditt företags vision och önskemål.
            </p>
          </div>
        </section>

        <section class="fullscreen-1-3">
            <Container className="margin-top">
              
              <Row>
                <Col className="margin-top-2">
                  <h3 className="copywrite">Copywrite</h3><br/>
                  <h1 className="box-title">Vi skriver historia.</h1><br/>
                  <p className="box-subtitle">
                  Vi skapar inspirerande och ögonöppnande texter till din hemsida. Innehållet är anpassade till din affärsidé, layouten är snygg och enkel.
                  </p>
                </Col>
                <Col>
                  <div className="poster-card">
                    <p className="poster-card-title">
                    A good<br/>
                    font<br/>
                    mkeas<br/>
                    ahnytning<br/>
                    eesiar<br/>
                    to raed.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
        <section class="fullscreen">
        <Container className="margin-top">
              <Row>
              <Card className="google-card">
                <img alt="" className="google-image" src={google}/>
                <span className="google-card-icon-frame"><FontAwesomeIcon icon={faSearch} className="google-card-icon center" size="2x" /></span>
                <Card.Body className="google-card-text">Vi hjälper ditt företag att synas på Google med SEO. Med briljant sökoptimering hittar fler kunder din hemsida. En bra position på google ökar både konvertering och försäljning.</Card.Body>
              </Card>
              </Row>
        </Container>
        </section>
        <section class="fullscreen">
        </section>
        <section class="fullscreen">
        </section>
        <section class="fullscreen">
        </section>
        <section class="fullscreen">
        </section>
        <section class="fullscreen">
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
