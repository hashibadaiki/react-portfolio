/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { baseCSS } from "../../Const.js";
import Portfolio1 from "./Portfolio1";
import Portfolio2 from "./Portfolio2";
import Portfolio3 from "./Portfolio3";
import Portfolio4 from "./Portfolio4";

function Portfolio() {
  return (
    <div>
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio3 />
      <Portfolio4 />
    </div>
  );
}

export default Portfolio;
