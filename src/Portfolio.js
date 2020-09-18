/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const basicStyle = css`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
  li {
    list-style-type: none;
  }
`;

const portfolio__title = css`
  font-size: 3rem;
  padding-top: 30px;
  font-family: "Gill Sans", sans-serif;
`;

const portfolioList = css`
  line-height: 1.2;
`;

const portfolioList_card = css`
  margin: 15px 0;
  padding: 10px;
  border: solid 1px rgb(179, 175, 175);
  border-radius: 3px;
  font-size: 0.9rem;
  color: rgb(129, 126, 126);
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
`;

const portfolioList_card_title = css`
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  padding-bottom: 5px;
`;

const portfolioList_card_text = css`
  font-size: 1.1rem;
  padding-top: 10px;
  color: rgb(20, 19, 19);
`;

const white = css`
  &:hover {
    transition: 0.8s linear;
    color: rgb(238, 242, 245);

    &::before {
      bottom: 0;
      right: 0;
      background-color: rgba(12, 12, 11, 0.925);
    }
    &::after {
      top: 0;
      left: 0;
      background-color: rgba(12, 12, 11, 0.925);
    }
  }
`;

function Portfolio() {
  return (
    <section css={basicStyle} class="portfolio basicStyle position-now">
      <h2 css={portfolio__title} class="portfolio__title" id="goPortfolio">
        My portfolio
      </h2>
      <ul css={portfolioList} class="portfolioList">
        <a href="https://minsyuku-example.netlify.com/index.html">
          <li css={portfolioList_card} class="portfolioList__minsyuku">
            <h3
              css={[portfolioList_card_title, white]}
              class="portfolioList__minsyuku__title minsyukuWhite"
            >
              民宿(擬似サイト)
            </h3>
            <span css={white} class="minsyukuWhite">
              学習20日で制作
            </span>
            <p
              css={[portfolioList_card_text, white]}
              class="portfolioList__minsyuku__text minsyukuWhite"
            >
              架空の民宿をイメージして制作したWebsiteです。
            </p>
          </li>
        </a>
        <a href="https://baanportfolio.netlify.com/">
          <li css={portfolioList_card} class="portfolioList__firstPortfolio">
            <h3
              css={[portfolioList_card_title, white]}
              class="portfolioList__firstPortfolio__title firstPortfolioWhite"
            >
              Portfolio(first)
            </h3>
            <span css={white} class="firstPortfolioWhite">
              学習50日で制作
            </span>
            <p
              css={[portfolioList_card_text, white]}
              class="portfolioList__firstPortfolio__text firstPortfolioWhite"
            >
              初めて制作したポートフォリオサイトです。
            </p>
          </li>
        </a>
        <a href="https://qiita.com/baan_nasebanaru">
          <li css={portfolioList_card} class="portfolioList__Qiita">
            <h3
              css={[portfolioList_card_title, white]}
              class="portfolioList__Qiita__title qiitaWhite"
            >
              制作記事
            </h3>
            <span css={white} class="qiitaWhite">
              学習20日目から継続
            </span>
            <p
              css={[portfolioList_card_text, white]}
              class="portfolioList__Qiita__text qiitaWhite"
            >
              過去に執筆した記事の一覧です。
            </p>
          </li>
        </a>
        <a>
          <li css={portfolioList_card} class="portfolioList__comingSoon">
            <h3
              css={[portfolioList_card_title, white]}
              class="portfolioList__comingSoon__title comingSoonWhite"
            >
              API連携
            </h3>
            <span css={white} class="comingSoonWhite">
              学習60日目から作成中
            </span>
            <p
              css={[portfolioList_card_text, white]}
              class="portfolioList__comingSoon__text comingSoonWhite"
            >
              現在制作中
            </p>
          </li>
        </a>
      </ul>
    </section>
  );
}

export default Portfolio;
