import React from "react";
import "./roundButton.scss";

function RoundButton(props) {
  const { buttonType, label, disabled, onClick, padding, fontSize } = props;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <button className={`btn btn--${buttonType}`} onClick={handleClick} 
      style={{ 
        padding: `${padding}`,
        fontSize: `${fontSize}`
      }}
      >
        {label}
      </button>
    </>
  );
}

export default RoundButton;
