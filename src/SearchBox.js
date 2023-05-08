import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div>
      <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Seach Robots" onChange={searchChange} ></input>
      
    </div>
  );
};

export default SearchBox;
