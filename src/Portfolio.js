/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

function MainPortfolio() {
  return (
    <section class="portfolio basicStyle position-now">
      <h2 class="portfolio__title" id="goPortfolio">
        My portfolio
      </h2>
      <ul class="portfolioList">
        <a href="https://minsyuku-example.netlify.com/index.html">
          <li class="portfolioList__minsyuku">
            <h3 class="portfolioList__minsyuku__title minsyukuWhite">
              民宿(擬似サイト)
            </h3>
            <span class="minsyukuWhite">学習20日で制作</span>
            <p class="portfolioList__minsyuku__text minsyukuWhite">
              架空の民宿をイメージして制作したWebsiteです。
            </p>
          </li>
        </a>
        <a href="https://baanportfolio.netlify.com/">
          <li class="portfolioList__firstPortfolio">
            <h3 class="portfolioList__firstPortfolio__title firstPortfolioWhite">
              Portfolio(first)
            </h3>
            <span class="firstPortfolioWhite">学習50日で制作</span>
            <p class="portfolioList__firstPortfolio__text firstPortfolioWhite">
              初めて制作したポートフォリオサイトです。
            </p>
          </li>
        </a>
        <a href="https://qiita.com/baan_nasebanaru">
          <li class="portfolioList__Qiita">
            <h3 class="portfolioList__Qiita__title qiitaWhite">制作記事</h3>
            <span class="qiitaWhite">学習20日目から継続</span>
            <p class="portfolioList__Qiita__text qiitaWhite">
              過去に執筆した記事の一覧です。
            </p>
          </li>
        </a>
        <a>
          <li class="portfolioList__comingSoon">
            <h3 class="portfolioList__comingSoon__title comingSoonWhite">
              API連携
            </h3>
            <span class="comingSoonWhite">学習60日目から作成中</span>
            <p class="portfolioList__comingSoon__text comingSoonWhite">
              現在制作中
            </p>
          </li>
        </a>
      </ul>
    </section>
  );
}

export default MainPortfolio;
