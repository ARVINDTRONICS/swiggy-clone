import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { FoodSections } from "../../components/FoodSections";
import { RestaurantList } from "../../components/RestaurantList";

import { OFFERS } from "../../data";
import classes from "./home.module.scss";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Header offers={OFFERS} />
      <div className={classes.foodContainer}>
        <FoodSections />
        <RestaurantList />
      </div>
    </>
  );
};
