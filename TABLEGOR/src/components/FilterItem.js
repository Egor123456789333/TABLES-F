import React from "react";
import PropTypes from "prop-types";

const FilterItem = ({ filter: { title = "" }, changeStatus }) => {
  return (
    <div
      onClick={changeStatus}
      className={title === "Все" ? "filter-item active" : "filter-item"}
    >
      {title}
    </div>
  );
};

FilterItem.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default FilterItem;
