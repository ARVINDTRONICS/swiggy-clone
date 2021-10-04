import classes from "./searchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <input
        pattern="^[a-zA-Z]+"
        placeholder="Search for city name..."
        type="search"
      ></input>
    </div>
  );
};
