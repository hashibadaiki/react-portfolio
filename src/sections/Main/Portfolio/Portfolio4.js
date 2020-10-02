/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  portfolioListCard,
  portfolioListCardLink,
  portfolioListCardTitle,
  portfolioListCardText,
} from "src/constants/commonCSS";

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
