import React from "react";
import "./bigHeading.scss";

const BigHeading = (props) => {
  const { content, color, fontWeight } = props;

  return (
    <>
      <h1 className={`bigHeading bigHeading--${color}`}
      style={{
        fontWeight: `${fontWeight}`
      }}>{content}</h1>
    </>
  );
};

export default BigHeading;
