import React from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import triangle from "../images/bg-triangle.svg";
import { Link } from "react-router-dom";

const Hero = ({ setRps }) => {
  return (
    <section className="main-game-div">
      <div>
        <Link to="/play">
          <img
            onClick={() => setRps(rock)}
            className="rock-paper-scissior"
            id="rock"
            src={rock}
            alt=""
          />
        </Link>
        <img id="triangle" src={triangle} alt="" />

        <Link to="/play">
          {" "}
          <img
            className="rock-paper-scissior"
            id="scissors"
            onClick={() => setRps(scissors)}
            src={scissors}
            alt=""
          />
        </Link>
        <Link to="/play">
          <img
            onClick={() => setRps(paper)}
            className="rock-paper-scissior"
            id="paper"
            src={paper}
            alt=""
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
