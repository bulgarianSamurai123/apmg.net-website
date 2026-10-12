import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";
import Card from "../UI/Card";

import { technologiesHelper } from "../../helpers/helperCard";

const Technologies = () => {
  return (
    <Section>
      <LittleTitle>Stack</LittleTitle>
      <h2 className="h2Text">Technologies</h2>
      <div className="grid grid-cols-4 gap-5">
        {technologiesHelper.map((tech) => (
          <Card
            key={tech.id}
            title={tech.title}
            description={tech.description}
            icon={tech.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default Technologies;
