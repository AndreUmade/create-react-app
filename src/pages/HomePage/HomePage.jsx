import React from "react";
import "./homepage.css";

const HomePage = () => {
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

      <div className="dashboard_main">
        <p className="dashboard_main_text">OVERVIEW</p>

        <input
          className="dashboard_main_Input"
          type="text"
          placeholder="Search.."
        />
        <img className="dashboard_main_img" src="./search-normal.svg" alt="" />

        <div className="dashboard_bell">
          <img className="dashboard_bell_img" src="./notification.svg" alt="" />
        </div>

        <div className="dashboard_notif">
          <img className="dashboard_notif_img" src="./Frame 258.svg" alt="" />
          <input id="toggler" type="checkbox" />
          <label for="toggler">
            <img
              className="dashboard_notif_img1"
              src={"./arrow-down.svg"}
              alt="arrow-down png"
            />
          </label>
        </div>

        <div className="home_metrics">
          <div className="home_metrics_jobs">
            <img
              className="home_metrics_jobs_img"
              src="./Group green.svg"
              alt="positive"
            />

            <p className="home_metrics_jobs_text">12</p>
            <p className="home_metrics_jobs_text1">No Jobs</p>
          </div>

          <div className="home_metrics_balance">
            <img
              className="home_metrics_balance_img"
              src="./Group green.svg"
              alt="positive"
            />

            <p className="home_metrics_balance_text">$2000.00</p>
            <p className="home_metrics_balance_text1">Balance</p>
          </div>

          <div className="home_metrics_revenue">
            <img
              className="home_metrics_revenue_img"
              src="./Group green.svg"
              alt="positive"
            />

            <p className="home_metrics_revenue_text">$2000.00</p>
            <p className="home_metrics_revenue_text1">Revenue</p>
          </div>

          <div className="home_metrics_refund">
            <img
              className="home_metrics_refund_img"
              src="./Group blue.svg"
              alt="positive"
            />

            <p className="home_metrics_refund_text">$2000.00</p>
            <p className="home_metrics_refund_text1">Refund</p>
          </div>
        </div>

        <div className="home_request_main">
          <div className="home_request_frame">
            <p className="home_requests_text">Requests</p>
          </div>

          <div className="home_service_frame">
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
          </div>

          <div className="home_service_frame2">
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
          </div>
        </div>

        <div className="review_main">
          <div className="review_frame">
            <p className="review_frame_text">Reviews</p>
            <div className="review_info">
              <div className="review_card">
                <div className="review_card_case">
                  <p className="review_card_text">2 days ago</p>
                  <div className="review_profile">
                    <img
                      className="review_profile_img"
                      src="./Ellipse 2.svg"
                      alt="profile"
                    />
                    <div className="review_profile_case">
                      <p className="review_profile_case_text">Janet Adeniyi</p>
                      <div className="review_profile_star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="review_info_text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mollis
                  pulvinar proin, parturient conubia congue facilisis magna cras
                  placerat accumsan turpis lacus malesuada
                </p>
              </div>

              <div className="review_card1">
                <div className="review_card_case">
                  <p className="review_card_text">2 days ago</p>
                  <div className="review_profile">
                    <img
                      className="review_profile_img"
                      src="./Ellipse 2.svg"
                      alt="profile"
                    />
                    <div className="review_profile_case">
                      <p className="review_profile_case_text">Janet Adeniyi</p>
                      <div className="review_profile_star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="review_info_text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mollis
                  pulvinar proin, parturient conubia congue facilisis magna cras
                  placerat accumsan turpis lacus malesuada
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home_pricing">
          <p className="home_pricing_text">My service price</p>
          <p className="home_pricing_text1">Current Price/hr</p>
          <p className="home_pricing_text2">$20.00</p>
          <p className="home_pricing_text3">New Price/hr</p>
          <div className="home_pricing_case">
            <p className="home_pricing_text4">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
