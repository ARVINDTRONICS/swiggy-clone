import classes from "./navbar.module.scss";
import SwiggyLogo from "../../assets/images/swiggylogo.svg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchBar } from "../Shared/SearchBar";
import { SideDrawer } from "../../components/Shared/SideDrawer";
import { MENU_ITEMS } from "../../constants/navbar";

import firebase from "../../config/firebase";
import React, { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState({
    open: false,
    direction: "left",
    component: ""
  });

  const menuClasses = isMenuOpen ? classes.navbarmenuopen : classes.navbarmenu;
  const SideDrawerChild = isSideDrawerOpen.component;

  const handleNavBar = (title) => {
    if (title === "Sign In") {
      setIsSideDrawerOpen({
        open: true,
        direction: "right",
        component: LoginForm
      });
    } else if (title === "Search") {
      setIsSideDrawerOpen({
        open: true,
        direction: "left",
        component: SearchBar
      });
    }
  };

  return (
    <>
      <div className={`${classes.navbar}`}>
        <div className={classes.logowrap}>
          <img src={SwiggyLogo} alt="Swiggy Logo"></img>
        </div>
        <div
          onClick={() => {
            setIsSideDrawerOpen({
              open: true,
              direction: "left",
              component: SearchBar
            });
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
                <div
                  onClick={() => {
                    handleNavBar(eachMenuItem.title);
                  }}
                  className={classes.iconWrap}
                >
                  {<IconComponent />}
                  {eachMenuItem.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isSideDrawerOpen.open && (
        <SideDrawer
          isOpen={isSideDrawerOpen.open}
          onClose={() => {
            setIsSideDrawerOpen({ open: false, direction: "left" });
          }}
          direction={isSideDrawerOpen.direction}
        >
          <SideDrawerChild />
        </SideDrawer>
      )}
    </>
  );
};

const LoginForm = () => {
  console.log("hereeee");
  const [isOtpSent, setisOtpSent] = useState(false);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal"
      }
    );
  };

  const submitPhoneNumberAuth = async (e) => {
    e.preventDefault();

    console.log(e);
    const phoneNumber = `+91${e.target[0].value}`;

    console.log(phoneNumber);
    configureCaptcha();

    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        setisOtpSent(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const submitOTP = (e) => {
    e.preventDefault();
    window.confirmationResult
      .confirm(e.target[0].value)
      .then((result) => {
        // User signed in successfully.
        // ...

        window.alert("verified");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <div className={classes.loginForm}>
      <div className={classes.loginHeader}>
        <h1>Login</h1>
        <div>
          <img
            width="100px"
            height="100px"
            alt="login"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          ></img>
        </div>
      </div>

      <div className={classes.loginInput}>
        {!isOtpSent ? (
          <form
            className={classes.loginSubmit}
            onSubmit={(e) => {
              submitPhoneNumberAuth(e);
            }}
          >
            <input
              type="tel"
              id="phone"
              placeholder="Enter 10 digit mobile number"
              name="phone"
              pattern="[1-9]{1}[0-9]{9}"
              required
            />
            <button type="submit">LOGIN</button>
          </form>
        ) : (
          <form
            className={classes.loginSubmit}
            onSubmit={(e) => {
              submitOTP(e);
            }}
          >
            <input
              type="tel"
              id="otp"
              placeholder="Enter OTP to Verify"
              name="otp"
              pattern="[0-9]{6}"
              maxlength="6"
              required
            />
            <button type="submit">VERIFY</button>
          </form>
        )}
      </div>

      <div id="recaptcha-container"></div>
    </div>
  );
};
