import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input placeholder="Search Brands"></input>
    </div>
  );
};

export default Search;
