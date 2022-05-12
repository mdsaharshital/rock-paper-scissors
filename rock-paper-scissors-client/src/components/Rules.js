import React from "react";
import rulesImg from "../images/image-rules.svg";

const Rules = () => {
  return (
    <div className="mx-auto">
      <label for="my-modal-6" class="btn modal-button btn-outline text-white ">
        Rules
      </label>

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <img src={rulesImg} className="block mx-auto" alt="" />
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
