import React from "react";
import Card from "../UI/Card";

import { weBuildHelper } from "../../helpers/helperCard.js";
import LittleTitle from "../UI/LittleTitle";
import Section from "../UI/Section";

const WeBuild = () => {
  return (
    <Section>
      <LittleTitle>Services</LittleTitle>
      <h1 className="subHeader">What we build</h1>
      <div className="grid grid-cols-4 gap-5">
        {weBuildHelper.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default WeBuild;
