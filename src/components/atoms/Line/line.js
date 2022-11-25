import React from "react";
import "./line.scss";

const Line = (props) => {
  const { width, height } = props;

  return (
    <>
      <hr
        className="line"
        style={{ width: `${width}`, height: `${height}` }}
      ></hr>
    </>
  );
};

export default Line;
