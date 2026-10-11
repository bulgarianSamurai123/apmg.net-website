import React from "react";
import HeroPage from "../../components/home/HeroPage";
import WeBuild from "../../components/home/WeBuild";
import Work from "../../components/home/Work";
import Process from "../../components/home/Process";
import SendMessage from "../../components/UI/SendMessage";

const HomePage = () => {
  return (
      <div>
         <HeroPage />
         <WeBuild />
         <Work />
         <Process />
         <SendMessage />
      </div>
  );
};

export default HomePage;
