import React from "react";
import css3 from "../img/css-3.svg";
import gulp from "../img/gulp.svg";
import htmlIcon from "../img/html-5.svg";
import javascriptIcon from "../img/javascript.svg";
import nodejsIcon from "../img/nodejs-icon.svg";
import reactIcon from "../img/react.svg";
import reduxIcon from "../img/redux.svg";
import sassIcon from "../img/sass.svg";
import wordPressIcon from "../img/wordpress-icon.svg";

const Skills = () => {
  return (
    <div className="skills" id='skills'>
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__logos">
          <img src={htmlIcon} alt="" />
          <img src={css3} alt="" />
          <img src={javascriptIcon} alt="" />
          <img src={reactIcon} alt="" />
          <img src={nodejsIcon} alt="" />
          <img src={gulp} alt="" />
          <img src={reduxIcon} alt="" />
          <img src={sassIcon} alt="" />
          <img src={wordPressIcon} alt="" />
        </div>
        <ul className="skills__list">
          <li className="skills__list__item">HTML5</li>
          <li className="skills__list__item">CSS3</li>
          <li className="skills__list__item">JavaScript</li>
          <li className="skills__list__item">Node</li>
          <li className="skills__list__item">React</li>
          <li className="skills__list__item">Redux</li>
          <li className="skills__list__item">WordPress</li>
          <li className="skills__list__item">Sass</li>
          <li className="skills__list__item">Gulp</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
