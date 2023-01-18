import React from "react";

import Nav from "../../organisms/Nav/desktopNav/nav";
import Line from "../../atoms/Line/line";
import RoundButton from "../../atoms/RoundButton/roundButton";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import Curtain from "../../molecules/curtain/curtain";

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
        <div className="home__secondRow__headine">
          <BigHeading content='Why us?' color='blue'/>
        </div>
        <div className='home__secondRow__cards'>
          <Curtain contentLeftPanel='No allergi' contentRightPanel='c reactions'/>
          <Curtain contentLeftPanel='Reliable&nbsp;' contentRightPanel='protection'/>
          <Curtain contentLeftPanel='Extremel' contentRightPanel='y durable'/>
          <Curtain contentLeftPanel='Resistant to&nbsp;ratures' contentRightPanel='extreme tempe'/>
          <Curtain contentLeftPanel='Comfortable' contentRightPanel='s'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
