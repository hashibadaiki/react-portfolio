import React from "react";
import { HeroImage } from "main/HeroImg";
import { Portfolio } from "main/portfolio/Portfolio";
import { AboutMe } from "main/aboutMe/AboutMe";

export const Main = () => {
  return (
    <div>
      <HeroImage />
      <Portfolio />
      <AboutMe />
    </div>
  );
};
