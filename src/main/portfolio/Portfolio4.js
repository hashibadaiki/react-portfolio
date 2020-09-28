/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "../../Const.js";

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

function Portfolio4() {
  return (
    <div class="portfolioList_card_link" css={portfolioList_card_link}>
      <div css={portfolioList_card} class="portfolioList__comingSoon">
        <h3
          css={[portfolioList_card_title]}
          class="portfolioList__comingSoon__title comingSoonWhite"
        >
          API連携
        </h3>
        <span class="comingSoonWhite">学習60日目から作成中</span>
        <p
          css={[portfolioList_card_text]}
          class="portfolioList__comingSoon__text comingSoonWhite"
        >
          現在制作中
        </p>
      </div>
    </div>
  );
}

export default Portfolio4;
