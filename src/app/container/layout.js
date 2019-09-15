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
import Window from '../components/window';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      windows: [
        { id: 1, content: '1', close: '', open: 'close', info: 'info', title: 'hello', description: '' },
        { id: 2, content: '2', close: '', open: 'close', info: 'info', title: 'how are you', description: '' },
        { id: 3, content: '1', close: '', open: 'close', info: 'info', title: 'im good', description: '' },
        { id: 4, content: '2', close: '', open: 'close', info: 'info', title: '', description: '' },
        { id: 5, content: '1', close: '', open: 'close', info: 'info', title: '', description: '' },
        { id: 6, content: '2', close: '', open: 'close', info: 'info', title: '', description: '' },
      ]
    }
  }

  closeWindow = (id) => {
    const { windows }  = this.state
    const windowsUpdateState = windows.filter(window => {
      return window.id !== id
    });
    this.setState({
      windows: windowsUpdateState
    });
  }

  render() {
    const { windows } = this.state;
    return (
      <div>
        <Window windows={windows} closeWindow={this.closeWindow} />
      </div>
    )
  }
} 

export default Layout;