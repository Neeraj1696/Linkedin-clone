import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="icon" />}
      {avatar && <Avatar className="header_option_icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
