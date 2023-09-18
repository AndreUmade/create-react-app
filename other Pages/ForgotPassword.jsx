import React from "react";
import "./forgotpassword.css";

const ForgotPassword = () => {
  return (
    <div className="container-fluid">
      <img
        className="congrats_img "
        src={process.env.PUBLIC_URL + "Logo.svg"}
        alt="logo"
      />

      <div className="forgot_main">
        <img
          className="forgot_padlock"
          src={process.env.PUBLIC_URL + "padlock-img.svg"}
          alt="secure"
        />
        <p className="forgot_text">Forgot Password?</p>
        <p className="forgot_text1">
          Kindly enter your email address to get a reset link
        </p>

        <form className="forgot_form">
          <div className="mb-3 forgot_email form-group">
            <label for="email" className="forgot_email_text form-label">
              Email
            </label>
            <input
              className="form-control forgot_email_input"
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
            ></input>
          </div>

          <a href={"/"} className="forgot_button">
            <h6 className="forgot_button_text">Reset Password</h6>
          </a>
        </form>
        <a href={"/"} className="forgot_login">
          Back to login
        </a>
      </div>
    </div>
  );
};
export default ForgotPassword;
