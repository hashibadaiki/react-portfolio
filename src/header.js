/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "Const";

const navigationWide = css`
  display: inline-block;
  width: 100%;
  transform: scale(1, 1);
  height: 80px;
  color: ${baseCSS.headFooterColor};
  z-index: 1000;
  position: fixed;
`;

const navigationList = css`
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  background-color: ${baseCSS.backGroundColor};
`;

const navigationListStyle = css`
  list-style-type: none;
`;

const navigationListBtn = css`
  display: inline-block;
  cursor: pointer;
  font-family: ${baseCSS.englishFont};
`;

function Header() {
  return (
    <nav css={navigationWide}>
      <ul css={navigationList}>
        <li css={navigationListStyle}>
          <div css={navigationListBtn}>TOP</div>
        </li>
        <li css={navigationListStyle}>
          <div css={navigationListBtn}>My portfolio</div>
        </li>
        <li css={navigationListStyle}>
          <div css={navigationListBtn}>About me</div>
        </li>
        <li css={navigationListStyle}>
          <div css={navigationListBtn}>and more...</div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
