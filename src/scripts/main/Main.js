import React from "react";
import { HeroImage } from "src/scripts/main/HeroImg";
import { Portfolio } from "src/scripts/main/portfolio/Portfolio";
import { AboutMe } from "src/scripts/main/aboutMe/AboutMe";

export const Main = () => {
  return (
    <div>
      <HeroImage />
      <Portfolio />
      <AboutMe />
    </div>
  );
};
