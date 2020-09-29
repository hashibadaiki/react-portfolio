/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "Const";

const footer = css`
  background-color: ${baseCSS.backGroundColor};
  li {
    list-style-type: none;
  }
`;

const contactList = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 1.5rem;
`;

const contactList_twitter_github = css`
  padding-right: 10px;
  color: ${baseCSS.headFooterColor};
`;

const contactList_facebook = css`
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
    <footer css={footer} class="contact footer">
      <address css={howToContact} class="howToContact">
        <ul css={contactList} class="contactList">
          <a href="https://twitter.com/baan_nasebanaru">
            <li css={contactList_twitter_github} class="contactList__twitter">
              <i class="fab fa-twitter-square fa-2x"></i>
            </li>
          </a>
          <a href="https://github.com/hashibadaiki">
            <li css={contactList_twitter_github} class="contactList__github">
              <i class="fab fa-github-square fa-2x"></i>
            </li>
          </a>
          <a href="https://www.facebook.com/daiki.hasiba">
            <li css={contactList_facebook} class="contactList__facebook">
              <i class="fab fa-facebook-square fa-2x"></i>
            </li>
          </a>
        </ul>
      </address>
      <p css={copyright} class="copyright">
        <small>&copy; 2019-2020 Baan's portfolio</small>
      </p>
    </footer>
  );
}

export default Footer;
