import React from "react";
import LittleTitle from "../UI/LittleTitle";
import Button, { LightButton } from "../UI/Button";
import UpRightArrow from "../../public/assets/upRighArrow";

const ProjectDesc = ({ project }) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <LittleTitle>Case study · [Category]</LittleTitle>

      <h1 className="h1Text">{project.title}</h1>
      <p className="pText">{project.description}</p>
      <div className="flex flex-row gap-3">
        <Button>
          <div className="flex flex-row gap-1 items-center">
            <p>Visit live site</p>{" "}
            <UpRightArrow className="w-5 h-5 stroke-card-white-color text-card-white-color" />
          </div>
        </Button>
        <LightButton>View code</LightButton>
      </div>

      <div className="flex mt-8 bg-white-lilac h-100 items-center justify-center rounded-3xl">
        <p className="pText">[Main Project Screenshot]</p>
      </div>

      <div className="mt-5 flex flex-row bg-card-white-color border border-card-border-color rounded-3xl p-7 justify-between">
        <div>
          <p className="font-jakarta-sans text-[15px] font-normal text-waterloo">
            Client
          </p>
          <h3 className="font-jakarta-sans text-[17px] font-bold text-text-color">
            {project.client}
          </h3>
        </div>
        <div>
          <p className="font-jakarta-sans text-[15px] font-normal text-waterloo">
            Industry
          </p>
          <h3 className="font-jakarta-sans text-[17px] font-bold text-text-color">
            {project.industry}
          </h3>
        </div>
        <div>
          <p className="font-jakarta-sans text-[15px] font-normal text-waterloo">
            Timeline
          </p>
          <h3 className="font-jakarta-sans text-[17px] font-bold text-text-color">
            {project.timeline}
          </h3>
        </div>
        <div>
          <p className="font-jakarta-sans text-[15px] font-normal text-waterloo">
            Services
          </p>
          <h3 className="font-jakarta-sans text-[17px] font-bold text-text-color">
            {project.services}
          </h3>
        </div>
        <div>
          <p className="font-jakarta-sans text-[15px] font-normal text-waterloo">
            Year
          </p>
          <h3 className="font-jakarta-sans text-[17px] font-bold text-text-color">
            {project.year}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;
