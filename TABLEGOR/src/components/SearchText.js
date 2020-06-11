import React from "react";

const SearchText = ({ text = "", className = "" }) => {
  return <div className={`search-text ${className}`}>{text}</div>;
};

export default SearchText;
