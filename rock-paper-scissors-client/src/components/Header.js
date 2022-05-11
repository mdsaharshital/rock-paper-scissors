import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <section className="p-4 w-3/4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 border-2 p-5 justify-items-center items-center">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div className="card-body mt-3 text-center w-36 bg-white text-black rounded">
          <h1 className="text-xl ">Score</h1>
          <h1 className="text-5xl ">0</h1>
        </div>
      </div>
    </section>
    // <section className="mx-auto" style={{ width: "50vw" }}>
    //   <div className="border border-2 border-secondary rounded row row-cols-12 row-cols-md-6 row-cols-lg-6 justify-content-between align-content-center p-4">
    //     <img src="./images/logo.svg" alt="logo" className="w-auto" />
    //     <div className="card" style={{ width: "10rem" }}>
    //       <div className="card-body text-black text-center">
    //         <h5 className="card-title">Score</h5>
    //         <p className="card-text">0</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Header;
