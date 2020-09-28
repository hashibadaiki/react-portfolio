/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import hero_image from "./images/heroImage.jpg";
import title_image from "./images/title.png";

const hero__image = css`
  background-image: url(${hero_image});
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  z-index: 2;
  position: relative;
`;
const hero__imageBack = css`
  background: linear-gradient(
    to top,
    rgba(207, 22, 22, 0),
    rgba(240, 236, 236, 0.795) 90%
  );
  height: 300px;
  background-position: center;
  z-index: 10;
`;

const hero__title__pc = css`
  padding: 100px 40px;
`;

const siteTitle = css`
  width: auto;
  height: 150px;
`;

function HeroImg() {
  return (
    <div css={hero__image} class="hero__image">
      <div css={hero__imageBack} class="hero__image--backColor">
        <div class="titleEnclose">
          <h1 css={hero__title__pc} class="hero__title__pc">
            <img
              src={title_image}
              alt="React Replace"
              class="siteTitle"
              css={siteTitle}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
