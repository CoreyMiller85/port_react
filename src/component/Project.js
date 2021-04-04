import React from "react";

const Project = (props) => {
  return (
    <div className="project">
      <div className="project__image">Image</div>
      <div className="project__content">
        <h3 className="project__title">{props.title}</h3>
        <p className="project__desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default Project;
