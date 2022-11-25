import React from "react";
import "./bigHeading.scss";

const BigHeading = (props) => {
  const { content, color } = props;

  return (
    <div className={`bigHeading bigHeading--${color}`}>
      <h1>{content}</h1>
    </div>
  );
};

export default BigHeading;
