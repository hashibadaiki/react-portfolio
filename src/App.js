/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Test } from "./Test";

const color = "white";
const divStyle = css`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
`;

function App() {
  return (
    <div className="App">
      <div css={divStyle}>Hover to change color.</div>
      <Test />
    </div>
  );
}

export default App;
