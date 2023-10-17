import "./profile2.css";
import React, { useState } from "react";

const Profile2 = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="container-fluid">
      <div className="sidebar">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
        </div>
        {showSidebar && (
          <div className="sidebar-nav">
            <img
              className="home_logo nav-item"
              src={"./logo 2.svg"}
              alt="logo"
            />
            <a href={"/home"} className="home_dashboard1 nav-item">
              <div className="home_dashboard_case">
                <img
                  src={"./element-4.svg"}
                  className="home_dashboard_img"
                  alt="logo"
                />
                <p className="home_dashboard_text1">Dashboard</p>
              </div>
            </a>

            <a href={"/services"} className="home_profile nav-item">
              <div className="home_profile_case">
                <img
                  src={"./task-square1.svg"}
                  className="home_profile_img"
                  alt="dashboard"
                />
                <p className="home_profile_text">Services</p>
              </div>
            </a>

            <a href={"/chat"} className="home_request nav-item">
              <div className="home_request_case">
                <img
                  src={"./messages.svg"}
                  className="home_request_img"
                  alt="profile"
                />
                <p className="home_request_text">Chats</p>
              </div>
            </a>

            <a href={"/wallet"} className="home_chat nav-item">
              <div className="home_chat_case">
                <img
                  src={"./receipt-text2.svg"}
                  className="home_chat_img"
                  alt="chat"
                />
                <p className="home_chat_text">Transaction</p>
              </div>
            </a>

            <a href={"/community"} className="home_transact nav-item">
              <div className="home_transact_case">
                <img
                  src={"./hierarchy.svg"}
                  className="home_transact_img"
                  alt="transact"
                />
                <p className="home_transact_text">Community</p>
              </div>
            </a>

            <a href={"/profile"} className="home_setting_active nav-item">
              <div className="home_setting_case">
                <img
                  src={"./setting-3.svg"}
                  className="home_setting_img"
                  alt="setting"
                />
                <p className="home_setting_text_active">Settings</p>
              </div>
            </a>
          </div>
        )}
      </div>

      <div className={`main-container ${showSidebar ? "shift-container" : ""}`}>
        <div className="dashboard_main container-fluid">
          <div className="dashboard_text_case">
            <p className="dashboard_Services_text">Settings</p>
          </div>
          <img
            src={"./search_normal.svg"}
            className="dashboard_search"
            alt="search"
          />
          <input
            className="dashboard_main_Input"
            type="text"
            placeholder="Search.."
          ></input>

          <a className="dashboard_bell" href={"/profile"}>
            <img
              className="dashboard_bell_img"
              src="./notification.svg"
              alt="notification"
            />
          </a>

          <div className="dashboard_notif">
            <img
              className="dashboard_notif_img"
              src="./Frame 258.svg"
              alt="notification"
            />
            <input id="toggler" type="checkbox" />
            <label for="toggler">
              <img
                className="dashboard_notif_img1"
                src={"./arrow-down.svg"}
                alt="arrow-down png"
              />
            </label>
            <div className="notif_dropdown">
              <div className="notif_dropdown_case">
                <a className="notif_dropdown_style" href={"/profile"}>
                  <img
                    className="notif_dropdown_img"
                    src={"./profile dropdown.svg"}
                    alt="padlock png"
                  />
                  <p className="notif_dropdown_text">Profile</p>
                </a>
                <div className="notif_dropdown_line"></div>
                <a className="notif_dropdown_style1" href={"/signup"}>
                  <img
                    className="notif_dropdown_img1"
                    src={process.env.PUBLIC_URL + "logout dropdown.svg"}
                    alt="logout png"
                  />
                  <p className="notif_dropdown_text1">Log out</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*----- first top -----*/}
        <div className="category_wrapper">
          <a href={"/profile"} className="profile2_category_text">
            Account
          </a>
          <p className="profile2_category_text1">Wallet</p>
          <div className="profile2_category_line"></div>
        </div>

        {/*-----second top -----*/}
        <div className="profile_debit">
          <a href={"/profile3"} className="profile_debitcard">
            <img
              className="profile_debitcard_img"
              src={process.env.PUBLIC_URL + "cards.svg"}
              alt="card png"
            />
            <p className="profile_debitcard_text">Debit Cards</p>
            <img
              className="profile_debit_arrow"
              src={process.env.PUBLIC_URL + "arrow-down.svg"}
              alt="arrow png"
            />
          </a>

          <div className="profile_debit_line"></div>

          <a href={"/profile"} className="profile_withdraw">
            <img
              className="profile_withdraw_img"
              src={process.env.PUBLIC_URL + "card-receive3.svg"}
              alt="withdraw png"
            />
            <p className="profile_withdraw_text">Withdrawal Settings</p>
            <img
              className="profile_debit_arrow1"
              src={process.env.PUBLIC_URL + "arrow-down.svg"}
              alt="arrow png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
