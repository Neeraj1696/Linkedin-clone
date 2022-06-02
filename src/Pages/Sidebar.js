import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* sidebarTop */}
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Neeraj Yadav</h2>
        <h4>Test123@gmail.com</h4>
      </div>
      {/* sidebarBottom */}
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed You</p>
          <p className="sidebar_statNumber">2,500</p>
        </div>
        <div className="sidebar_stat">Views on Post </div>
        <div className="sidebar_statNumber">2,400</div>
      </div>
    </div>
  );
}

export default Sidebar;
