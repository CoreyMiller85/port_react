import React from "react";
import PlaceHolderImg from "../img/PlaceHolderImg.jpeg";

const Project = (props) => {
  return (
    <div className="project">
      <div className="project__container">
        <div className="project__image">
          <img src={PlaceHolderImg} alt="" />
        </div>
        <div className="project__content">
          <h3 className="project__title">{props.title}</h3>
          <p className="project__desc">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
