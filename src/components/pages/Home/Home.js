import React from "react";

import Nav from "../../organisms/Nav/desktopNav/nav";
import Line from "../../atoms/Line/line";
import RoundButton from "../../atoms/RoundButton/roundButton";
import Card from "../../atoms/card/card";


import gloveHeroTitle from '../../../assets/images/gloveHeroTitle.png'

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="home__firstRow">
        <div className="home__firstRow__heroTitle">
          <h1>The Ultimate Hand Protection</h1>
          <Line width='600px' height='3px' color='white'/>
          <h3>Powerful protection for any task</h3>
          <RoundButton label={'Explore Our Nitrile Gloves'} buttonType={"fourth"} padding='0.625rem 1rem'/>
        </div>
        <div className="home__firstRow__picture">
            <img src={gloveHeroTitle} alt={"gloveHeroTitle"}/>
        </div>
      </div>
      <div className="home__secondRow">
        <div className="home__secondRow__description">
        <span>Why us?</span>
        <span>We understand the importance of safety in the workplace and strive to provide our customers with reliable protective gear. See why you should choose our nitrile gloves:</span>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
