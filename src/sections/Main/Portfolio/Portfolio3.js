/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  portfolioListCard,
  portfolioListCardLink,
  portfolioListCardTitle,
  portfolioListCardText,
} from "src/constants/commonCSS";

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
