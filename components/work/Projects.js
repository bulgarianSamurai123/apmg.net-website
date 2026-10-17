import React from "react";
import LittleTitle from "../UI/LittleTitle";
import ProductCard from "../UI/ProductCard";

import { projects } from "../../helpers/projects";

const Projects = () => {
  return (
    <div className="flex flex-col gap-3">
      <LittleTitle>Portfolio</LittleTitle>
      <h1 className="h1Text">Selected Projects</h1>
      <p className="pText">Problem, solution and result for each build.</p>
      <div className="grid grid-cols-4 gap-3">
        {projects.map((project) => (
          <ProductCard
            key={project.id}
            name={project.title}
            client={project.client}
            tech={project.tech}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
