import React from "react";
import "./smallHeading.scss";

const SmallHeading = (props) => {
  const { content, color } = props;

  return (
    <>
      <h2 className={`smallHeading smallHeading--${color}`}>{content}</h2>
    </>
  );
};

export default SmallHeading;
