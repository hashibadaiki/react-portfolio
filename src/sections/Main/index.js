import React from "react";
import { HeroImage } from "src/sections/Main/HeroImage";
import { Portfolio } from "src/sections/Main/Portfolio";
import { AboutMe } from "src/sections/Main/AboutMe";

export const Main = () => {
  return (
    <div>
      <HeroImage />
      <Portfolio />
      <AboutMe />
    </div>
  );
};
