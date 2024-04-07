import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handlechange }) => (
  <input
    className="searchs"
    type="search"
    placeholder={placeholder}
    name=""
    id=""
    onChange={handlechange}
  />
);
