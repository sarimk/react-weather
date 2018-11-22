import React from "react";
import ReactDom from 'react-dom';
import App from "./App";

const element = <h1>Hello World</h1>;
ReactDom.render(<App />, document.querySelector('#weather'));