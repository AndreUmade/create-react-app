import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="home_main">
      <div className="home_sidenav">
        <div className="home_navs">
          <div className="home_dashboard">
            <div className="home_dashboard_case">
              <img
                src={"./dashboard.svg"}
                className="home_dashboard_img"
                alt="logo"
              />
              <p className="home_dashboard_text">Dashboard</p>
            </div>
          </div>

          <div className="home_profile">
            <div className="home_profile_case">
              <img
                src={"./profile.svg"}
                className="home_profile_img"
                alt="dashboard"
              />
              <p className="home_profile_text">Profile</p>
            </div>
          </div>

          <div className="home_request">
            <div className="home_request_case">
              <img
                src={"./request.svg"}
                className="home_request_img"
                alt="profile"
              />
              <p className="home_request_text">Request</p>
            </div>
          </div>

          <div className="home_chat">
            <div className="home_chat_case">
              <img
                src={"./messages.svg"}
                className="home_chat_img"
                alt="chat"
              />
              <p className="home_chat_text">Chats</p>
            </div>
          </div>

          <div className="home_transact">
            <div className="home_transact_case">
              <img
                src={"./transaction.svg"}
                className="home_transact_img"
                alt="transact"
              />
              <p className="home_transact_text">Transaction</p>
            </div>
          </div>

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
    </div>
  );
};
export default Profile;
