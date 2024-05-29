import React from "react";

function SearchBar({ onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
