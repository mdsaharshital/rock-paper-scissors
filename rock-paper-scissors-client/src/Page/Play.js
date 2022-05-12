import React, { useState } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

const Play = ({ rps, score, setScore }) => {
  const [show, setShow] = useState("");
  const [status, setStatus] = useState("-");
  const handleAllAction = (newScore, msg) => {
    setStatus(msg);
    setScore(newScore);
  };
  const choseRandom = () => {
    const images = [rock, paper, scissors];
    const match = images[[Math.floor(Math.random() * 3)]];
    if (rps === match) {
      handleAllAction(score, "Draw");
    }

    // paper
    if (rps === paper && match === rock) {
      let newScore = score + 1;
      handleAllAction(newScore, "You Won");
    } else if (rps === rock && match === paper) {
      let newScore = score - 1;
      handleAllAction(newScore, "You lost");
    }
    // rock
    if (rps === rock && match === scissors) {
      let newScore = score + 1;
      handleAllAction(newScore, "You Won");
    } else if (rps === scissors && match === rock) {
      let newScore = score - 1;
      handleAllAction(newScore, "You lost");
    }
    // scissor
    if (rps === scissors && match === paper) {
      let newScore = score + 1;
      handleAllAction(newScore, "You Won");
    } else if (rps === paper && match === scissors) {
      let newScore = score - 1;
      handleAllAction(newScore, "You lost");
    }
    setShow(match);
  };
  return (
    <div>
      <div className="w-full md:w-1/2 mx-auto flex justify-between items-center mt-10 mb-24 md:mt-20 md:mb-40">
        <div className="">
          <h1 className="text-center">You picked</h1>
          <img
            src={rps}
            className={
              status !== "You lost"
                ? "rock-paper-scissior mt-4 win"
                : "rock-paper-scissior mt-4 lost"
            }
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-xl text-center">{status}</h1>
          <h1
            onClick={() => {
              setScore(0);
              setStatus("-");
            }}
            className="text-xl mt-3 btn text-center"
          >
            Play again
          </h1>

          <button
            className="btn btn-success mt-3 mx-auto block"
            onClick={choseRandom}
          >
            Go
          </button>
        </div>
        <div className="">
          <h1 className="text-center ">The House picked</h1>
          {show ? (
            <img
              src={show}
              className={
                status !== "You Won"
                  ? "rock-paper-scissior mt-4 win"
                  : "rock-paper-scissior mt-4 lost"
              }
              alt=""
            />
          ) : (
            <div className="nothing-to-show"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Play;
