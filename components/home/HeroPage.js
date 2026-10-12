import React from "react";
import Button, { LightButton } from "../UI/Button";
import LittleTitle from "../UI/LittleTitle";

const HeroPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <LittleTitle>Freelance engineering firm</LittleTitle>
      <h1 className="h1Text">Software built by people who ship.</h1>
      <p className="pText w-2xl">
        APMG.NET delivers software, front-end, back-end, full-stack and AI
        projects for companies that need extra engineering power.
      </p>
      <div className="flex gap-3 pt-3">
        <Button>Start a project</Button>
        <LightButton>View our work</LightButton>
      </div>
    </div>
  );
};

export default HeroPage;
