import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
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

            <a href={"/wallet"} className="home_chat nav-item">
              <div className="home_chat_case">
                <img
                  src={"./messages.svg"}
                  className="home_chat_img"
                  alt="chat"
                />
                <p className="home_chat_text">Transaction</p>
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
            <p className="dashboard_Services_text">Chat</p>
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
        <div className="message_list_side">
          <a href={"/chat2"} className="message_list_person">
            <img
              className="message_list_img"
              src={"./Ellipse 12.svg"}
              alt="profile picture png"
            />
            <div className="message_list_text_case">
              <div className="message_list_pack">
                <p className="message_list_text">Andrew Adeniyi</p>
                <img
                  className="message_list_text_img"
                  src={"./verify.svg"}
                  alt="verify png"
                />
              </div>
              <p className="message_list_text1">Motor mechanics (Toyota)</p>
            </div>
          </a>

          <a href={"/chat2"} className="message_list_person1">
            <img
              className="message_list_img"
              src={"./Ellipse 12.svg"}
              alt="profile picture png"
            />
            <div className="message_list_text_case">
              <div className="message_list_pack">
                <p className="message_list_text">Andrew Adeniyi</p>
                <img
                  className="message_list_text_img"
                  src={"./verify.svg"}
                  alt="verify png"
                />
              </div>
              <p className="message_list_text1">Motor mechanics (Toyota)</p>
            </div>
          </a>

          <a href={"/chat2"} className="message_list_person2">
            <img
              className="message_list_img"
              src={"./Ellipse 12.svg"}
              alt="profile picture png"
            />
            <div className="message_list_text_case">
              <div className="message_list_pack">
                <p className="message_list_text">Andrew Adeniyi</p>
                <img
                  className="message_list_text_img"
                  src={"./verify.svg"}
                  alt="verify png"
                />
              </div>
              <p className="message_list_text1">Motor mechanics (Toyota)</p>
            </div>
          </a>

          <a href={"/chat2"} className="message_list_person3">
            <img
              className="message_list_img"
              src={"./Ellipse 12.svg"}
              alt="profile picture png"
            />
            <div className="message_list_text_case">
              <div className="message_list_pack">
                <p className="message_list_text">Andrew Adeniyi</p>
                <img
                  className="message_list_text_img"
                  src={"./verify.svg"}
                  alt="verify png"
                />
              </div>
              <p className="message_list_text1">Motor mechanics (Toyota)</p>
            </div>
          </a>
          <p className="message_chat_text">Chat</p>
          <img className="message_chat_img" src={"./star.svg"} alt="star png" />
          <img
            className="message_chat_img1"
            src={"./search-normal.svg"}
            alt="search png"
          />
        </div>

        <div>
          {" "}
          <div className="message_chat_entry">
            <img
              className="message_chat_entry_img"
              src={"./Ellipse 12.svg"}
              alt="search png"
            />
            <p className="message_chat_entry_text">Andrew Tate</p>
          </div>
          <div className="chat_box">
            <div className="chat_box_wrapper">
              <div className="chat_box_case">
                <p className="chat_box_case_text">Jane</p>
                <p className="chat_box_case_text1">1m</p>
              </div>
              <div className="chat_box_message">
                <p className="chat_box_message_text">Hello, Good Morning</p>
              </div>
            </div>
          </div>
          <div className="chat_box1">
            <div className="chat_box_case1">
              <p className="chat_box_case_text2">Me</p>
              <p className="chat_box_case_text3">1m</p>
            </div>
            <div className="chat_box_message1">
              <p className="chat_box_message_text1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
          <div className="chat_box2">
            <div className="chat_box2_img"></div>
            <div className="chat_box_frame">
              <div className="chat_box_case2">
                <p className="chat_box_case_text4">Jane</p>
                <p className="chat_box_case_text5">1m</p>
              </div>
              <div className="chat_box_message2">
                <p className="chat_box_message_text2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="chat_input_field_case">
            <input type="text" className="chat_input_field" />
            <a className="chat_input_field_wrapper">
              <h6 className="chat_input_field_text">Send</h6>
            </a>
            <img
              className="chat_input_field_img"
              src={"./attach-circle.svg"}
              alt="search png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
