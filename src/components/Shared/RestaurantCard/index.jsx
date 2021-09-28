import React from "react";
import classes from "./restaurantCard.module.scss";
export const RestaurantCard = () => {
  return (
    <div className={classes.restaurantCardWrap}>
      <div>
        <img
          width="100%"
          height="100%"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rjjld4cxhxuuiiajoqmp"
          alt="restuarantImage"
        ></img>
      </div>
      <div className={classes.restaurantCardDetails}>
        <h4 className={classes.restaurantTitle}>Brownie Heaven</h4>
        <p className={classes.restaurantCategory}>Desserts</p>
        <div className={classes.restaurantMeta}>
          <span>
            <div className={classes.rating}>
              <i className="fas fa-star "></i>
              <span className="margin-left-half">4.5</span>
            </div>
          </span>
          <span className="margin-left-half">
            &#8226; <span>47 MINS</span>
          </span>
          <span>
            &#8377; <span className="margin-left-half">200 FOR TWO</span>
          </span>
        </div>
        <hr />
        <h4 className={classes.restaurantOffer}>
          <i className="fas fa-gifts padding-all-1"></i>40% OFF | Use TRYNEW
        </h4>
      </div>
    </div>
  );
};
