import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";

const Result = ({ project }) => {
  return (
    <Section>
      <LittleTitle>Results</LittleTitle>
      <h2 className="h2Text">What Changed</h2>
      <div className="flex flex-row gap-5">
        {project.improvements.map((improvment) => (
          <div
            key={improvment.id}
            className="p-7 rounded-3xl bg-card-white-color border border-card-border-color"
          >
            <h2 className="font-sora font-bold text-5xl text-acccent-color">
              {`${improvment.procent}%`}
            </h2>
            <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">
              {improvment.result}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Result;
