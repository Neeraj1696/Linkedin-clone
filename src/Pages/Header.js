import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      {/* image */}
      <div className="header_left">
        <img
          src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"
          alt="Error"
        />
        <div className="header_search">
          {/* search */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://w0.peakpx.com/wallpaper/212/254/HD-wallpaper-alone-boy-no-face-viral-pic-amit-raftaar-sexy-boy.jpg"
          title="ITS ME"
        />
      </div>
      {/* icons */}
      {/* right */}
    </div>
  );
}

export default Header;
