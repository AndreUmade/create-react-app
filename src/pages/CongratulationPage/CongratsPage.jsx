import React from "react";
import "./congratspage.css";

const CongratsPage = () => {
  return (
    <div className="congrats_main">
      <img
        className="congrats_img"
        src={process.env.PUBLIC_URL + "Logo.svg"}
        alt="logo"
      />

      <div className="congrats_case_main">
        <div className="congrats_case">
          <img
            className="congrats_case_img"
            src={process.env.PUBLIC_URL + "Frame 147.svg"}
            alt="congratulations"
          />
          <div className="congrats_form_frame">
            <div className="congrats_frame">
              <p className="congrats_frame_text">Congratulations!</p>
              <p className="congrats_frame_text1">
                You have successfully sign up as a technician. Please wait while
                we confirm your identity.
              </p>
            </div>
            <a className="congrats_case_btn" href={"/home"}>
              <h6 className="congrats_case_btn_text">Continue</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CongratsPage;
