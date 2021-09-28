import React from "react";
import classes from "./restaurantList.module.scss";
import { RestaurantCard } from "../Shared/RestaurantCard";
export const RestaurantList = () => {
  return (
    <div className={classes.restaurantListContainer}>
      <h1 className="text-bold padding-all-1 font-size-one-half">
        Offers Near You{" "}
      </h1>
      <div className={classes.restaurantCards}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default RestaurantList;
