import React from "react";
import "./line.scss";

const Line = (props) => {
  const { width, height, color, className } = props;

  return (
    <>
      <hr
        className={`line line--${color} ${className}`}
        style={{ width: `${width}`, height: `${height}` }}
      ></hr>
    </>
  );
};

export default Line;
