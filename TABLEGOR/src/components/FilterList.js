import React from "react";
import FilterItem from "./FilterItem";
import PropTypes from "prop-types";

const FilterList = ({ filters = [{}], changeStatus }) => {
  return (
    <div className="Filter-list">
      {filters.map((filter) => {
        return (
          <FilterItem
            key={filter.id}
            filter={filter}
            changeStatus={changeStatus}
          />
        );
      })}
    </div>
  );
};

FilterItem.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default FilterList;
