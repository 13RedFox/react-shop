import React from 'react';

function Header() {
  return (
    <nav className="blue lighten-2">
      <div className="nav-wrapper">
        <a href="https://13redfox.github.io/react-shop/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/13RedFox/react-shop" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
