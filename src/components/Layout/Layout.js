import { Fragment } from "react";
import classes from "./Layout.module.css";
import { NavLink } from "react-router-dom";

// components
import Logo from "../UI/Logo/Logo";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <nav className={classes.navigation}>
          <Logo />
          <ul>
            <li>
              <NavLink to="/saved-images">Saved</NavLink>
            </li>

            <li>
              <NavLink to="/new-image" className={classes["new-image-link"]}>
                Add Image
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
