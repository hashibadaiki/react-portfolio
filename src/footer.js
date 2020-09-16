/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

function Footer() {
  return (
    <footer class="contact footer">
      <address class="HowToContact">
        <ul class="contactList">
          <a href="https://twitter.com/baan_nasebanaru">
            <li class="contactList__twitter">
              <i class="fab fa-twitter-square fa-2x"></i>
            </li>
          </a>
          <a href="https://github.com/hashibadaiki">
            <li class="contactList__github">
              <i class="fab fa-github-square fa-2x"></i>
            </li>
          </a>
          <a href="https://www.facebook.com/daiki.hasiba">
            <li class="contactList__facebook">
              <i class="fab fa-facebook-square fa-2x"></i>
            </li>
          </a>
        </ul>
      </address>
      <p class="copyright">
        <small>&copy; 2019-2020 Baan's portfolio</small>
      </p>
    </footer>
  );
}

export default Footer;
