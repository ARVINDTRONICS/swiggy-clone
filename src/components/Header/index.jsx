import classes from "./header.module.scss";
import { Carousel } from "../Shared/Carousel";

import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <div className={classes.header}>
      <Carousel show={4}>
        {props.offers.map((eachOffer, index) => {
          return (
            <div key={index} className={classes.offerCard}>
              <img src={eachOffer.source} alt="offer" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

Header.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};
