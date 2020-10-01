import React from "react";
import { HeroImage } from "src/scripts/Main/HeroImage";
import { Portfolio } from "src/scripts/Main/Portfolio";
import { AboutMe } from "src/scripts/Main/AboutMe";

export const Main = () => {
  return (
    <div>
      <HeroImage />
      <Portfolio />
      <AboutMe />
    </div>
  );
};
