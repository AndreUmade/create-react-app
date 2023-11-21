import "./profile.css";
import React, { useState } from "react";

const Profile = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
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

            <a href={"/"} className="home_transact nav-item">
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
          <p className="profile_category_text">Account</p>
          <a href={"/profile2"} className="profile_category_text1">
            Wallet
          </a>
          <div className="profile_category_line"></div>
        </div>

        {/*-----second top -----*/}

        <div className="category_main_case">
          <p className="category_main_text">Personal Information</p>
          <div className="category_input">
            <div className="category_input_case">
              {" "}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Uploaded"
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  />
                )}
              </div>
              <img
                className="category_input_img"
                src={process.env.PUBLIC_URL + "camera.svg"}
                alt="profile png"
              />
            </div>
          </div>

          <div className="profile_input_wrapper">
            <div className="profile_firstnlast">
              <div className="profile_firstname">
                <label className="profile_firstname_text" htmlFor="first-name">
                  First Name
                </label>
                <input
                  className="profile_firstname_input"
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="profile_lastname">
                <label className="profile_lastname_text" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  className="profile_lastname_input"
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="profile_email">
              <label className="profile_email_text" htmlFor="email">
                Email
              </label>
              <input
                className="profile_email_input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="profile_phone">
              <label className="profile_phone_text" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="profile_phone_input"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="profile_password password-toggle">
              <label className="profile_password_text" htmlFor="password">
                Password
              </label>
              <input
                className="profile_password_input"
                type={formData.showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <span
                className="profile_toggle toggle-password"
                onClick={togglePasswordVisibility}
              >
                {formData.showPassword ? "🚫 " : "👁️"}
              </span>

              <a className="profile_button">
                <p className="profile_button_text">Change Password</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
