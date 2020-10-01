/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import profilePicture from "images/profile.jpg";

const profileListImage = css`
  text-align: center;
  background-color: rgba(230, 237, 238, 0.315);
  border-radius: 3px;
  width: 60%;
  display: inline-block;
  margin-right: 15px;
`;

const imageSize = css`
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 350px;
`;

export const AboutMeImage = () => {
  return (
    <div css={profileListImage}>
      <img src={profilePicture} css={imageSize} alt="ばーんの写真" />
    </div>
  );
};
