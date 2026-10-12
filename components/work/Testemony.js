import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";

const Testemony = ({ project }) => {
  return (
    <Section>
      <LittleTitle>Feedback</LittleTitle>
      <h2 className="h2Text">Client words</h2>
      <div className="bg-card-white-color border border-card-border-color rounded-3xl p-10">
        <h3 className="font-sora font-bold text-2xl">{`"${project.testemony}"`}</h3>
        <p className="pt-5 font-jakarta-sans font-normal text-[15px] text-body-text-color">{`${project.clientName}, ${project.clientRole} at ${project.clientCompany}`}</p>
      </div>
    </Section>
  );
};

export default Testemony;
