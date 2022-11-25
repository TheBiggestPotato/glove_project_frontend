import React from "react";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import RoundButton from "../../atoms/RoundButton/roundButton";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <BigHeading color="black" content="Dili dili dalila dalilei" />
      <RoundButton buttonType="first" label="Dili dili" />
    </div>
  );
};

export default Home;
