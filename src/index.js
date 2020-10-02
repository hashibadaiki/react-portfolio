import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/core";
import * as serviceWorker from "src/serviceWorker";
import { Header } from "src/sections/Header";
import { Main } from "src/sections/Main";
import { Footer } from "src/sections/Footer";
import { resetCSS } from "src/constants/resetCSS";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={resetCSS} />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
