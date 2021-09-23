import classes from "./navbar.module.scss";
import SwiggyLogo from "../../assets/images/swiggylogo.svg";
import {
  SearchIcon,
  GiftIcon,
  SupportIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
  XIcon
} from "@heroicons/react/outline";

import { MENU_ITEMS } from "../../constants/navbar";

import React, { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClasses = isMenuOpen ? classes.navbarmenuopen : classes.navbarmenu;
  return (
    <>
      <div className={`${classes.navbar}`}>
        <div className={classes.logowrap}>
          <img src={SwiggyLogo} alt="Swiggy Logo"></img>
        </div>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className={`${classes.icon} ${classes.hamburger}`}
        >
          <MenuIcon />
        </div>
        <div className={menuClasses}>
          {isMenuOpen && (
            <div
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`${classes.icon} ${classes.hamburgerclose} `}
            >
              <XIcon />
            </div>
          )}
          {MENU_ITEMS.map((eachMenuItem) => {
            const IconComponent = eachMenuItem.icon;
            return (
              <div className={`${classes.icon} `}>
                <div>
                  {<IconComponent />}
                  {eachMenuItem.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
