import React from "react";
import { NavLink } from "react-router-dom";
import css from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={css.nav}>
      <div className={`${css.active} ${css.item}`}>
        <NavLink  to={"/profile/"} className={navData => (navData.isActive ? css.active : css.item)}>Profile</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to={"/friends"} className={navData => (navData.isActive ? css.active : css.item)}>Friends</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to={"/dialogs"} className={navData => (navData.isActive ? css.active : css.item)}>Dialogs</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to={"/users"} className={navData => (navData.isActive ? css.active : css.item)}>Users</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to={"/settings"} className={navData => (navData.isActive ? css.active : css.item)}>Settings</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to={"/login"} className={navData => (navData.isActive ? css.active : css.item)}>Login</NavLink>
      </div>
      <div className={css.item}>
        <NavLink to={"/exit"} className={navData => (navData.isActive ? css.active : css.item)}>Exit</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
