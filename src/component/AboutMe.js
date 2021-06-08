import React from "react";
import treehouse from "../img/treehouse-seeklogo.com.svg"
import techDegree from '../img/tech-degree-logo.png'

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about__card">
        <div className="about__content">
          <h3 className="about__content__title">What I can do for you...</h3>
          <p className="about__content__desc">
          I am a full-stack software developer with 3 years of experience, developing projects for the web. I have made splash screens to full applications with custom backends. I have completed Team TreeHouse's Tech Degree program for full-stack development. This was a 6 month long journey of learning the best practices and thought behind the current JavaScript frameworks and workflows. This program gave me strong skills in HTML, CSS, and Javascript with the ability to think through issues and come up with thoughful and maintable solutions. I have furthered this knownledge on my own through experiance and study branching into React, Redux, Mongo, and SQL. 
            What I can bring to the table for you would be: 
            <ul>
              <li>A Strong willingness to learn and grow as a developer</li>
              <li>Creating well thought out and maintainable code</li>
              <li>A strong knowledge in React, with a deep backbone in Functional JavaScript.</li>
              <li>Careful use of CI/CD systems.</li>
              <li>the use of best practices</li>
            </ul>
          </p>
          <img src={treehouse} alt="" />
          <img src={techDegree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
