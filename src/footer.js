/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "Const";

const footer = css`
  background-color: ${baseCSS.backGroundColor};
`;

const contactList = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 1.5rem;
`;

const contactListTwitterGithub = css`
  padding-right: 10px;
  color: ${baseCSS.headFooterColor};
`;

const contactListFacebook = css`
  color: ${baseCSS.headFooterColor};
`;

const howToContact = css`
  padding: 60px 0 20px 0;
`;

const copyright = css`
  text-align: center;
  padding: 20px 0;
  font-size: 0.9rem;
  color: ${baseCSS.headFooterColor};
`;

function Footer() {
  return (
    <footer css={footer}>
      <address css={howToContact}>
        <div css={contactList}>
          <a href="https://twitter.com/baan_nasebanaru">
            <div css={contactListTwitterGithub}>
              <i class="fab fa-twitter-square fa-2x"></i>
            </div>
          </a>
          <a href="https://github.com/hashibadaiki">
            <div css={contactListTwitterGithub}>
              <i class="fab fa-github-square fa-2x"></i>
            </div>
          </a>
          <a href="https://www.facebook.com/daiki.hasiba">
            <div css={contactListFacebook}>
              <i class="fab fa-facebook-square fa-2x"></i>
            </div>
          </a>
        </div>
      </address>
      <p css={copyright}>
        <small>&copy; 2019-2020 Baan's portfolio</small>
      </p>
    </footer>
  );
}

export default Footer;
