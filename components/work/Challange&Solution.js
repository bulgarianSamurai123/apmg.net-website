import React from "react";
import LittleTitle from "../UI/LittleTitle";
import Section from "../UI/Section";

const ChallangeSolution = ({ project }) => {
  return (
    <Section>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col bg-card-white-color border border-card-border-color p-7 w-80 rounded-3xl">
          <LittleTitle>The challange</LittleTitle>

          <h3 className="h3Text pt-3 pb-3">What the client needed</h3>
          <p className="h3SubHeading">{project.clientNeeded}</p>
        </div>
        <div className="flex flex-col bg-card-white-color border border-card-border-color p-7 w-80 rounded-3xl">
          <LittleTitle>Our Solution</LittleTitle>

          <h3 className="h3Text pt-3 pb-3">What we built</h3>
          <p className="h3SubHeading">{project.weProvided}</p>
        </div>
      </div>
    </Section>
  );
};

export default ChallangeSolution;
