import React from "react";
import { NavLink } from "react-router-dom";
import css from "./header.module.css";

function Header(props) {
  return (
    <header className={css.header}>
      <div className={css.loginBlok}>
        {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
        
      </div>
      <img src="https://w7.pngwing.com/pngs/813/735/png-transparent-bird-of-prey-logo-beak-desktop-bird-animals-computer-logo.png" />
    </header>
  );
}

export default Header;
