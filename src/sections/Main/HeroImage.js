/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import heroImage from "src/images/heroImage.jpg";
import titleImage from "src/images/title.png";

const heroImageStyle = css`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 600px;
  width: 100%;
  z-index: 100;
  position: relative;
`;
const heroImageBack = css`
  background: linear-gradient(
    to top,
    rgba(207, 22, 22, 0),
    rgba(240, 236, 236, 0.795) 90%
  );
  height: 300px;
  background-position: center;
`;

const heroTitle = css`
  padding: 100px 40px;
`;

const siteTitle = css`
  width: auto;
  height: 150px;
`;

export const HeroImage = () => {
  return (
    <div css={heroImageStyle}>
      <div css={heroImageBack}>
        <div>
          <h1 css={heroTitle}>
            <img
              src={titleImage}
              alt="React Replace(タイトル)"
              css={siteTitle}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};
