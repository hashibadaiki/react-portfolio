import { css } from "@emotion/core";
import { baseCSS } from "src/constants/baseCSS";

export const frameCSS = css`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
`;

export const portfolioListCard = css`
  height: 150px;
  padding: 10px;
  border: solid 1px ${baseCSS.annotationColor};
  border-radius: 3px;
  font-size: ${baseCSS.textSize};
  color: ${baseCSS.annotationColor};
  overflow: hidden;
  position: relative;
  transition: 0.8s linear;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -100%;
    right: 0;
    width: 100%;
    height: 50%;
    transition: 0.4s linear;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50%;
    transition: 0.4s linear;
  }
  &:hover {
    * {
      transition: 0.8s linear;
      color: ${baseCSS.headFooterColor};
    }

    &::before {
      bottom: 0;
      right: 0;
      background-color: ${baseCSS.backGroundColor};
    }
    &::after {
      top: 0;
      left: 0;
      background-color: ${baseCSS.backGroundColor};
    }
  }
`;

export const portfolioListCardTitle = css`
  font-family: ${baseCSS.englishFont};
  font-size: ${baseCSS.subtitleSize};
  padding-bottom: 5px;
  color: ${baseCSS.pickUpColor};
`;

export const portfolioListCardText = css`
  padding-top: 10px;
  color: ${baseCSS.pickUpColor};
`;

export const portfolioListCardLink = css`
  width: 45%;
  margin: 15px;
`;
