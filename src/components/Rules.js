import React from "react";
import rulesImg from "../images/image-rules.svg";

const Rules = () => {
  return (
    <div className="m-2">
      <label
        htmlFor="my-modal-6"
        className="btn modal-button btn-outline text-white "
      >
        Rules
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img src={rulesImg} className="block mx-auto" alt="" />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
