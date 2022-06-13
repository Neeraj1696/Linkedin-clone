import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Pages/Feed";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Sidebar from "./Pages/Sidebar";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
