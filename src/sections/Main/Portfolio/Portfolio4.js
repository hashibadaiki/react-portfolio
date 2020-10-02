/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "src/constants/baseCSS";

const portfolioListCard = css`
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

const portfolioListCardTitle = css`
  font-family: ${baseCSS.englishFont};
  font-size: 1.5rem;
  padding-bottom: 5px;
  color: ${baseCSS.pickUpColor};
`;

const portfolioListCardText = css`
  font-size: 1.5rem;
  padding-top: 10px;
  color: ${baseCSS.pickUpColor};
`;

const portfolioListCardLink = css`
  width: 45%;
  margin: 15px;
`;

export const Portfolio4 = () => {
  return (
    <div css={portfolioListCardLink}>
      <div css={portfolioListCard}>
        <h3 css={[portfolioListCardTitle]}>API連携</h3>
        <span>学習60日目から作成中</span>
        <p css={[portfolioListCardText]}>現在制作中</p>
      </div>
    </div>
  );
};
