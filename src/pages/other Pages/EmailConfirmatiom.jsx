import React from "react";
import "./emailconfirmation.css";

const EmailConfirmation = () => {
  return (
    <div className="container-fluid">
      <img
        className="congrats_img "
        src={process.env.PUBLIC_URL + "Logo.svg"}
        alt="logo"
      />

      <div className="email_confirm_main">
        <img
          className="forgot_padlock"
          src={process.env.PUBLIC_URL + "email-img.svg"}
          alt="secure"
        />
        <p className="email_confirm_text">Check your email</p>
        <p className="email_confirm_text1">
          We send a password reset link to Ademolaadeleke@mail.com
        </p>

        <a href={" "} className="email_confirm_button">
          <p className="email_confirm_button_text">Resend Link</p>
        </a>
        <a href={"/"} className="forgot_login">
          Back to login
        </a>
      </div>
    </div>
  );
};
export default EmailConfirmation;
