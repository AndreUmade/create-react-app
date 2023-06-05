import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="signup_filled_main">
      <div className="signup_first_frame">
        <img
          className="signup_logo"
          src={process.env.PUBLIC_URL + "Logo.svg"}
          alt="logo"
        />
        <p className="signup_text">Create an account</p>
        <div className="signup_input_frame">
          <div className="signup_input_name">
            <label for="fname" className="signup_input_name_text">
              First Name
            </label>
            <input
              type="text"
              className="signup_input_name_field"
              id="fname"
              name="fname"
              placeholder="Andrew Tate"
            ></input>
          </div>

          <div className="signup_input_lname">
            <label for="lname" className="signup_input_lname_text">
              Last name
            </label>
            <input
              className="signup_input_lname_field"
              type="text"
              name="name"
              id="lname"
              placeholder="Last name"
            ></input>
          </div>

          <div className="signup_input_email">
            <label for="email" className="signup_input_email_text">
              Email
            </label>
            <input
              className="signup_input_email_input"
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
            ></input>
          </div>

          <div className="signup_input_phone">
            <label for="phone" className="signup_input_phone_text">
              Phone
            </label>
            <input
              className="signup_input_phone_field"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+(234) 801 234 5678"
            ></input>
          </div>

          <div className="signup_input_state">
            <label for="state" className="signup_input_state_text">
              State of Origin
            </label>
            <input
              className="signup_input_state_field"
              name="state"
              id="state"
              type="text"
              placeholder="Rivers State"
              required
            />
          </div>

          <div className="signup_input_special">
            <label for="religion" className="signup_input_special_text">
              Select Specilization
            </label>
            <select id="religion" className="signup_input_special_field">
              <option value="">Select Specilization</option>
              <option value="christainity">Christainity</option>
              <option value="islamic">Islamic</option>
              <option value="another">Others</option>
            </select>
          </div>

          <div className="signup_input_password">
            <label for="pwd" className="signup_input_password_text">
              Password
            </label>
            <input
              className="signup_input_password_field"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="••••••••••"
            ></input>
          </div>
        </div>

        <div className="signup_checkbox">
          <input
            className="signup_checkbox_input"
            type="checkbox"
            id=""
            name="vehicle2"
            value="Car"
          />
          <label className="signup_checkbox_text" for="tick">
            I agree to the{" "}
            <a href="" className="signup_checkbox_link">
              Terms
            </a>{" "}
            and{" "}
            <a href="" className="signup_checkbox_link1">
              Conditions
            </a>
          </label>
        </div>

        <a className="signup_button" href={"/loginsuccessful"}>
          <h6 className="signup_button_text">SignUp</h6>
        </a>

        <p className="signup_link_signup">
          Already have an account?
          <a href={"/login"} className="signup_link_signup1">
            Sign in
          </a>{" "}
        </p>
      </div>

      <div className="signup_second_frame">
        <img
          className="signup_second_img"
          src={process.env.PUBLIC_URL + "signup main.svg"}
          alt="signup frame"
        />
      </div>
    </div>
  );
};
export default SignUp;
