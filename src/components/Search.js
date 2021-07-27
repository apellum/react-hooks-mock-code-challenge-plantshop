import React, { useState } from "react";

function Search({searchCriteria, handleChange}) {
  


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchCriteria}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
