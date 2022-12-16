import React from "react";

import TabText from "../../molecules/TabText/tabText";
import Nav from "../../organisms/Nav/nav";

import "./Home.scss";

const Home = () => {
  return (
    <>
    <Nav />
    <div className="home__body">
      <TabText />
    </div>
    </>
  );
};

export default Home;
