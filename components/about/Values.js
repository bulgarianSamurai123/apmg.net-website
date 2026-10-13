import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";
import Bolt from "../../public/assets/apmg-icons/bolt";
import Code from "../../public/assets/apmg-icons/code";
import Term from "../../public/assets/apmg-icons/term";

const Values = () => {
  return (
    <Section>
      <LittleTitle>Values</LittleTitle>
      <h2 className="h2Text">How we work</h2>
      <div className="flex flex-row gap-12">
        <div className="bg-card-white-color border border-card-white-color p-7 rounded-3xl w-64">
          <div className="bg-acccent-color text-card-white-color w-12 h-12 stroke-card-white-color fill-none p-2.5 rounded-xl">
            <Bolt />
          </div>
          <p className="font-sora font-bold text-[19px] text-text-color pt-3">
            Honest estimation
          </p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">
            The real timeline.
          </p>
        </div>
        <div className="bg-card-white-color border border-card-white-color p-7 rounded-3xl w-64">
          <div className="bg-acccent-color text-card-white-color w-12 h-12 stroke-card-white-color fill-none p-2.5 rounded-xl">
            <Code />
          </div>
          <p className="font-sora font-bold text-[19px] text-text-color pt-3">
            Clean code
          </p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">
            Documented and maintainable.
          </p>
        </div>
        <div className="bg-card-white-color border border-card-white-color p-7 rounded-3xl w-64">
          <div className="bg-acccent-color text-card-white-color w-12 h-12 stroke-card-white-color fill-none p-2.5 rounded-xl">
            <Term />
          </div>
          <p className="font-sora font-bold text-[19px] text-text-color pt-3">
            Clear updates
          </p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">
            Always in the loop.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Values;
