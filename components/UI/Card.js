import React from "react";

const Card = ({ title, description, icon }, props) => {
  return <div>
    <div className="flex flex-col gap-3 p-7 bg-card-white-color rounded-3xl w-80 h-60 border border-card-border-color">
      <div className="bg-acccent-color text-card-white-color w-12 h-12 stroke-card-white-color fill-none p-2.5 rounded-xl">
        {icon}
      </div>
      <h3 className="h3Text">{title}</h3>
      <p className="h3SubText">{description}</p>
    </div>
  </div>;
};

export default Card;
