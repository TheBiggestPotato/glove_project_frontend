import React from "react";
import { useNavigate } from "react-router";
import "./roundButton.scss";

function RoundButton(props) {
  const { buttonType, label, disabled, onClick, padding, fontSize, route } = props;

  let navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    if (route) {
      navigate(route)
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
