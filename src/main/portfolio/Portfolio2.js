/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "Const";

const portfolioList_card = css`
  height: 150px;
  margin: 0;
  padding: 10px;
  border: solid 1px ${baseCSS.annotationColor};
  border-radius: 3px;
  font-size: 0.9rem;
  color: ${baseCSS.annotationColor};
  overflow: hidden;
  position: relative;
  z-index: 1;
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

const portfolioList_card_title = css`
  font-family: ${baseCSS.englishFont};
  font-size: 1.5rem;
  padding-bottom: 5px;
  color: ${baseCSS.pickUpColor};
`;

const portfolioList_card_text = css`
  font-size: 1.5rem;
  padding-top: 10px;
  color: ${baseCSS.pickUpColor};
`;

const portfolioList_card_link = css`
  width: 45%;
  margin: 15px;
`;

function Portfolio2() {
  return (
    <a
      class="portfolioList_card_link"
      css={portfolioList_card_link}
      href="https://baanportfolio.netlify.com/"
    >
      <div css={portfolioList_card} class="portfolioList__firstPortfolio">
        <h3
          css={[portfolioList_card_title]}
          class="portfolioList__firstPortfolio__title firstPortfolioWhite"
        >
          Portfolio(first)
        </h3>
        <span class="firstPortfolioWhite">学習50日で制作</span>
        <p
          css={[portfolioList_card_text]}
          class="portfolioList__firstPortfolio__text firstPortfolioWhite"
        >
          初めて制作したポートフォリオサイトです。
        </p>
      </div>
    </a>
  );
}

export default Portfolio2;
