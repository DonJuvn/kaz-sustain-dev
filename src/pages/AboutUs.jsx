import React from "react";import BgMain from "../components/bg-main";
import Potential from "../components/potential";
import Guide from "../components/guide";
import Team from "../components/team";
import Commitet from "../components/commitet";
import About from "../components/about";
import BgAbout from "../components/bg-about";
import WhoAreWe from "../components/whoarewe";
import Mission from "../components/mission";
import Values from "../components/values";
import Sight from "../components/sight";
import Carousel from "../components/carousel";
import JoinUs from "../components/join-us";

const Home = () => {
   return (
      <>
         <BgAbout />
         <WhoAreWe />
         <Mission />
         <Values />
         <Sight />
         <Carousel />
         <JoinUs />
      </>
   );
};

export default Home;
