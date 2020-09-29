/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import profilePicture from "images/profile.jpg";
import { baseCSS } from "Const";

const breakpoints = [768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const basicStyle = css`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
  li {
    list-style-type: none;
  }
`;

const profileTitle = css`
  font-size: 3rem;
  padding-bottom: 20px;
  font-family: ${baseCSS.englishFont};
`;

const profileList = css`
  font-size: 1.1rem;
  padding-bottom: 20px;
  font-family: ${baseCSS.englishFont};
`;

const profileListImg = css`
  text-align: center;
  height: 350px;
  background-color: rgba(230, 237, 238, 0.315);
  border-radius: 3px;
  width: 60%;
  display: inline-block;
  margin-right: 15px;
`;

const profileListImgCurrent = css`
  border-radius: 3px;
  height: 350px;
`;

const profileListAboutMe = css`
  width: 35%;
  display: inline-block;
  margin: 0;
  vertical-align: top;
`;

const profileListDetails = css`
  color: ${baseCSS.titleColor};
  font-family: ${baseCSS.englishFont};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const profileListWorkExperience = css`
  margin: 30px 0;
`;

const profileText = css`
  font-size: 1.1rem;
  line-height: 2;
`;

const addProfile = css`
  display: none;
`;

const contactTwitter = css`
  font-size: 0.9rem;
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: 0.8s linear;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    transition: 0.3s linear;
    border-radius: 3px;
  }
  &:hover {
    color: #faf6f6;
    &::after {
      left: 0;
      background-color: rgb(30, 223, 236);
    }
  }
`;

function AboutMe() {
  return (
    <section css={basicStyle}>
      <h2
        css={
          (profileTitle,
          {
            [mq[0]]: {
              fontSize: "4rem",
            },
          })
        }
      >
        About me
      </h2>
      <ul css={profileList}>
        <li css={profileListImg}>
          <img
            src={profilePicture}
            css={profileListImgCurrent}
            alt="ばーんの写真"
          />
        </li>
        <li css={profileListAboutMe}>
          <p css={profileListDetails}>名前：ばーん</p>
          <div css={profileText}>
            大阪出身。既婚者。現在転職に向けてプログラミング学習中(2019.10〜)。副業も視野に活動中。
            <br />
            HTML,CSS,JSを学習。今後はデザインとJSの学習を進めWebサイト制作に取り組んでいこうと考えています。
            <p css={addProfile}>
              現在は実務経験を積んで成長していくことを最優先に考えています。簡単なお仕事でもご連絡頂ければ幸いです。
              <br />
              <span>
                <a
                  href="https://twitter.com/baan_nasebanaru"
                  css={contactTwitter}
                >
                  ※ご連絡はTwitterからお願いします
                </a>
              </span>
            </p>
          </div>
        </li>
        <li css={profileListWorkExperience}>
          <p css={profileListDetails}>経歴</p>
          <div css={profileText}>
            新卒でパチンコ店大手に就職。管理職6年経験。組合員数500人を超える組合長を経験。運営に3年間携わり視座を体得。
            <br />
            特に対人の洞察力が優れており、安定した組織運営で評価を獲得。
            <br />
            <p css={addProfile}>
              ・数値分析と人材育成により、商品廃棄率0％の達成。また、前年比売上120％達成(10ヶ月間)
              <br />
              ・新店舗の立ち上げ経験。初年度目標客数150％の達成
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
