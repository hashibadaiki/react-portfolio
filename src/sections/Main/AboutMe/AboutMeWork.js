/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "src/constants/baseCSS";

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

export const AboutMeWork = () => {
  return (
    <div css={profileListWorkExperience}>
      <h3 css={profileListDetails}>経歴</h3>
      <div css={profileText}>
        <p>
          新卒でパチンコ店大手に就職。管理職6年経験。組合員数500人を超える組合長を経験。運営に3年間携わり視座を体得。
        </p>
        <p>特に対人の洞察力が優れており、安定した組織運営で評価を獲得。</p>
      </div>
    </div>
  );
};
