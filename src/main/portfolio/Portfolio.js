/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "Const";
import Portfolio1 from "main/portfolio/Portfolio1";
import Portfolio2 from "main/portfolio/Portfolio2";
import Portfolio3 from "main/portfolio/Portfolio3";
import Portfolio4 from "main/portfolio/Portfolio4";

const basicStyle = css`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
`;

const portfolioTitle = css`
  font-size: 3rem;
  padding: 30px 0;
  font-family: ${baseCSS.englishFont};
`;

const portfolioList = css`
  line-height: 1.2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Portfolio() {
  return (
    <div>
      <section css={basicStyle} class="portfolio basicStyle position-now">
        <h2 css={portfolioTitle} class="portfolioTitle" id="goPortfolio">
          My portfolio
        </h2>
        <div css={portfolioList} class="portfolioList">
          <Portfolio1 />
          <Portfolio2 />
          <Portfolio3 />
          <Portfolio4 />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
