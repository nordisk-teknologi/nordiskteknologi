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

import NavigationBar from '../components/navigation_bar';
//import Loading  from '../components/loading';
import window from '../assets/png/window.png'


//import { onEncryptionHover }  from '../actions/navigationActions';
import { setName } from '../actions/userActions';


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
        <NavigationBar/>
        <section class="hero start is-fullheight">
        <img className='hero image' alt src={window}/>
        <h1 className="imagetext">Vi hjälper företag att utveckla konverterande,<br/> effektiva och prisvärda hemsidor.<br/>Samtidigt som ditt varumärke sticker ut och<br/>kommunicerar effektivt med dina kunder.</h1>
        </section>
        <section class="hero is-info is-fullheight">

        </section>
        <section class="hero is-success is-fullheight"></section>
        <section class="hero is-info is-fullheight"></section>
        <section class="hero is-success is-fullheight"></section>
        <section class="hero is-info is-fullheight"></section>
        <section class="hero is-success is-fullheight"></section>
        <section class="hero is-info is-fullheight"></section>
        <section class="hero is-success is-fullheight"></section>
        </header>
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
