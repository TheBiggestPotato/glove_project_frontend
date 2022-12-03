import React from "react";
import "./bigHeading.scss";

const BigHeading = (props) => {
  const { content, color } = props;

  return (
    <>
      <h1 className={`bigHeading bigHeading--${color}`}>{content}</h1>
    </>
  );
};

export default BigHeading;
