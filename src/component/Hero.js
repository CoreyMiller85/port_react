import React from "react";
import Particles from "react-particles-js";

const Hero = () => {
  return (
    <div className="hero">
      <Particles
        className="hero__particles"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#39FF14",
            },
            opacity: {
              value: 1,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              opacity: 0.4,
              color: "#39FF14",
            },
          },
         
        }}
      />
      <div className="hero__contents">
        <h1 className="hero__title">Corey Miller</h1>
        <h3 className="hero__title-sub">Web Developer</h3>
        <p className="hero__sub">React, Wordpress, Javascript, Php</p>
        <div className="hero__button-div">
          <a className="btn" href="#">
            See My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
