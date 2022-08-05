import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import Navbar from "../../Layout/navbar/Navbar";
import Sidebar from "../../Layout/sidebar/Sidebar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>

        <div className="charts">
          <Featured />
          <Chart title="Last 6 months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Ostatnie umówione wizyty</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
