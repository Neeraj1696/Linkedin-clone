import React from "react";

import "./App.css";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* body */}
      {/* side bar left */}
      <Sidebar />
      {/* side bar right */}
    </div>
  );
}

export default App;
