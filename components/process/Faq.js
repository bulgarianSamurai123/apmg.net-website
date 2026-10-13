import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";

const Faq = () => {
  return (
    <Section>
      <LittleTitle>FAQ</LittleTitle>
      <h1 className="h2Text">Commong Questions</h1>
      <div className="flex flex-row gap-5">
        <div className="bg-card-white-color border border-card-border-color rounded-3xl p-7 w-64">
          <p className="font-sora font-bold text-[19px] text-text-color">How long does a project take?</p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">[YOUR ANSWER]</p>
        </div>
        <div className="bg-card-white-color border border-card-border-color rounded-3xl p-7 w-64">
          <p className="font-sora font-bold text-[19px] text-text-color">Who owns the code?</p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">[YOUR ANSWER]</p>
        </div>
        <div className="bg-card-white-color border border-card-border-color rounded-3xl p-7 w-64">
          <p className="font-sora font-bold text-[19px] text-text-color">Do you sign NDAs?</p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">[YOUR ANSWER]</p>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
