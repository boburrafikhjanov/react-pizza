import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.svg';
import { CartIcon } from './svg';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img width="38" src={Logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
