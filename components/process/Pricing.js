import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";

const Pricing = () => {
  return (
    <Section>
      <LittleTitle>Pricing</LittleTitle>
      <h2 className="h2Text">Engagement models</h2>
      <div className="flex flex-row gap-5">
        <div className="bg-card-white-color border border-card-border-color rounded-3xl p-7 w-64">
          <p className="font-sora font-bold text-[19px] text-text-color">Fixed Price</p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">[YOUR PRICE] per project</p>
        </div>
        <div className="bg-card-white-color border border-card-border-color rounded-3xl p-7 w-64">
          <p className="font-sora font-bold text-[19px] text-text-color">Hourly</p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">[YOUR RATE] hourly</p>
        </div>
        <div className="bg-card-white-color border border-card-border-color rounded-3xl p-7 w-64">
          <p className="font-sora font-bold text-[19px] text-text-color">Retainer</p>
          <p className="font-jakarta-sans font-normal text-[15px] text-body-text-color">[YOUR PRICE] per month</p>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
