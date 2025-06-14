import React from "react";
import "../App.css";
const Button = ({ val, clickHandler }) => {
  return (
    <button className="btn" onClick={clickHandler} disabled={val?.disable}>
      {val?.val}
    </button>
  );
};

export default Button;
