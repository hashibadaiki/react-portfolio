/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "src/scripts/Const";

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

export const Portfolio3 = () => {
  return (
    <a css={portfolioListCardLink} href="https://qiita.com/baan_nasebanaru">
      <div css={portfolioListCard}>
        <h3 css={portfolioListCardTitle}>制作記事</h3>
        <span>学習20日目から継続</span>
        <p css={portfolioListCardText}>過去に執筆した記事の一覧です。</p>
      </div>
    </a>
  );
};
