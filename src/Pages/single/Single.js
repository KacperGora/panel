import React from 'react'
import './single.scss'
import Sidebar from '../../Layout/sidebar/Sidebar'
import Navbar from '../../Layout/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title"> Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="itemImg"
                alt=""
              ></img>
              <div className="details">
                <h1 className="itemTitle">Jan Kowalski</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">test@aaa.xx</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">123 123 123</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">
                    Ptaszkowa 20 33-333 Ptaszkowa
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Poland</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1 className="title"> Information</h1>
            <Chart aspect={3/1} title='User spending'/>
          </div>
        </div>
        <div className="bottom"> 
        <h1 className='title'>Last transactions</h1>
        <List /></div>
      </div>
    </div>
  );
}

export default Single