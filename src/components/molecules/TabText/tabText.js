import React from "react";
import "./tabText.scss";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import Line from "../../atoms/Line/line";
import RoundButton from "../../atoms/RoundButton/roundButton";
import SmallHeading from "../../atoms/SmallHeading/smallHeading";

const TabText = () => {
  return (
    <div className="tabText">
      <BigHeading color="black" content="Protejam viata" />
      <BigHeading color="black" content="Protejam viitorul" />
      <Line width="27%" height="2rem"></Line>
      <SmallHeading
        color="black"
        content="Producatorul european de manusi de nitril"
      />
      <RoundButton
        className="tabText__btn"
        buttonType="first"
        label="Afla mai multe"
      />
    </div>
  );
};

export default TabText;
