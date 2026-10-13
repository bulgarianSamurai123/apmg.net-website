import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";
import { team } from "../../helpers/team";

const Team = () => {
  return (
    <Section>
      <LittleTitle>Team</LittleTitle>
      <h2 className="h2Text">The people</h2>
      <div className="grid grid-cols-5 gap-5">
        {team.map((person) => (
          <div key={person.id} className="bg-card-white-color border border-card-border-color p-7 rounded-3xl w-64">
            <p className="font-sora font-bold text-[19px] text-text-color">{person.name}</p>
            <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">{person.role}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
