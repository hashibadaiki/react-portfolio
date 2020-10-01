/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "src/scripts/Const";

const profileListAboutMe = css`
  width: 35%;
  display: inline-block;
  margin: 0;
  vertical-align: top;
  padding-left: 10px;
`;

const profileListDetails = css`
  color: ${baseCSS.titleColor};
  font-family: ${baseCSS.englishFont};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const profileText = css`
  font-size: 1.1rem;
  line-height: 2;
`;

export const AboutMeProfile = () => {
  return (
    <div css={profileListAboutMe}>
      <h3 css={profileListDetails}>名前：ばーん</h3>
      <div css={profileText}>
        <p>
          大阪出身。既婚者。現在転職に向けてプログラミング学習中(2019.10〜)。副業も視野に活動中
        </p>
        <p>
          HTML,CSS,JSを学習。今後はデザインとJSの学習を進めWebサイト制作に取り組んでいこうと考えています。
        </p>
      </div>
    </div>
  );
};
