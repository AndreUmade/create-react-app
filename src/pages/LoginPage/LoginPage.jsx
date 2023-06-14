import React from "react";
import "./loginpage.css";

const LoginPage = () => {
  return (
    <div className="login_empty_main">
      <div className="login_first_frme">
        <img
          className="login_logo"
          src={ "./Logo.svg"}
          alt="logo"
        />
        <p className="login_text">Login to your account</p>
        <div className="login_input_frame">
          <div className="login_input_email">
            <label for="email" className="login_input_email_text">
              Email
            </label>
            <input
              className="login_input_email_input"
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
            ></input>
          </div>
          <div className="login_input_password">
            <label for="pwd" className="login_input_password_text">
              Password
            </label>
            <input
              className="login_input_password_field"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="••••••••••"
            ></input>
          </div>
        </div>

        <a className="login_button" href={"/loginsuccessful"}>
          <h6 className="login_button_text">Login</h6>
        </a>

        <div className="login_options">
          <div className="login_options_line"></div>
          <p className="login_options_text">Continue with</p>
          <div className="login_options_line1"></div>
        </div>

        <div className="login_options_socials">
          <a href={"www.gmail.com"} className="login_google">
            <img
              className="login_google_img"
              src={"./google-icon.svg"}
              alt="google"
            />
          </a>
          <a href={"www.facebook.com"} className="login_facebook">
            <img
              className="login_facebook_img"
              src={"./facebook-solid.svg"}
              alt="facebook"
            />
          </a>
        </div>

        <p className="login_link_signup">
          Don’t have an account?
          <a href={"/signup"} className="login_link_signup1">
            Sign up
          </a>
        </p>
      </div>

      <div className="login_checkbox">
        <input
          className="login_checkbox_input"
          type="checkbox"
          id="tick"
          name="tick"
          value="tick"
        />
        <label className="login_checkbox_text" for="tick">
          Remember me
        </label>
      </div>

      <a className="login_forget_text">Forget Password?</a>

      <div className="login_second_frame">
        <img
          className="login_second_img"
          src={"./login main.svg"}
          alt="frame"
        />
      </div>
    </div>
  );
};
export default LoginPage;
