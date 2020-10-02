/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  portfolioListCard,
  portfolioListCardLink,
  portfolioListCardTitle,
  portfolioListCardText,
} from "src/constants/commonCSS";

export const Portfolio2 = () => {
  return (
    <a css={portfolioListCardLink} href="https://baanportfolio.netlify.com/">
      <div css={portfolioListCard}>
        <h3 css={[portfolioListCardTitle]}>Portfolio(first)</h3>
        <span>学習50日で制作</span>
        <p css={[portfolioListCardText]}>
          初めて制作したポートフォリオサイトです。
        </p>
      </div>
    </a>
  );
};
