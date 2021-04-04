import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import "./data";  

var head = document.head;
var link1 = document.createElement("script");
link1.src = "https://unpkg.com/typer-dot-js@0.1.0/typer.js";
head.appendChild(link1);

ReactDOM.render(<App />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
