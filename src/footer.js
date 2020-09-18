/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const footer = css`
  background-color: rgba(12, 12, 12, 0.925);
  li {
    list-style-type: none;
  }
`;

const contactList = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

const contactList_twitter_github = css`
  padding-right: 10px;
  color: rgb(238, 242, 245);
`;

const contactList_facebook = css`
  color: rgb(238, 242, 245);
`;

const howToContact = css`
  padding: 30px 0 10px 0;
`;

const copyright = css`
  text-align: center;
  padding: 5px 0;
  font-size: 0.9rem;
  color: rgb(238, 242, 245);
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
