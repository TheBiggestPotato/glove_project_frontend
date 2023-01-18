import React from "react";
import "./line.scss";

const Line = (props) => {
  const { width, height, color } = props;

  return (
    <>
      <hr
        className={`line line--${color}`}
        style={{ width: `${width}`, height: `${height}` }}
      ></hr>
    </>
  );
};

export default Line;
