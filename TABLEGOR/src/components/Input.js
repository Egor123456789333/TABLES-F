import React from "react";

const Input = ({ id = "", type = "", placeholder = "" }) => {
  return <input type={type} id={id} placeholder={placeholder} />;
};

export default Input;
