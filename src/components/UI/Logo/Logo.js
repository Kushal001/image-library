import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <NavLink to="/">
        <p className={classes.text}>Add Pictures</p>
        <div className={classes.circle}></div>
      </NavLink>
    </div>
  );
};

export default Logo;
