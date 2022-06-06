import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = ({ score }) => {
  return (
    <section className="p-4 w-3/4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 border-2 p-5 justify-items-center items-center">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div className="card-body mt-3 text-center w-36 bg-white text-black rounded">
          <h1 className="text-xl ">Score</h1>
          <h1 className="text-5xl ">{score}</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
