import React, { useState } from "react";
import "./transaction.css";

const Transaction = () => {
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

            <a href={"/wallet"} className="home_chat_active nav-item">
              <div className="home_chat_case">
                <img
                  src={"./receipt-text.svg"}
                  className="home_chat_img"
                  alt="chat"
                />
                <p className="home_chat_text_active">Transaction</p>
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

        <div className="wallet_balance_wrapper">
          <p className="wallet_balance_text1">Your balance</p>
          <p className="wallet_balance_text">#32,000.00</p>

          <div className="wallet_balance_img_wrapper">
            <img
              className="wallet_balance_img"
              src={"./wallet-money1.svg"}
              alt="wallet money png"
            />
          </div>

          <div className="wallet_services">
            <div className="wallet_services_topup">
              <div className="wallet_topup_wrapper">
                <img
                  className="wallet_topup_img"
                  src={"./card-send1.svg"}
                  alt="wallet money png"
                />
              </div>
              <p className="wallet_topup_text">Top-up</p>
            </div>

            <div className="wallet_services_withdraw">
              <div className="wallet_withdraw_wrapper">
                <img
                  className="wallet_withdraw_img"
                  src={"./card-receive1.svg"}
                  alt="wallet money png"
                />
              </div>
              <p className="wallet_withdraw_text">Withdrawal</p>
            </div>
          </div>
        </div>

        <div className="wallet_bar">
          <input
            className="wallet_bar_input"
            type="text"
            placeholder="Search"
          />
          <img
            className="wallet_bar_img"
            src="./search-normal.svg"
            alt="dashboard"
          />

          <select
            id="filter"
            name="filter"
            className="wallet_bar_input1"
            placeholder="Filter by"
          >
            <option value="filter">Filter by</option>
            <option value="filter">Date</option>
            <option value="filter">Status</option>
            <option value="filter">Amount</option>
            <option value="filter">Transaction ID</option>
          </select>

          <a className="wallet_bar_input2">
            <img
              className="wallet_bar_input2_img"
              src="./setting-4.svg"
              alt="dashboard"
            />
            <p className="wallet_bar_input2_text">Price range </p>
          </a>
        </div>

        <div className="transaction_id_wrapper">
          <div className="transaction_id_list">
            <p className="transaction_id_text">Transaction ID</p>
            <p className="transaction_id_text1">Technician</p>
            <p className="transaction_id_text2">Date</p>
            <p className="transaction_id_text3">Payment Method</p>
            <p className="transaction_id_text4">Status</p>
            <p className="transaction_id_text5">Amount</p>
          </div>

          <div className="transaction_id_header">
            <div className="transaction_header_list">
              <div className="transaction_header_item">
                <p className="transaction_header_item1">23452FG</p>
                <p className="transaction_header_item2">27/12/2022 8:30am</p>
                <p className="transaction_header_item3">PayStack</p>
                <p className="transaction_header_item4">23,000.00</p>
                <div className="transaction_header_item5">
                  <img
                    className="transaction_header_item5_img"
                    src="./Ellipse 12.svg"
                    alt="profile photo"
                  />
                  <div className="transaction_item_case">
                    <p className="transaction_item_case_text">Jane</p>
                    <p className="transaction_item_case_text1">
                      Fashion Manager
                    </p>
                  </div>
                </div>

                <div className="transaction_header_item6">
                  <p className="transaction_header_item6_text">Paid</p>
                </div>
              </div>
            </div>

            <div className="transaction_header_list1">
              <div className="transaction_header_item">
                <p className="transaction_header_item1">23452FG</p>
                <p className="transaction_header_item2">27/12/2022 8:30am</p>
                <p className="transaction_header_item3">PayStack</p>
                <p className="transaction_header_item4">23,000.00</p>
                <div className="transaction_header_item5">
                  <img
                    className="transaction_header_item5_img"
                    src="./Ellipse 12.svg"
                    alt="profile photo"
                  />
                  <div className="transaction_item_case">
                    <p className="transaction_item_case_text">Jane</p>
                    <p className="transaction_item_case_text1">
                      Fashion Manager
                    </p>
                  </div>
                </div>

                <div className="transaction_header_item6">
                  <p className="transaction_header_item6_text">Paid</p>
                </div>
              </div>
            </div>

            <div className="transaction_header_list2">
              <div className="transaction_header_item">
                <p className="transaction_header_item1">23452FG</p>
                <p className="transaction_header_item2">27/12/2022 8:30am</p>
                <p className="transaction_header_item3">PayStack</p>
                <p className="transaction_header_item4">23,000.00</p>
                <div className="transaction_header_item5">
                  <img
                    className="transaction_header_item5_img"
                    src="./Ellipse 12.svg"
                    alt="profile photo"
                  />
                  <div className="transaction_item_case">
                    <p className="transaction_item_case_text">Jane</p>
                    <p className="transaction_item_case_text1">
                      Fashion Manager
                    </p>
                  </div>
                </div>

                <div className="transaction_header_item6">
                  <p className="transaction_header_item6_text">Paid</p>
                </div>
              </div>
            </div>

            <div className="transaction_header_list3">
              <div className="transaction_header_item">
                <p className="transaction_header_item1">23452FG</p>
                <p className="transaction_header_item2">27/12/2022 8:30am</p>
                <p className="transaction_header_item3">PayStack</p>
                <p className="transaction_header_item4">23,000.00</p>
                <div className="transaction_header_item5">
                  <img
                    className="transaction_header_item5_img"
                    src="./Ellipse 12.svg"
                    alt="profile photo"
                  />
                  <div className="transaction_item_case">
                    <p className="transaction_item_case_text">Jane</p>
                    <p className="transaction_item_case_text1">
                      Fashion Manager
                    </p>
                  </div>
                </div>

                <div className="transaction_header_item6">
                  <p className="transaction_header_item6_text">Paid</p>
                </div>
              </div>
            </div>

            <div className="transaction_header_list4">
              <div className="transaction_header_item">
                <p className="transaction_header_item1">23452FG</p>
                <p className="transaction_header_item2">27/12/2022 8:30am</p>
                <p className="transaction_header_item3">PayStack</p>
                <p className="transaction_header_item4">23,000.00</p>
                <div className="transaction_header_item5">
                  <img
                    className="transaction_header_item5_img"
                    src="./Ellipse 12.svg"
                    alt="profile photo"
                  />
                  <div className="transaction_item_case">
                    <p className="transaction_item_case_text">Jane</p>
                    <p className="transaction_item_case_text1">
                      Fashion Manager
                    </p>
                  </div>
                </div>

                <div className="transaction_header_item6">
                  <p className="transaction_header_item6_text">Paid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
