import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col signup_first">
          <img className="signup_logo" src={"./Logo.svg"} alt="logo" />
          <p className="signup_text">Create an account</p>

          <form className="signup_input_frame">
            <div className="signup_input_name mb-3  form-group">
              <label for="fname" className="signup_input_name_text form-label">
                First Name
              </label>
              <input
                type="text"
                className="signup_input_name_field form-control"
                id="fname"
                name="fname"
                placeholder="Andrew Tate"
              ></input>
            </div>

            <div className="signup_input_lname mb-3  form-group">
              <label for="lname" className="signup_input_lname_text form-label">
                Last name
              </label>
              <input
                className="signup_input_lname_field form-control"
                type="text"
                name="name"
                id="lname"
                placeholder="Last name"
              ></input>
            </div>

            <div className="signup_input_email mb-3  form-group">
              <label for="email" className="signup_input_email_text form-label">
                Email
              </label>
              <input
                className="signup_input_email_input form-control"
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
              ></input>
            </div>

            <div className="signup_input_phone mb-3  form-group">
              <label for="phone" className="signup_input_phone_text form-label">
                Phone
              </label>
              <input
                className="signup_input_phone_field form-control"
                type="tel"
                id="phone"
                name="phone"
                placeholder="+(234) 801 234 5678"
              ></input>
            </div>

            <div className="signup_input_state mb-3  form-group">
              <label for="state" className="signup_input_state_text form-label">
                State of Origin
              </label>
              <input
                className="signup_input_state_field form-control"
                name="state"
                id="state"
                type="text"
                placeholder="Rivers State"
                required
              />
            </div>

            <div className="signup_input_special mb-3  form-group">
              <label
                for="religion"
                className="signup_input_special_text form-label"
              >
                Select Specilization
              </label>
              <select
                id="religion"
                className="signup_input_special_field form-control"
              >
                <option value="">Select Specilization</option>
                <option value="christainity">Christainity</option>
                <option value="islamic">Islamic</option>
                <option value="another">Others</option>
              </select>
            </div>

            <div className="signup_input_password mb-3  form-group">
              <label
                for="pwd"
                className="form-label signup_input_password_text"
              >
                Password
              </label>
              <input
                className="signup_input_password_field form-control"
                type="password"
                name="pwd"
                id="pwd"
                placeholder="••••••••••"
              ></input>
            </div>
          </form>

          <div className="signup_checkbox mb-3  form-check">
            <input
              className="signup_checkbox_input form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label
              className="signup_checkbox_text form-check-label"
              for="flexCheckDefault"
            >
              I agree to the <a className="signup_checkbox_link">Terms</a> and{" "}
              <a className="signup_checkbox_link1">Conditions</a>
            </label>
          </div>

          <a className="signup_button" href={"/loginsuccessful"}>
            <h6 className="signup_button_text">SignUp</h6>
          </a>

          <p className="signup_link_signup">
            Already have an account?
            <a href={"/login"} className="signup_link_signup1">
              Sign in
            </a>
          </p>
        </div>

        <div className="col signup_second_frame relative container d-none d-lg-block">
          <img
            className="signup_second_img object-fit-lg-contain"
            src={"./signup main.svg"}
            alt="signup frame"
          />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
