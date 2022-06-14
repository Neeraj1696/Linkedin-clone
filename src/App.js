import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Pages/Feed";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Sidebar from "./Pages/Sidebar";

import Widget from "./Pages/Widget";
import "./App.css";
// import { auth } from "firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChange((userAuth) => {
  //     if (userAuth) {
  //       // user Login
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoUrl,
  //         })
  //       );
  //     } else {
  //       // user is logout
  //       dispatch(logout());
  //     }
  //   });
  // });
  return (
    <div className="app">
      <Header />
      {user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
