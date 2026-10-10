import React from "react";
import Button, { LightButton } from "../Button";

const HeroPage = () => {
  return (
    <div className="flex flex-col justify-baseline gap-6">
      <div>
        <p className="bg-light-acccent-color text-accent-text-color px-3.5 py-2 ">
          Freelance engineering firm
        </p>
      </div>
      <h1 className="headerText">Software built by people who ship.</h1>
      <p className="subText">
        APMG.NET delivers software, front-end, back-end, full-stack and AI
        projects for companies that need extra engineering power.
      </p>
      <div>
        <Button>Start a project</Button>
        <LightButton>View our work</LightButton>
      </div>
    </div>
  );
};

export default HeroPage;
