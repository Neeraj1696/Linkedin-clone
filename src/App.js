import React from "react";

import "./App.css";
import Feed from "./Pages/Feed";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* side bar left */}
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      {/* body */}
      {/* side bar right */}
    </div>
  );
}

export default App;
