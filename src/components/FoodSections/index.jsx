import classes from "./foodsections.module.scss";
import PropTypes from "prop-types";
import { FOOD_SECTIONS } from "../../data";
export const FoodSections = () => {
  return (
    <div className={classes.foodsectionwrap}>
      {FOOD_SECTIONS.map((section, index) => {
        return <SectionCapsule key={index} section={section} />;
      })}
    </div>
  );
};

const SectionCapsule = ({ section }) => {
  return (
    <div className={classes.capsule}>
      <div className={classes.sectionImage}>
        <img
          width="100%"
          height="100%"
          alt="sectionimage"
          src={section.source}
        ></img>
      </div>
      <div>
        <p className={classes.sectionTitle}>{section.name}</p>
        <p className={classes.sectionOption}>{`${section.options} Options`}</p>
      </div>
    </div>
  );
};

SectionCapsule.propTypes = {
  section: PropTypes.object
};
