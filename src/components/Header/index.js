import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo ">Zan.in</h1>
      <nav>
        <ul>
          <li>
            <a href="www.google.com">Home</a>
          </li>
          <li>
            <a href="www.google.com">Perfil</a>
          </li>
          <li>
            <a href="www.google.com">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
