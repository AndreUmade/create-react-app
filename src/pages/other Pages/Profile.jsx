import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="home_main">
      <div className="home_sidenav">
        <div className="home_navs">
          <a href={"/home"} className="home_dashboard_inactive">
            <div className="home_dashboard_case">
              <img
                src={"./dashboard-inactive.svg"}
                className="home_dashboard_img"
                alt="logo"
              />
              <p className="home_dashboard_text_inactive">Dashboard</p>
            </div>
          </a>

          <a href={"/profile"} className="home_profile_page">
            <div className="home_profile_case">
              <img
                src={"./profile-active.svg"}
                className="home_profile_img"
                alt="dashboard"
              />
              <p className="home_profile_text_page">Profile</p>
            </div>
          </a>

          <a href={"/request"} className="home_request">
            <div className="home_request_case">
              <img
                src={"./request.svg"}
                className="home_request_img"
                alt="profile"
              />
              <p className="home_request_text">Request</p>
            </div>
          </a>

          <a href={"/chat"} className="home_chat">
            <div className="home_chat_case">
              <img
                src={"./messages.svg"}
                className="home_chat_img"
                alt="chat"
              />
              <p className="home_chat_text">Chats</p>
            </div>
          </a>

          <a href={"/wallet"} className="home_transact">
            <div className="home_transact_case">
              <img
                src={"./transaction.svg"}
                className="home_transact_img"
                alt="transact"
              />
              <p className="home_transact_text">Transaction</p>
            </div>
          </a>

          <div className="home_setting">
            <div className="home_setting_case">
              <img
                src={"./setting-2.svg"}
                className="home_setting_img"
                alt="setting"
              />
              <p className="home_setting_text">Settings</p>
            </div>
          </div>
        </div>
        <img
          className="home_logo"
          src={process.env.PUBLIC_URL + "logo 2.svg"}
          alt="logo"
        />
      </div>

      <div className="profile_second_top">
        <p className="dashboard_main_text">Profile</p>

        <input
          className="dashboard_main_Input"
          type="text"
          placeholder="Search"
        />
        <img
          className="dashboard_main_img"
          src="./search-normal.svg"
          alt="dashboard"
        />

        <div className="dashboard_bell">
          <img
            className="dashboard_bell_img"
            src="./notification.svg"
            alt="notify"
          />
        </div>

        <div className="dashboard_notif">
          <img
            className="dashboard_notif_img"
            src="./Frame 258.svg"
            alt="profile photo"
          />
          <input id="toggler" type="checkbox" />
          <label for="toggler">
            <img
              className="dashboard_notif_img1"
              src={"./arrow-down.svg"}
              alt="arrow-down png"
            />
          </label>
        </div>
      </div>

      <div className="profile_category">
        <div className="profile_category_line"></div>
        <p className="profile_category_text">Info</p>
        <a href={"/profile2"} className="profile_category_text1">
          Photos and Videos
        </a>
        <a href={"/profile3"} className="profile_category_text2">
          Achievements
        </a>
      </div>

      <a className="profile_save">
        <h6 className="profile_save_text">save</h6>
      </a>

      <img
        className="profile_pictures"
        src="./Frame 258.svg"
        alt="profile img"
      />
      <img
        className="profile_picture_item1"
        src="./Frame 336.svg"
        alt="camera img"
      />

      <div className="profile_input_field">
        <div className="profile_input_name">
          <p className="profile_input_name_text">Name</p>
          <input className="profile_input_name_field" placeholder="Andrew" />
          <input className="profile_input_name_field1" placeholder="Tate" />
        </div>

        <div className="profile_input_location">
          <p className="profile_input_location_text">Location</p>
          <input className="profile_input_location_field" placeholder="Lagos" />
        </div>

        <div className="profile_input_specialization">
          <p className="profile_input_specialization_text">Specialization</p>
          <input
            className="profile_input_specialization_field"
            placeholder="Mechanic"
          />
        </div>

        <div className="profile_input_price">
          <p className="profile_input_price_text">Price</p>
          <input className="profile_input_price_field" placeholder="20" />
        </div>

        <div className="profile_input_description">
          <p className="profile_input_description_text">Description</p>
          <input className="profile_input_description_field" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
