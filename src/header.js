/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const navigationWide = css`
  display: inline-block;
  width: 100%;
  transform: scale(1, 1);
  height: 80px;
  background-color: rgba(12, 12, 11, 0.925);
  color: rgb(238, 242, 245);
  z-index: 10;
`;

const navigationList = css`
  font-size: 2rem;
  text-align: center;
  display: none;
`;

const navigationList__portfolio = css`
  padding-top: 150px;
`;

const navigationList__profile_contact_top = css`
  padding-top: 50px;
  list-style-type: none;
`;

const navigationList__btn = css`
  display: inline-block;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
`;

function Header() {
  return (
    <nav css={navigationWide} class="navigation wide">
      <ul css={navigationList} class="navigationList" id="navigationWide__js">
        <li
          css={navigationList__profile_contact_top}
          class="navigationList__top"
        >
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="topJs__wide"
          >
            TOP
          </div>
        </li>
        <li css={navigationList__portfolio} class="navigationList__portfolio">
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="portfolioJs__wide"
          >
            My portfolio
          </div>
        </li>
        <li
          css={navigationList__profile_contact_top}
          class="navigationList__profile"
        >
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="aboutJs__wide"
          >
            About me
          </div>
        </li>
        <li
          css={navigationList__profile_contact_top}
          class="navigationList__contact"
        >
          <div
            css={navigationList__btn}
            class="navigationList__btn"
            id="contactJs__wide"
          >
            and more...
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
