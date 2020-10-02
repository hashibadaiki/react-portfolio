import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/core";
import * as serviceWorker from "src/serviceWorker";
import { Header } from "src/scripts/Header";
import { Main } from "src/scripts/Main";
import { Footer } from "src/scripts/Footer";
import { resetCSS } from "src/scripts/Const";

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
