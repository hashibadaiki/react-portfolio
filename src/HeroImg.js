/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function MainHeroImg() {
  return (
    <div class="hero__image">
      <div class="hero__image--backColor">
        <div class="titleEnclose">
          <h1 class="hero__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="125"
              height="40"
              viewBox="0 0 494.359 207.055"
              class="baan"
            >
              <defs></defs>
              <path
                id="Path_2"
                data-name="Path 2"
                class="baan__path"
                transform="translate(16.809 194.543)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="50"
              viewBox="0 0 613.311 276.391"
              class="portfolioSvg"
            >
              <defs></defs>
              <path
                id="Path_7"
                data-name="Path 7"
                class="portfolioSvg__path"
                transform="translate(9.1 193.664)"
              ></path>
            </svg>
          </h1>

          <h1 class="hero__title__pc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="420"
              height="82"
              viewBox="0 0 837.217 166.527"
              class="baanPc"
            >
              <defs></defs>
              <path
                id="Path_2"
                data-name="Path 2"
                class="baanPc__path"
                transform="translate(-8.582 162.219)"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="620"
              height="80"
              viewBox="0 0 1234.984 155.688"
              class="portfolioPc"
            >
              <defs></defs>
              <path
                id="Path_1"
                data-name="Path 1"
                class="portfolioPc__path"
                transform="translate(-8.582 148.156)"
              ></path>
            </svg>
          </h1>

          <div class="buttonEnclose">
            <div class="buttonEnclose__inner">
              <button type="button" class="zdo_drawer_button">
                <span class="zdo_drawer_bar zdo_drawer_bar1"></span>
                <span class="zdo_drawer_bar zdo_drawer_bar2"></span>
                <span class="zdo_drawer_bar zdo_drawer_bar3"></span>
                <span class="zdo_drawer_menu_text zdo_drawer_text">MENU</span>
                <span class="zdo_drawer_close zdo_drawer_text">CLOSE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeroImg;
