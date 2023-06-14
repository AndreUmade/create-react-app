import React from "react";
import "./transaction.css";

const Transaction = () => {
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

          <a href={"/request"} className="home_request">
            <div className="home_request_case">
              <img
                src={"./request.svg"}
                className="home_request_img"
                alt="profile"
              />
              <p className="home_request_text">Request</p>
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

          <a href={"wallet"} className="home_transact_active">
            <div className="home_transact_case">
              <img
                src={"./transaction active.svg"}
                className="home_transact_img"
                alt="transact"
              />
              <p className="home_transact_text_active">Transaction</p>
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
        <p className="dashboard_main_text">Wallet</p>

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

      <div className="wallet_balance_wrapper">
        <p className="wallet_balance_text">#32,000.00</p>
        <p className="wallet_balance_text1">Your balance</p>

        <div className="wallet_balance_img_wrapper">
          <img
            className="wallet_balance_img"
            src={"./wallet-money.svg"}
            alt="wallet money png"
          />
        </div>

        <div className="wallet_services">
          <div className="wallet_services_topup">
            <div className="wallet_topup_wrapper">
              <img
                className="wallet_topup_img"
                src={"./card-receive.svg"}
                alt="wallet money png"
              />
            </div>
            <p className="wallet_topup_text">Top-up</p>
          </div>

          <div className="wallet_services_withdraw">
            <div className="wallet_withdraw_wrapper">
              <img
                className="wallet_withdraw_img"
                src={"./card-receive.svg"}
                alt="wallet money png"
              />
            </div>
            <p className="wallet_withdraw_text">Top-up</p>
          </div>
        </div>
      </div>

      <div className="wallet_bar">
        <input className="wallet_bar_input" type="text" placeholder="Search" />
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
          <option value="filter">Saab</option>
          <option value="filter">Fiat</option>
          <option value="filter">Audi</option>
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
                  <p className="transaction_item_case_text1">Fashion Manager</p>
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
                  <p className="transaction_item_case_text1">Fashion Manager</p>
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
                  <p className="transaction_item_case_text1">Fashion Manager</p>
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
                  <p className="transaction_item_case_text1">Fashion Manager</p>
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
                  <p className="transaction_item_case_text1">Fashion Manager</p>
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
  );
};
export default Transaction;
