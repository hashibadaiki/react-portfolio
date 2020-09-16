/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

function Header() {
  return (
    <nav class="navigation wide">
      <ul class="navigationList" id="navigationWide__js">
        <li class="navigationList__top">
          <div class="navigationList__btn" id="topJs__wide">
            TOP
          </div>
        </li>
        <li class="navigationList__portfolio">
          <div class="navigationList__btn" id="portfolioJs__wide">
            My portfolio
          </div>
        </li>
        <li class="navigationList__profile">
          <div class="navigationList__btn" id="aboutJs__wide">
            About me
          </div>
        </li>
        <li class="navigationList__contact">
          <div class="navigationList__btn" id="contactJs__wide">
            and more...
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
