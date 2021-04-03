import React from 'react';
import "../sass/Hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Corey Miller</h1>
      <h3 className="hero__title-sub">Web Developer</h3>
      <p className="hero__sub">React, Wordpress, Javascript, Php</p>
      <a className="btn" href="#">See My Work</a>
    </div>
  )
}

export default Hero;