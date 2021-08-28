import classes from "./navbar.module.scss";
import SwiggyLogo from "../../assets/images/swiggylogo.svg";
import {
  SearchIcon,
  GiftIcon,
  SupportIcon,
  UserIcon,
  ShoppingBagIcon
} from "@heroicons/react/outline";

export const Navbar = () => {
  return (
    <>
      <div className={`${classes.navbar}`}>
        <div className={classes.logowrap}>
          <img src={SwiggyLogo} alt="Swiggy Logo"></img>
        </div>
        <div className={classes.navbarmenu}>
          <div className={classes.icon}>
            <SearchIcon />
            Search
          </div>
          <div className={classes.icon}>
            <GiftIcon />
            Offers
          </div>
          <div className={classes.icon}>
            <SupportIcon />
            Help
          </div>
          <div className={classes.icon}>
            <UserIcon />
            Sign In
          </div>
          <div className={classes.icon}>
            <ShoppingBagIcon />
            Cart
          </div>
        </div>
      </div>
    </>
  );
};
