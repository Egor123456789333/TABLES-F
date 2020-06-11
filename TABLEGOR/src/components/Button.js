import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, className = "", text = "" }) => {
  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
