import React from "react";
import "./chat.css";

const Chat = () => {
  return (
    <div className="home_main">
      <div className="home_sidenav">
        <div className="home_navs">
          <div className="home_dashboard_inactive">
            <div className="home_dashboard_case">
              <img
                src={"./dashboard-inactive.svg"}
                className="home_dashboard_img"
                alt="logo"
              />
              <p className="home_dashboard_text_inactive">Dashboard</p>
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

          <div className="home_chat_active">
            <div className="home_chat_case">
              <img
                src={"./message active.svg"}
                className="home_chat_img"
                alt="chat"
              />
              <p className="home_chat_text_active">Chats</p>
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

      <div className="profile_second_top">
        <p className="dashboard_main_text">Messages</p>

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

      <div className="message_list_side">
        <div className="message_list_person">
          <img
            className="message_list_img"
            src={"./Ellipse 12.svg"}
            alt="profile picture png"
          />
          <div className="message_list_text_case">
            <div className="message_list_pack">
              <p className="message_list_text">Andrew Tate</p>
              <img
                className="message_list_text_img"
                src={"./verify.svg"}
                alt="verify png"
              />
            </div>
            <p className="message_list_text1">Motor mechanics (Toyota)</p>
          </div>
        </div>

        <p className="message_chat_text">Chat</p>
        <img className="message_chat_img" src={"./star.svg"} alt="star png" />
        <img
          className="message_chat_img1"
          src={"./search-normal.svg"}
          alt="search png"
        />
      </div>

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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  );
};
export default Chat;
