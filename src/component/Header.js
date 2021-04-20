import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Header = () => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        
      } else {
        header.classList.remove("sticky");
        
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <div className="header" id="header">
      <div className="header__logo">
        <h2>
          <Link Link activeClass="active" to="hero" spy={true} smooth={true} duration={1000} offset={-100} > CM </Link>
        </h2>
      </div>
      <div>
        <div
          className={active ? "header__menu-btn active" : "header__menu-btn"}
          onClick={() => setActive(!active)}
        ></div>
        <div className={active ? "header__list__container active" : "header__list__container"} onClick={() => setActive(!active)}>
          <ul className="header__list" >
            <li className="header__list-item">
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000} offset={-95} className="header__list-link" onClick={() => setActive(!active)}>
                About Me  
              </Link>
            </li>
            <li className="header__list-item">
              <Link Link activeClass="active" to="project" spy={true} smooth={true} duration={1000} offset={-95} className="header__list-link" onClick={() => setActive(!active)} >
                Projects
              </Link>
            </li>
            <li className="header__list-item">
              <Link Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} offset={-40} className="header__list-link" onClick={() => setActive(!active)}>
                Skills
              </Link>
            </li>
            <li className="header__list-item" >
              <a className="header__list-link" href="#" onClick={() => setActive(!active)}>
                Contact
              </a>
            </li>
            <li className="header__list-item">
              <a className="header__list-link" href="#" onClick={() => setActive(!active)}>
                Item 5
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
