import React from "react";

function Search({ handleInputChange }) {
  return (
    <div>
      <div className="search-bar">
        <label className="dob-label" htmlFor="dob">
          DOB
        </label>
        <input
          type="date"
          id="dob"
          onChange={handleInputChange}
          name="dob"
        ></input>
        <input type="date" id="enddate" name="enddate"></input>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleInputChange}
        ></input>
      </div>
    </div>
  );
}

export default Search;