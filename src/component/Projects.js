import React, { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "test title 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eveniet eos animi accusantium aperiam libero dignissimos consequatur facere repellat praesentium?",
    },
    {
      title: "test title 2",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nisi vel autem dolorum vitae blanditiis tempore quo ea modi quis.",
    },
    {
      title: "test title 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eveniet eos animi accusantium aperiam libero dignissimos consequatur facere repellat praesentium?",
    },
    {
      title: "test title 4",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nisi vel autem dolorum vitae blanditiis tempore quo ea modi quis.",
    },
  ]);
  const proList = projects.map((p) => {
    return <Project title={p.title} desc={p.desc} />;
  });
  return (
    <div className="projects">
      <div className="projects__title">
        <h3 className="projects__title-h3">Projects</h3>
      </div>
      {proList}
    </div>
  );
};

export default Projects;
