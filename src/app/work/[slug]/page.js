import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectDesc from "../../../../components/work/ProjectDesc";
import BackArrow from "../../../../public/assets/backArrow";
import ChallangeSolution from "../../../../components/work/Challange&Solution";

import { projects } from "../../../../helpers/projects";
import Gallery from "../../../../components/work/Gallery";
import Result from "../../../../components/work/Result";

async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div>
      <Link
        href={"/work"}
        className="flex flex-row gap-2 text-acccent-color font-bold text-base items-center pb-5"
      >
        <BackArrow className="m-0 p-0 w-5 h-5 fill-acccent-color" />
        <p>Back to all work</p>
      </Link>
      <ProjectDesc project={project}/>
      <ChallangeSolution project={project} />
      <Gallery project={project} />
      <Result project={project} />
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default ProjectPage;
