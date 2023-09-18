import React from "react";
import "./loginpage.css";

const LoginPage = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col login_first ">
          <div className="login_logo">
            <img
              className="login_logo_img img-fluid"
              src={"./logo.svg"}
              alt="logo"
            />
          </div>
          <div className="login_text_frame">
            <p className="login_text text-wrap">Login to your account</p>
          </div>

          <form className="login_form">
            <div className="mb-3 login_email_frame form-group">
              <label
                for="exampleFormControlInput1"
                className="form-label login_email_text"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control col-sm-2 login_email_input "
                id="exampleFormControlInput1"
                placeholder="johndoe@gmail.com"
              ></input>
            </div>

            <div className="mb-3 login_password_frame form-group">
              <label
                for="inputPassword5"
                className="form-label login_password_text"
              >
                Password
              </label>
              <input
                type="password"
                id="inputPassword5 is-valid"
                className="form-control col-sm-2 login_password_input"
                aria-labelledby="passwordHelpBlock"
              ></input>
              <div id="passwordHelpBlock" class="form-text">
                Your password must be 8-20 characters long
              </div>
            </div>
          </form>
          <div class="form-check login_checkbox_frame">
            <input
              class="form-check-input login_checkbox_input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label
              class="form-check-label login_checkbox_text"
              for="flexCheckDefault"
            >
              Remember me
            </label>
          </div>
          <a href={"/forgotpassword"} className="login_forgot">
            Forgot password?
          </a>

          <div className="button_login">
            <a
              type="submit"
              class="col-sm-offset-2 col-sm-10 button_frame"
              href={"/loginsuccessful"}
            >
              <p className="login_button_text">Login</p>
            </a>
          </div>

          <div className="login_continue container">
            <img className="continue_left" src={"./Vector 3.svg"} alt="logo" />
            <p className="continue_text">Continue with</p>
            <img className="continue_right" src={"./Vector 3.svg"} alt="logo" />
          </div>

          <div className="login_socials">
            <a href="www.google.com" className="login_socials_google">
              <img
                className="login_google img-fluid"
                src={"./google-icon.svg"}
                alt="logo"
              />
            </a>
            <a href={"www.fb.com"} className="login_socials_facebook">
              <img
                className="login_facebook img-fluid"
                src={"./facebook-solid.svg"}
                alt="logo"
              />
            </a>
          </div>

          <p className="login_sign">
            Don’t have an account?
            <a href={"/signup"} className="login_sign_text">
              {" "}
              Sign up
            </a>
          </p>
        </div>

        <div className="col relative container login_second d-none d-lg-block d-xl-block">
          <img
            className="login_second_img object-fit-fill "
            src={"./signup main.svg"}
            alt="signup frame"
          />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
