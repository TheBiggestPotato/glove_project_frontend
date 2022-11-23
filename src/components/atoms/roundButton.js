import React from "react";
import "./roundButton.scss";

function RoundButton(props) {
  const { buttonType, label, disabled, onClick } = props;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <button className={`btn btn--${buttonType}`} onclick={handleClick}>
        {label}
      </button>
    </>
  );
}

export default RoundButton;
