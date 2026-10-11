import React from "react";
import BgIcon from "./BgIcons";

import Code from "../../public/assets/apmg-icons/code";
import Git from "../../public/assets/apmg-icons/git";
import Chip from "../../public/assets/apmg-icons/chip";
import DB from "../../public/assets/apmg-icons/db";
import Term from "../../public/assets/apmg-icons/term";
import Bolt from "../../public/assets/apmg-icons/bolt";
import Brain from "../../public/assets/apmg-icons/brain";
import Cloud from "../../public/assets/apmg-icons/cloud";
import Win from "../../public/assets/apmg-icons/win";

const BackroundIcons = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <BgIcon className="left-[4%] top-20 hidden md:block">
        <Code className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none" />
      </BgIcon>
      <BgIcon className="right-[5%] top-56 hidden md:block">
        <Git className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none rotate-[25deg]" />
      </BgIcon>
      <BgIcon className="left-[40%] top-80 hidden md:block">
        <Chip className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none rotate-[-10deg]" />
      </BgIcon>
      <BgIcon className="right-[30%] top-[20%] hidden md:block">
        <DB className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none" />
      </BgIcon>
      <BgIcon className="left-[20%] top-[23%] hidden md:block">
        <Term className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none" />
      </BgIcon>
      <BgIcon className="right-[5%] top-[32%] hidden md:block">
        <Chip className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none rotate-[10deg]" />
      </BgIcon>
      <BgIcon className="left-[50%] top-[40%] hidden md:block">
        <Bolt className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none rotate-[-8deg]" />
      </BgIcon>
      <BgIcon className="left-[15%] top-[45%] hidden md:block">
        <Brain className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none rotate-[10deg]" />
      </BgIcon>
      <BgIcon className="right-[15%] top-[50%] hidden md:block">
        <Cloud className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none" />
      </BgIcon>
      <BgIcon className="left-[20%] top-[65%] hidden md:block">
        <Win className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none" />
      </BgIcon>
      <BgIcon className="right-[20%] top-[69%] hidden md:block">
        <Git className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none rotate-[-12deg]" />
      </BgIcon>
      <BgIcon className="left-[30%] top-[81%] hidden md:block">
        <DB className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none" />
      </BgIcon>
      <BgIcon className="left-[10%] top-[93%] hidden md:block">
        <Code className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none" />
      </BgIcon>
      <BgIcon className="right-[3%] top-[91%] hidden md:block">
        <Brain className="h-20 w-20 text-accent-text-color stroke-accent-text-color fill-none rotate-[10deg]" />
      </BgIcon>
    </div>
  );
};

export default BackroundIcons;
