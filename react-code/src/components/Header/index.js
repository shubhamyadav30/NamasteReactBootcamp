import React from "react";
import "./styles.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={require("./assets/teamLogo.jpg")}
          height={30}
          width={30}
          alt="teamLogo"
        />
      </div>
      <div className="search">
        <label for="search" className="search-label"></label>
        <input placeholder="search something" />
      </div>
      <div className="user-icon">
        <img
          src={require("./assets/user.png")}
          height={30}
          width={30}
          alt="userIcon"
        />
      </div>
    </div>
  );
};
export default Header;
