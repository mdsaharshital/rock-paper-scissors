import React from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import triangle from "../images/bg-triangle.svg";

const Hero = () => {
  return (
    <section className="main-game-div">
      <div>
        <img className="rock-paper-scissior" id="rock" src={rock} alt="" />
        <img id="triangle" src={triangle} alt="" />
        <img
          className="rock-paper-scissior"
          id="scissors"
          src={scissors}
          alt=""
        />
        <img className="rock-paper-scissior" id="paper" src={paper} alt="" />
      </div>
    </section>
  );
};

export default Hero;
