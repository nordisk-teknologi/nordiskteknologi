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
/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import Layout from './layout';
import NavigationBar from '../components/navigation';
import Design from '../components/design';
import Copywrite from '../components/copywrite';
import AI from '../components/ai';
import Programmering from '../components/programmering';
import Encryption from '../components/encryption';
import Contact from '../components/contact';
import { setName } from '../actions/userActions';

const App = () => {
  return (
  
    <div className="App overflow-hidden">
      <NavigationBar />
      <section id="about-us" className="fullscreen">
        <Layout />
      </section>
      <section id="design" className="fullscreen">
        <Design />
      </section>
      <section id="Copywrite" className="fullscreen">
        <Copywrite />
      </section>
      <section id="AI" className="fullscreen">
        <AI />
      </section>
      <section id="Programmering" className="fullscreen">
        <Programmering />
      </section>
      <section id="Encryption" className="fullscreen">
        <Encryption />
      </section>
      <section id="Encryption" className="fullscreen">
        <Contact />
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
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
