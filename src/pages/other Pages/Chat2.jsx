import React, { useState } from "react";
import "./chat2.css";

const Chat2 = () => {
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

            <a href={"/chat"} className="home_request_active nav-item">
              <div className="home_request_case">
                <img
                  src={"./messages-2.svg"}
                  className="home_request_img"
                  alt="profile"
                />
                <p className="home_request_text_active">Chats</p>
              </div>
            </a>

            <a href={"/wallet"} id="home_trans" className="home_chat nav-item">
              <div className="home_chat_case" id="home_trans_case">
                <img
                  id="home_trans_case_img"
                  src={"./receipt-text2.svg"}
                  className="home_chat_img"
                  alt="chat"
                />
                <p className="home_chat_text" id="home_trans_case_text">
                  Transaction
                </p>
              </div>
            </a>

            <a className="home_transact nav-item">
              <div className="home_transact_case">
                <img
                  src={"./hierarchy.svg"}
                  className="home_transact_img"
                  alt="transact"
                />
                <p className="home_transact_text">Community</p>
              </div>
            </a>

            <a href={"/profile"} className="home_setting nav-item">
              <div className="home_setting_case">
                <img
                  src={"./setting-2.svg"}
                  className="home_setting_img"
                  alt="setting"
                />
                <p className="home_setting_text">Settings</p>
              </div>
            </a>
          </div>
        )}
      </div>

      <div className={`main-container ${showSidebar ? "shift-container" : ""}`}>
        <div className="dashboard_main container-fluid">
          <div className="dashboard_text_case">
            <p className="chat2_Services_text">Chat</p>
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

        <div className="chat2_main">
          <div className="chat2_top">
            <a href={"/chat"}>
              <img
                className="chat2_img"
                src={"./arrow-left.svg"}
                alt="back png"
              />{" "}
            </a>
            <img
              className="chat2_img1"
              src={"./Ellipse 12.svg"}
              alt="back png"
            />
            <p className="chat2_text">Adeniyi</p>
          </div>
          <img
            className="chat2_img2"
            src={"./search-normal.svg"}
            alt="search png"
          />
          <div className="chat2_textbox">
            <p className="chat2_textbox_text">Hello! Good morning</p>
          </div>
          <div className="chat2_textbox1">
            <p className="chat2_textbox1_text">Good morning, How are you?</p>
          </div>
          <div className="chat2_textbox2">
            <p className="chat2_textbox2_text">Good morning, How are you?</p>
          </div>
          <div className="chat2_textbox3">
            <p className="chat2_textbox3_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className="chat2_input_case">
            <img
              className="chat_input_field_img"
              src={"./attach-circle.svg"}
              alt="search png"
            />
            <input type="text" className="chat2_input" />
            <a className="chat2_input_button">
              <p className="chat2_input_text">Send</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat2;
