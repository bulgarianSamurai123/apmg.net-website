import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";

const TechUsed = ({ project }) => {
  return (
    <Section>
      <LittleTitle>Tech stack</LittleTitle>
      <h2 className="h2Text">Built with</h2>
      <div className="flex flex-row gap-5">
        {project.buildWith.map((tech) => (
          <div
            key={tech.id}
            className="bg-card-white-color border border-card-border-color px-7 py-3.5 rounded-full"
          >
            <p className="font-jakarta-sans font-semibold text-[15px]">
              {tech.stack}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechUsed;
