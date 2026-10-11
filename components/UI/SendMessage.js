import React from "react";
import Section from "./Section";
import Button from "./Button";

const SendMessage = () => {
  return (
    <Section>
      <div className="m-0 p-14 bg-text-color rounded-4xl flex flex-col gap-5">
        <h2 className="font-sora text-white-lilac text-4xl font-bold">
          Have a project in mind?
        </h2>
        <p className="font-jakarta-sans text-lavander-gray text-lg">
          Tell us what you need built. We reply within 24 hours.
        </p>
        <div>
          <Button>Get a free quote</Button>
        </div>
      </div>
    </Section>
  );
};

export default SendMessage;
