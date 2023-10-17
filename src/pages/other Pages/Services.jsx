import React, { useState } from "react";
import "./services.css";

const Services = () => {
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

            <a href={"/services"} className="home_profile1 nav-item">
              <div className="home_profile_case1">
                <img
                  src={"./task-square.svg"}
                  className="home_profile_img"
                  alt="dashboard"
                />
                <p className="home_profile_text1">Services</p>
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
            <p className="dashboard_Services_text">Category</p>
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
        <div className="responsive-container1">
          <div className="category_items">
            <div className="category_all"></div>
            <p className="category_all_text">All</p>
          </div>
          <div className="category_items">
            <div className="category_home">
              <img
                className="category_home_img"
                src={"./broom 1.svg"}
                alt=" png"
              />
            </div>
            <p className="category_all_text">Home Cleaning</p>
          </div>
          <div className="category_items">
            <div className="category_home">
              <img
                className="category_tailor_img"
                src={"./sewing.svg"}
                alt=" png"
              />
            </div>
            <p className="category_all_text">Tailoring</p>
          </div>{" "}
          <div className="category_items">
            <div className="category_home">
              <img
                className="category_barber_img"
                src={"./hairdresser.svg"}
                alt=" png"
              />
            </div>
            <p className="category_all_text">Barber</p>
          </div>{" "}
          <div className="category_items">
            <div className="category_home">
              <img
                className="category_repair_img"
                src={"./air-conditioner 1.svg"}
                alt=" png"
              />
            </div>
            <p className="category_all_text">AC Repairer</p>
          </div>{" "}
          <div className="category_items">
            <div className="category_home">
              <img
                className="category_mechanic_img"
                src={"./mechanic.svg"}
                alt=" png"
              />
            </div>
            <p className="category_all_text">Mechanic</p>
          </div>
          <div className="category_items">
            <div className="category_home"></div>
            <p className="category_all_text">Cobbler</p>
          </div>
        </div>

        {/*----- Saved Jobs -----*/}

        <div className="service_saved">
          <div className="service_saved_frame">
            <p className="service_saved_text">Saved Jobs</p>
            <div className="service_saved_case">
              <div className="service_saved_sub">
                <div className="service_sub_case">
                  <img
                    className="service_saved_img"
                    src={"./Frame 86.svg"}
                    alt=" png"
                  />
                  <div className="service_sublet">
                    <div className="service_sublet_case">
                      <div className="service_sublet_main">
                        <p className="service_sublet_text">Adewale Adeniyi</p>
                        <img
                          className="service_sublet_img"
                          src={"./verify2.svg"}
                          alt=" png"
                        />
                      </div>

                      <p className="service_sublet_text1">
                        Motor mechanics (Toyota)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ----second table*/}

              <div className="service_saved_sub">
                <div className="service_sub_case">
                  <img
                    className="service_saved_img"
                    src={"./Frame 87.svg"}
                    alt=" png"
                  />
                  <div className="service_sublet">
                    <div className="service_sublet_case">
                      <div className="service_sublet_main">
                        <p className="service_sublet_text">Adewale Adeniyi</p>
                        <img
                          className="service_sublet_img"
                          src={"./verify2.svg"}
                          alt=" png"
                        />
                      </div>

                      <p className="service_sublet_text1">
                        Motor mechanics (Toyota)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ----Third table*/}

              <div className="service_saved_sub">
                <div className="service_sub_case">
                  <img
                    className="service_saved_img"
                    src={"./Frame 86.svg"}
                    alt=" png"
                  />
                  <div className="service_sublet">
                    <div className="service_sublet_case">
                      <div className="service_sublet_main">
                        <p className="service_sublet_text">Mitch Aloo</p>
                        <img
                          className="service_sublet_img"
                          src={"./verify2.svg"}
                          alt=" png"
                        />
                      </div>

                      <p className="service_sublet_text1">
                        Motor mechanics (Toyota)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service_saved_sub">
                <div className="service_sub_case">
                  <img
                    className="service_saved_img"
                    src={"./Frame 86.svg"}
                    alt=" png"
                  />
                  <div className="service_sublet">
                    <div className="service_sublet_case">
                      <div className="service_sublet_main">
                        <p className="service_sublet_text">Adewale Adeniyi</p>
                        <img
                          className="service_sublet_img"
                          src={"./verify2.svg"}
                          alt=" png"
                        />
                      </div>

                      <p className="service_sublet_text1">
                        Motor mechanics (Toyota)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----Recommend technicians*/}
        <div className="recommended_main1">
          <div className="recommended_main_frame">
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

export default Services;
