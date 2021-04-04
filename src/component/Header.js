import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h2><a href="#"> Portfolio </a></h2>
      </div>
      <div className="header__menu-btn">
      +
      </div>
      <div>
        <ul className="header__list">
          <li className="header__list-item"><a className="header__list-link" href="#">Item 1</a></li>
          <li className="header__list-item"><a className="header__list-link" href="#">Item 2</a></li>
          <li className="header__list-item"><a className="header__list-link" href="#">Item 3</a></li>
          <li className="header__list-item"><a className="header__list-link" href="#">Item 4</a></li>
          <li className="header__list-item"><a className="header__list-link" href="#">Item 5</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;