import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

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
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      {/* search */}
      {/* icons */}
      {/* right */}
    </div>
  );
}

export default Header;
