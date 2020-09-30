/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "Const";
import AboutMeProfile from "main/aboutMe/AboutMeProfile";
import AboutMeImage from "main/aboutMe/AboutMeImage";
import AboutMeWork from "main/aboutMe/AboutMeWork";

const basicStyle = css`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;
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

function AboutMe() {
  return (
    <section css={basicStyle}>
      <h2 css={profileTitle}>About me</h2>
      <div css={profileList}>
        <AboutMeImage />
        <AboutMeProfile />
        <AboutMeWork />
      </div>
    </section>
  );
}

export default AboutMe;
