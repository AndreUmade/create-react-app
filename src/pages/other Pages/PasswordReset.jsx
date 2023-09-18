import React from "react";
import "./passwordreset.css";

const Passwordreset = () => {
  return (
    <div className="container-fluid">
      <img
        className="congrats_img "
        src={process.env.PUBLIC_URL + "Logo.svg"}
        alt="logo"
      />

      <div className="passwordreset_main">
        <img
          className="forgot_padlock"
          src={process.env.PUBLIC_URL + "refresh-img.svg"}
          alt="refresh"
        />
        <p className="email_confirm_text">Password Reset</p>
        <p className="email_confirm_text1">
          Your password has been reset successfully
        </p>

        <a href={"/"} className="email_confirm_button">
          <p className="email_confirm_button_text">Continue</p>
        </a>
      </div>
    </div>
  );
};
export default Passwordreset;
