import React from "react";
import "./request.css";

const Request = () => {
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

          <a href={"/profile"} className="home_profile">
            <div className="home_profile_case">
              <img
                src={"./profile.svg"}
                className="home_profile_img"
                alt="dashboard"
              />
              <p className="home_profile_text">Profile</p>
            </div>
          </a>

          <a href={"/request"} className="home_request_active">
            <div className="home_request_case">
              <img
                src={"./request active.svg"}
                className="home_request_img"
                alt="profile"
              />
              <p className="home_request_text_active">Request</p>
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
        <p className="dashboard_main_text">Request</p>

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

      <div className="request_list_main">
        <div className="request_list_service">
          <div className="home_service_request_case">
            <img
              className="home_service_request_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request">
              <p className="home_contact_text">Adewale Adeniyi</p>
              <div className="home_contact_profile">
                <img
                  className="home_contact_profile_img"
                  src="./discover.svg"
                  alt="profile"
                />
                <p className="home_contact_profile_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile_btn">
              <h6 className="home_contact_profile_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile_btn1">
              <h6 className="home_contact_profile_btn_text1">Decline</h6>
            </a>
          </div>

          <div className="home_service_request1_case">
            <img
              className="home_service_request1_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request1">
              <p className="home_contact_text1">Adewale Adeniyi</p>
              <div className="home_contact_profile1">
                <img
                  className="home_contact_profile1_img"
                  src="./discover.svg"
                  alt="positive"
                />
                <p className="home_contact_profile1_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile1_btn">
              <h6 className="home_contact_profile1_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile1_btn1">
              <h6 className="home_contact_profile1_btn_text1">Decline</h6>
            </a>
          </div>

          <div className="home_service_request2_case">
            <img
              className="home_service_request2_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request2">
              <p className="home_contact_text2">Adewale Adeniyi</p>
              <div className="home_contact_profile2">
                <img
                  className="home_contact_profile2_img"
                  src="./discover.svg"
                  alt="positive"
                />
                <p className="home_contact_profile2_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile2_btn">
              <h6 className="home_contact_profile2_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile2_btn2">
              <h6 className="home_contact_profile2_btn_text1">Decline</h6>
            </a>
          </div>

          <div className="home_service_request3_case">
            <img
              className="home_service_request2_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request2">
              <p className="home_contact_text2">Adewale Adeniyi</p>
              <div className="home_contact_profile2">
                <img
                  className="home_contact_profile2_img"
                  src="./discover.svg"
                  alt="positive"
                />
                <p className="home_contact_profile2_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile2_btn">
              <h6 className="home_contact_profile2_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile2_btn2">
              <h6 className="home_contact_profile2_btn_text1">Decline</h6>
            </a>
          </div>
        </div>

        <div className="request_list_service1">
          <div className="home_service_request_case">
            <img
              className="home_service_request_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request">
              <p className="home_contact_text">Adewale Adeniyi</p>
              <div className="home_contact_profile">
                <img
                  className="home_contact_profile_img"
                  src="./discover.svg"
                  alt="profile"
                />
                <p className="home_contact_profile_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile_btn">
              <h6 className="home_contact_profile_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile_btn1">
              <h6 className="home_contact_profile_btn_text1">Decline</h6>
            </a>
          </div>

          <div className="home_service_request1_case">
            <img
              className="home_service_request1_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request1">
              <p className="home_contact_text1">Adewale Adeniyi</p>
              <div className="home_contact_profile1">
                <img
                  className="home_contact_profile1_img"
                  src="./discover.svg"
                  alt="positive"
                />
                <p className="home_contact_profile1_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile1_btn">
              <h6 className="home_contact_profile1_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile1_btn1">
              <h6 className="home_contact_profile1_btn_text1">Decline</h6>
            </a>
          </div>

          <div className="home_service_request2_case">
            <img
              className="home_service_request2_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request2">
              <p className="home_contact_text2">Adewale Adeniyi</p>
              <div className="home_contact_profile2">
                <img
                  className="home_contact_profile2_img"
                  src="./discover.svg"
                  alt="positive"
                />
                <p className="home_contact_profile2_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile2_btn">
              <h6 className="home_contact_profile2_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile2_btn2">
              <h6 className="home_contact_profile2_btn_text1">Decline</h6>
            </a>
          </div>

          <div className="home_service_request3_case">
            <img
              className="home_service_request2_img"
              src="./Ellipse 2.svg"
              alt="positive"
            />
            <div className="home_service_request2">
              <p className="home_contact_text2">Adewale Adeniyi</p>
              <div className="home_contact_profile2">
                <img
                  className="home_contact_profile2_img"
                  src="./discover.svg"
                  alt="positive"
                />
                <p className="home_contact_profile2_text">2km away</p>
              </div>
            </div>
            <a className="home_contact_profile2_btn">
              <h6 className="home_contact_profile2_btn_text">Accept</h6>
            </a>

            <a className="home_contact_profile2_btn2">
              <h6 className="home_contact_profile2_btn_text1">Decline</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Request;
