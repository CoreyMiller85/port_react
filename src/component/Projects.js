import React, { useState } from "react";
import Project from './Project'
import "../sass/Projects.scss"

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "test title 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis repellendus dolore voluptatem neque ipsa consequatur voluptatibus quia expedita asperiores possimus itaque harum, deleniti dolores tempore inventore tempora! Nihil assumenda similique facilis commodi qui voluptatem porro veniam dolores repudiandae temporibus nam vitae accusantium aut debitis, expedita rem quaerat laudantium quisquam. Nemo?"
    },
    {
      title: "test title 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis repellendus dolore voluptatem neque ipsa consequatur voluptatibus quia expedita asperiores possimus itaque harum, deleniti dolores tempore inventore tempora! Nihil assumenda similique facilis commodi qui voluptatem porro veniam dolores repudiandae temporibus nam vitae accusantium aut debitis, expedita rem quaerat laudantium quisquam. Nemo?"
    },
    {
      title: "test title 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis repellendus dolore voluptatem neque ipsa consequatur voluptatibus quia expedita asperiores possimus itaque harum, deleniti dolores tempore inventore tempora! Nihil assumenda similique facilis commodi qui voluptatem porro veniam dolores repudiandae temporibus nam vitae accusantium aut debitis, expedita rem quaerat laudantium quisquam. Nemo?"
    },
    {
      title: "test title 4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis repellendus dolore voluptatem neque ipsa consequatur voluptatibus quia expedita asperiores possimus itaque harum, deleniti dolores tempore inventore tempora! Nihil assumenda similique facilis commodi qui voluptatem porro veniam dolores repudiandae temporibus nam vitae accusantium aut debitis, expedita rem quaerat laudantium quisquam. Nemo?"
    },
  ]);
  const proList = projects.map((p) => {
    return <Project title={p.title} desc={p.desc}/>;
  });
  return <div className="projects">{proList}</div>;
};

export default Projects;
