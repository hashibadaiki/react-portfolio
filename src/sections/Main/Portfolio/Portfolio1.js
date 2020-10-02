/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
  portfolioListCard,
  portfolioListCardLink,
  portfolioListCardTitle,
  portfolioListCardText,
} from "src/constants/commonCSS";

export const Portfolio1 = () => {
  return (
    <a
      css={portfolioListCardLink}
      href="https://minsyuku-example.netlify.com/index.html"
    >
      <div css={portfolioListCard}>
        <h3 css={[portfolioListCardTitle]}>民宿(擬似サイト)</h3>
        <span>学習20日で制作</span>
        <p css={[portfolioListCardText]}>
          架空の民宿をイメージして制作したWebsiteです。
        </p>
      </div>
    </a>
  );
};
