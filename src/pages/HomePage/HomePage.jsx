import React from "react";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="home_main">
      <div className="home_sidenave">
        <div className="home_navs">
          <div className="home_dasboard">
            <div className="home_dasboard_case">
              <img src={""} className="home_dasboard_img" alt="logo" />
              <p className="home_dasboard_text">Dashboard</p>
            </div>
          </div>

          <div className="home_profile">
            <div className="home_dasboard_case">
              <img src={""} className="home_dasboard_img" alt="dashboard" />
              <p className="home_dasboard_text">Dashboard</p>
            </div>
          </div>

          <div className="home_profile">
            <div className="home_profile_case">
              <img src={""} className="home_profile_img" alt="profile" />
              <p className="home_profile_text">Dashboard</p>
            </div>
          </div>
        </div>
        <img
          className="home_logo"
          src={process.env.PUBLIC_URL + "logo 2.svg"}
          alt="logo"
        />
      </div>
    </div>
  );
};
export default HomePage;
