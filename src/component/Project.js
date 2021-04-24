import React from "react";
import PlaceHolderImg from "../img/PlaceHolderImg.jpeg";
import GithubBtn from "./GithubBtn";
import LiveBtn from "./LiveBtn";

const Project = (props) => {
  return (
    <div className="project" id="project">
      <div className="project__container">
        <div
          className="project__image"
          style={{ backgroundImage: `url(${PlaceHolderImg})` }}
        ></div>
        <div className="project__content">
          <h3 className="project__title">{props.title}</h3>
          <p className="project__desc">{props.desc}</p>
          <div className="project__link-btn">
            <GithubBtn />
            <LiveBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
