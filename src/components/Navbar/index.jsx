import classes from "./navbar.module.scss";
import SwiggyLogo from "../../assets/images/swiggylogo.svg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { SideDrawer } from "../../components/Shared/SideDrawer";
import { MENU_ITEMS } from "../../constants/navbar";

import React, { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsOpenLocation] = useState(false);
  const menuClasses = isMenuOpen ? classes.navbarmenuopen : classes.navbarmenu;
  return (
    <>
      <div className={`${classes.navbar}`}>
        <div className={classes.logowrap}>
          <img src={SwiggyLogo} alt="Swiggy Logo"></img>
        </div>
        <div
          onClick={() => {
            setIsOpenLocation(true);
          }}
          className={classes.location}
        >
          <span>Chennai</span>
          <span> </span>
          <span>TamilNadu,India</span>
          <i className="margin-left-half fas fa-chevron-down"></i>
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
          {MENU_ITEMS.map((eachMenuItem, index) => {
            const IconComponent = eachMenuItem.icon;
            return (
              <div
                key={eachMenuItem.title + index}
                className={`${classes.icon} `}
              >
                <div>
                  {<IconComponent />}
                  {eachMenuItem.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SideDrawer
        isOpen={isLocationOpen}
        onClose={() => {
          setIsOpenLocation(false);
        }}
      >
        <div className="">
          <input
            pattern="^[a-zA-Z]+"
            placeholder="Search for city name..."
            type="search"
          ></input>
        </div>
      </SideDrawer>
    </>
  );
};
