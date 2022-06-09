import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      {/* sidebarTop */}
      <div className="sidebar_top">
        <img
          src="https://www.teahub.io/photos/full/26-263385_light-colour-background-images-hd-light-color-background.jpg"
          alt="ERROR"
        />
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
        <div className="sidebar_stat">
          <p>Views on Post </p>
          <p className="sidebar_statNumber">2,400</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("Programming")}
        {recentItem("Software")}
        {recentItem("Front End")}
        {recentItem("Back End")}
      </div>
    </div>
  );
}

export default Sidebar;
