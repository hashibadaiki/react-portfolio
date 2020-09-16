import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import MainHeroImg from "./mainHeroImg";
import MainPortfolio from "./mainPortfolio";
import MainAboutMe from "./mainAboutMe";
import MainAndMore from "./mainAndMore";
import Footer from "./footer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainHeroImg />
    <MainPortfolio />
    <MainAboutMe />
    <MainAndMore />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
