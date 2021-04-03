import React from "react";
import "../sass/Hero.scss";
import Particles from "react-particles-js";

const Hero = () => {
  return (
    <div className="hero">
      <Particles
        className="hero__particles"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#39FF14",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 12,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            line_linked: {
              enable: false
          },
          },
        }}
      />
      <div className="hero__contents">
        <h1 className="hero__title">Corey Miller</h1>
        <h3 className="hero__title-sub">Web Developer</h3>
        <p className="hero__sub">React, Wordpress, Javascript, Php</p>
        <a className="btn" href="#">
          See My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
