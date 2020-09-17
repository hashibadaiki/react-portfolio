/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const iTyped = css`
  font-family: Oswald', sans-serif;
  font-size: 1.5rem;
`;

const type = css`
  padding-bottom: 60px;
  text-align: center;
`;

function MainAndMore() {
  return (
    <div css={type} class="type">
      <span css={iTyped} id="iTyped"></span>
    </div>
  );
}

export default MainAndMore;
