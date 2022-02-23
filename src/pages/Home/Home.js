import React from "react";
import { useSelector } from "react-redux";
import Login from "../../components/Login/Login";
import Header from "../../components/Header/Header";
import "../../App.css";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
