import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";
import { workFlowHelper } from "../../helpers/helperCard";
import Card from "../UI/Card";

const WeWork = () => {
  return (
    <Section>
      <LittleTitle>Steps</LittleTitle>
      <h2 className="h2Text">How we work</h2>
      <div className="grid grid-cols-4 gap-5">
        {workFlowHelper.map((work) => (
          <Card
            key={work.id}
            title={work.title}
            description={work.description}
            icon={work.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default WeWork;
