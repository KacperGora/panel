import React from "react";
import Navbar from "../../Layout/navbar/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets"></div>
      </div>
    </div>
  );
};

export default Home;
