/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "src/constants/baseCSS";
import { frameCSS } from "src/constants/commonCSS";
import { AboutMeProfile } from "src/sections/Main/AboutMe/AboutMeProfile";
import { AboutMeImage } from "src/sections/Main/AboutMe/AboutMeImage";
import { AboutMeWork } from "src/sections/Main/AboutMe/AboutMeWork";

const profileTitle = css`
  font-size: ${baseCSS.titleSize};
  padding-bottom: 20px;
  font-family: ${baseCSS.englishFont};
`;

export const AboutMe = () => {
  return (
    <section css={frameCSS}>
      <h2 css={profileTitle}>About me</h2>
      <div>
        <AboutMeImage />
        <AboutMeProfile />
        <AboutMeWork />
      </div>
    </section>
  );
};
