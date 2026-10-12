import React from "react";
import LittleTitle from "../UI/LittleTitle";
import Section from "../UI/Section";

const Work = () => {
  return (
    <Section>
      <LittleTitle>Work</LittleTitle>
      <h2 className="h2Text">Recent Projects</h2>
      <div className="flex flex-row">
        {/* Remove when u have idea for projects */}
        <div className="flex flex-col gap-3 bg-card-white-color p-7 rounded-2xl">
          <p className="self-start bg-white-lilac text-waterloo px-10 py-16 rounded-2xl">
            [Project Image]
          </p>

          <h3 className="h3Text">[Project name]</h3>
          <p className="h3SubText">[Client type] · [Tech used]</p>
        </div>
        {/* Remove when u have idea for projects */}
      </div>
    </Section>
  );
};

export default Work;
