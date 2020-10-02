/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "src/constants/baseCSS";
import { frameCSS } from "src/constants/commonCSS";
import { Portfolio1 } from "src/sections/Main/Portfolio/Portfolio1";
import { Portfolio2 } from "src/sections/Main/Portfolio/Portfolio2";
import { Portfolio3 } from "src/sections/Main/Portfolio/Portfolio3";
import { Portfolio4 } from "src/sections/Main/Portfolio/Portfolio4";

const portfolioTitle = css`
  font-size: ${baseCSS.titleSize};
  padding: 30px 0;
  font-family: ${baseCSS.englishFont};
`;

const portfolioList = css`
  line-height: 1.2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Portfolio = () => {
  return (
    <div>
      <section css={frameCSS}>
        <h2 css={portfolioTitle}>My portfolio</h2>
        <div css={portfolioList}>
          <Portfolio1 />
          <Portfolio2 />
          <Portfolio3 />
          <Portfolio4 />
        </div>
      </section>
    </div>
  );
};
