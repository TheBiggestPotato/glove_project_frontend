import React from "react";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import RoundButton from "../../atoms/RoundButton/roundButton";
import SmallHeading from "../../atoms/SmallHeading/smallHeading";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <BigHeading color="black" content="Protejam viata" />
      <BigHeading color="black" content="Protejam viitorul" />
      <SmallHeading
        color="black"
        content="Producatorul european de manusi de nitril"
      />
      <RoundButton buttonType="first" label="Afla mai multe" />
    </div>
  );
};

export default Home;
