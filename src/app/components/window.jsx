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

const Window = ({ windows , closeWindow}) => {
  const windowList = windows.length ? (
    windows.map(window => {
      const style = `window-frame back-${window.id}`;
      return (
        <div className={style} key={window.id}>
          <button className="window-frame-item error_color" onClick={() => { closeWindow(window.id) }} type="button">{window.close}</button>
          <button className="window-frame-item primary_variant_color" onClick={() => { closeWindow(window.id) }} type="button">{window.close}</button>
          <button className="window-frame-item secondary_variant_color" onClick={() => { closeWindow(window.id) }} type="button">{window.close}</button>
          <div className="window-content primary_variant_color">
            <p className="window-content-title">
              {window.title}
            </p>
            <p className="window-content-subtitle">
              {window.description}
            </p>
          </div>
        </div>
      )
    })
  ) : (<p>no content</p>)
  
  return(
    <div>
      {windowList}
    </div>
  )
}

export default Window;