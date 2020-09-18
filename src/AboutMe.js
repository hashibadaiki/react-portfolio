/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import profile_picture from "./images/profile.jpg";

const basicStyle = css`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
  li {
    list-style-type: none;
  }
`;

const profile__title = css`
  font-size: 3rem;
  padding-bottom: 20px;
  font-family: "Gill Sans", sans-serif;
`;

const profileList = css`
  font-size: 1.1rem;
  padding-bottom: 20px;
  font-family: "Gill Sans", sans-serif;
`;

const profileList__img = css`
  text-align: center;
  height: 350px;
  background-color: rgba(230, 237, 238, 0.315);
  border-radius: 3px;
  width: 60%;
  display: inline-block;
  margin-right: 15px;
`;

const profileList__imgCurrent = css`
  border-radius: 3px;
  height: 350px;
`;

const profileList__aboutMe = css`
  width: 35%;
  display: inline-block;
  margin: 0;
  vertical-align: top;
`;

const profileList__details = css`
  color: rgb(20, 19, 19);
  font-family: "Gill Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const profileList__workExperience = css`
  margin: 30px 0;
`;

const profileText = css`
  font-size: 1.1rem;
  line-height: 2;
}
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
  &::after{
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
  &:hover{
  color: #faf6f6;
    &::after{
    left: 0;
    background-color: rgb(30, 223, 236);
    }
  }
}
`;

function AboutMe() {
  return (
    <section css={basicStyle} class="profile basicStyle position-now">
      <h2 css={profile__title} class="profile__title" id="goAbout">
        About me
      </h2>
      <ul css={profileList} class="profileList">
        <li css={profileList__img} class="profileList__img">
          <img
            src={profile_picture}
            css={profileList__imgCurrent}
            alt="ばーんの写真"
            class="profileList__img--current"
          />
        </li>
        <li css={profileList__aboutMe} class="profileList__aboutMe">
          <p css={profileList__details} class="profileList__aboutMe__name">
            名前：ばーん
          </p>
          <div css={profileText} class="profileText">
            大阪出身。既婚者。現在転職に向けてプログラミング学習中(2019.10〜)。副業も視野に活動中。
            <br />
            HTML,CSS,JSを学習。今後はデザインとJSの学習を進めWebサイト制作に取り組んでいこうと考えています。
            <p css={addProfile} class="addProfile">
              現在は実務経験を積んで成長していくことを最優先に考えています。簡単なお仕事でもご連絡頂ければ幸いです。
              <br />
              <span>
                <a
                  href="https://twitter.com/baan_nasebanaru"
                  class="contactTwitter"
                  css={contactTwitter}
                >
                  ※ご連絡はTwitterからお願いします
                </a>
              </span>
            </p>
          </div>
        </li>
        <li
          css={profileList__workExperience}
          class="profileList__workExperience"
        >
          <p
            css={profileList__details}
            class="profileList__workExperience__index  position-now"
          >
            経歴
          </p>
          <div css={profileText} class="profileText">
            新卒でパチンコ店大手に就職。管理職6年経験。組合員数500人を超える組合長を経験。運営に3年間携わり視座を体得。
            <br />
            特に対人の洞察力が優れており、安定した組織運営で評価を獲得。
            <br />
            <p css={addProfile} class="addProfile">
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
