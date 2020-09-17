import React from "react";
import ReactDOM from "react-dom";
import HeroImg from "./HeroImg";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import AndMore from "./AndMore";
import * as serviceWorker from "./serviceWorker";

function Main() {
  return (
    <div>
      <HeroImg />
      <Portfolio />
      <AboutMe />
      <AndMore />
    </div>
  );
}

export default Main;
