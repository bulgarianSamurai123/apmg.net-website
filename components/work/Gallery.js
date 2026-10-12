import React from "react";
import Section from "../UI/Section";
import LittleTitle from "../UI/LittleTitle";

const Gallery = ({ project }) => {
  return (
    <Section>
      <LittleTitle>Gallery</LittleTitle>
      <h2 className="h2Text">Screens</h2>

      {/* REMOVE THIS AND CONNECT IT TO THE JSON */}
      <div className="flex flex-row gap-5">
        <div className="bg-white-lilac text-waterloo px-80 py-32 rounded-3xl">[SCREENSHOT]</div>
        <div className="bg-white-lilac text-waterloo p-32 rounded-3xl">[MOBILE SCREENSHOT]</div>
      </div>
      {/* REMOVE THIS AND CONNECT IT TO THE JSON */}
    </Section>
  );
};

export default Gallery;
