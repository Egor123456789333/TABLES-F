import React from "react";
import {
  placeholder,
  applicationDate,
  to,
  searchBtn,
  clearBtn,
  reportBtn,
  add,
} from "../languages/languages";
import PropTypes from "prop-types";
import SearchText from "./SearchText";
import Input from "./Input";
import Button from "./Button";

const Search = ({ search, clear }) => {
  return (
    <div className="Search">
     <div className="search-line">
        <Button className="button" text={add} />
        <SearchText text={applicationDate} />
        <Input id="first-date" type="date" />
        <SearchText text={to} />
        <Input id="second-date" type="date" />
        <Button onClick={search} className="btn-search" text={searchBtn} />
        <Input id="search-text" type="text" placeholder={placeholder} />
        <Button onClick={clear} className="btn-clear" text={clearBtn} />
        <Button text={reportBtn} className="btn-report" />
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

export default Search;
