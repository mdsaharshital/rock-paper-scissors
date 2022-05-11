import React, { useState } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

const Play = ({ rps }) => {
  // const level = rock;
  const [score, setScore] = useState(0);
  const [show, setShow] = useState("");
  const choseRandom = () => {
    const images = [rock, paper, scissors];
    const match = images[[Math.floor(Math.random() * 3)]];
    // console.log(rps, match);
    if (rps === match) {
      console.log("Draw");
    }

    // paper
    if (rps === paper && match === rock) {
      let newScore = score + 1;
      console.log("You wins");
      setScore(newScore);
    } else if (rps === rock && match === paper) {
      let newScore = score - 1;
      console.log("opponent wins");
      setScore(newScore);
    }
    // rock
    if (rps === rock && match === scissors) {
      let newScore = score + 1;
      console.log("You wins, ");
      setScore(newScore);
    } else if (rps === scissors && match === rock) {
      let newScore = score - 1;
      console.log("opponent wins");
      setScore(newScore);
    }
    // scissor
    if (rps === scissors && match === paper) {
      let newScore = score + 1;
      console.log("You wins");
      setScore(newScore);
    } else if (rps === paper && match === scissors) {
      let newScore = score - 1;
      console.log("opponent wins");
      setScore(newScore);
    }
    console.log(score);
    setShow(match);
  };
  return (
    <div>
      <div className="w-1/2 mx-auto flex justify-between items-center">
        <div className="">
          <h1 className="text-center">You picked</h1>
          <img src={rps} className="rock-paper-scissior mt-4" alt="" />
          <button className="btn mt-3 mx-auto block" onClick={choseRandom}>
            Go
          </button>
        </div>
        <div className="">
          <h1 className="text-center">The House picked</h1>
          <img src={show} className="rock-paper-scissior mt-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Play;
