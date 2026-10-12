import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";

const HeroPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <LittleTitle>Services</LittleTitle>
      <h1 className="h1Text">Engeneering for every layer</h1>
      <p className="pText w-2xl">Hire us for one task or the whole project.</p>
    </div>
  );
};

export default HeroPage;
