import React, { useState } from "react";
import "./homepage.css";

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
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
            <a href={"/home"} className="home_dashboard nav-item">
              <div className="home_dashboard_case">
                <img
                  src={"./dashboard.svg"}
                  className="home_dashboard_img"
                  alt="logo"
                />
                <p className="home_dashboard_text">Dashboard</p>
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
                  src={"./request.svg"}
                  className="home_request_img"
                  alt="profile"
                />
                <p className="home_request_text">Chats</p>
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

            <a className="home_setting nav-item">
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
            <p className="dashboard_header1">Hi Jane,👋</p>
            <p className="dashboard_header2 ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, primis
              curae cras auctor nam per, at nisl parturient.
            </p>
          </div>
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

        <div className="responsive-container ">
          <div className="services_dashboard">
            <p className="services_text">Services</p>
            <p className="services_text1">see all</p>
          </div>
          <div className="main-services">
            <div className="mechanic_service">
              <div className="mechanic_service1">
                <div className="mechanic_service_frame">
                  <img
                    className="mechanic_service_img"
                    src={process.env.PUBLIC_URL + "mechanic.svg"}
                    alt="mechanic png"
                  />
                </div>
                <p className="mechanic_service_text">Mechanics</p>
              </div>
            </div>

            <div className="mechanic_service">
              <div className="mechanic_service1">
                <div className="mechanic_service_frame">
                  <img
                    className="mechanic_service_img"
                    src={process.env.PUBLIC_URL + "hairdresser.svg"}
                    alt="mechanic png"
                  />
                </div>
                <p className="mechanic_service_text">Barber</p>
              </div>
            </div>

            <div className="mechanic_service_one">
              <div className="mechanic_service1">
                <div className="mechanic_service_frame">
                  <img
                    className="mechanic_service_img"
                    src={process.env.PUBLIC_URL + "air-conditioner 1.svg"}
                    alt="mechanic png"
                  />
                </div>
                <p className="mechanic_service_text">AC Repairer</p>
              </div>
            </div>

            <div className="mechanic_service_two">
              <div className="mechanic_service1">
                <div className="mechanic_service_frame">
                  <img
                    className="mechanic_service_img"
                    src={process.env.PUBLIC_URL + "broom 1.svg"}
                    alt="mechanic png"
                  />
                </div>
                <p className="mechanic_service_text">Home Cleaning</p>
              </div>
            </div>

            <div className="mechanic_service_three">
              <div className="mechanic_service1">
                <div className="mechanic_service_frame">
                  <img
                    className="mechanic_service_img"
                    src={process.env.PUBLIC_URL + "sewing.svg"}
                    alt="mechanic png"
                  />
                </div>
                <p className="mechanic_service_text">Fashion Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/*----- wallet -----*/}

        <p className="smaller_screen_text">Hi Jane,👋</p>
        <p className="smaller_screen_text1">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, primis curae
          cras auctor nam per, at nisl parturient.
        </p>

        <div className="wallet_balance_main">
          <div className="wallet_balance_frame">
            <img
              className="wallet_balance_img"
              src={process.env.PUBLIC_URL + "wallet-money1.svg"}
              alt="wallet png"
            />
          </div>
          <p className="wallets_balance_text">#32,000.00</p>
          <p className="wallets_balance_text1">Your balance</p>

          <div className="wallet_topup_main">
            <div className="wallet_topup_frame">
              <div className="wallet_topup">
                <div className="wallet_topup_img_case">
                  <img
                    className="wallets_topup_img"
                    src={"./card-receive.svg"}
                    alt="wallet png"
                  />
                </div>
                <p className="wallets_topup_text">Top-up</p>
              </div>
              <div className="wallets_withdraw">
                <div className="wallet_withdraw_img_case">
                  <img
                    className="wallets_withdraw_img"
                    src={"./card-send.svg"}
                    alt="wallet png"
                  />
                </div>
                <p className="wallets_withdraw_text">Withdraw</p>
              </div>
            </div>
          </div>
        </div>

        {/* ----Recommend technicians*/}
        <div className="recommended_main">
          <div className="recommended_main_frame">
            <p className="recommended_main_text">Recommended Technician</p>
            <div className="recommend_case">
              <div className="technician_one">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Adewale Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technician_one">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technician_three">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="technician_four">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*----- Second column ----*/}

            <div className="recommend_case">
              <div className="technician_one">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technician_one">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technician_three">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="technician_four">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="recommend_case">
              <div className="technician_one">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technician_one">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="technician_three">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="technician_four">
                <img
                  className="technician_one_img"
                  src={"./Ellipse 2.svg"}
                  alt="wallet png"
                />
                <div className="technician_one_text_frame">
                  <div className="technician_one_case">
                    <div className="technician_one_text_case">
                      <p className="technician_one_text">Funmilayo Akin</p>
                      <img
                        className="technician_one_case_img"
                        src={"./verify.svg"}
                        alt="wallet png"
                      />
                    </div>
                    <p className="technician_one_case_text">Home cleaning</p>
                  </div>
                  <div className="technician_one_location">
                    <div className="technician_one_location_case">
                      <img
                        className="technician_one_location_img"
                        src={"./location.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_location_text">200m away</p>
                    </div>
                    <div className="technician_one_star">
                      <img
                        className="technician_one_star_img"
                        src={"./star.svg"}
                        alt="wallet png"
                      />
                      <p className="technician_one_star_text">4.5(124)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
