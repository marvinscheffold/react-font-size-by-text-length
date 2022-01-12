# react-font-size-by-text-length

Dynamic font size component for ReactJS

## Table of Contents

* [Installation](#installation)
* [API documentation](#api-documentation)
* [Examples](#examples)
* [Demos](#demos)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save react-font-size-by-text-length

## API documentation

| Name  |Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| children | ReactElement[] &#124; ReactElement |  | Children or Array of Children which include text, icons or other ReactElements |
| maxPercent  | number  | 100 | Font size for the first char based on outside css rules |
| minPercent  | number | 0  | Specifies at which font size the component should not reduce further |
| changePerChar  | number  |  | How many percent per char should the font size change |
| startAtChar  | number | 0  | When passed string has this length the font size reduction begins  |
| stopAtChar  | number | Infinity  | When passed string has this length the font size reduction ends  |

## Examples

Here are three simple example of react-font-size-by-text-length being used in an app:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFontSizeByTextLength from 'react-font-size-by-text-length';

function App() {
    const textArray = ["hello", "world"]
  return (
    <>
      // ---- Example One -----
      
      <ReactFontSizeByTextLength changePerChar={10}>
        <span>This text will be smaller</span>
      </ReactFontSizeByTextLength>
      
      <ReactFontSizeByTextLength changePerChar={10}>
        <span>Than this text</span>
      </ReactFontSizeByTextLength>

      // ---- Example Two -----
      
      <ReactFontSizeByTextLength changePerChar={5} startAtChar={2}>
        <span>
          This works 
          <i class="fas fa-check-circle"></i>
        </span>
      </ReactFontSizeByTextLength>


        // ---- Example Three -----

        <ReactFontSizeByTextLength changePerChar={3} minPercent={50}>
            {
                textArray.map((text) =>
                    <span>{text}</span>
            )}
        </ReactFontSizeByTextLength>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Demos





There is one demo hosted on GitHub which
demonstrate how this component can be used in a calculator app:

* [Calculator App](https://marvinscheffold.github.io/react-calculator/)
* Want to contribute a demo? Make a pull request