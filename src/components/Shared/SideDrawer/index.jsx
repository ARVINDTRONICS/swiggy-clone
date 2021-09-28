import React from "react";
import classes from "./sidedrawer.module.scss";
import { XIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
export const SideDrawer = ({ isOpen, direction, onClose, children }) => {
  let sideDrawerClass = "";
  if (direction === "left") {
    sideDrawerClass = isOpen
      ? classes.sideDrawerOpenLeft
      : classes.sideDrawerLeft;
  } else if (direction === "right") {
    sideDrawerClass = isOpen
      ? classes.sideDrawerOpenRight
      : classes.sideDrawerRight;
  }
  console.log(sideDrawerClass);
  return (
    <div className={classes.sideDrawerWrap}>
      <div className={sideDrawerClass} v>
        <div
          onClick={() => {
            onClose();
          }}
          className={"icon"}
        >
          <XIcon />
        </div>
        {children}
      </div>
      {isOpen && (
        <div
          onClick={() => {
            onClose();
          }}
          className={`${
            direction === "left"
              ? classes.sideDrawerOverlayLeft
              : classes.sideDrawerOverlayRight
          }`}
        ></div>
      )}
    </div>
  );
};
SideDrawer.defaultProps = {
  direction: "left"
};
SideDrawer.propTypes = {
  isOpen: PropTypes.bool,
  direction: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

export default SideDrawer;
