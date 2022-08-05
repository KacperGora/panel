import React, { useEffect, useState } from "react";
import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import Spinner from "../UI/spinner/Spinner";
const Featured = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [earning, setEarning] = useState(0);
  const [status, setStatus] = useState(null);
  const [week, setWeek] = useState();
  function getLastWeeksDate() {
    const now = new Date();

    setWeek(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7));
  }
  useEffect(() => {
    getLastWeeksDate();
  }, []);

  useEffect(() => {
    let todayMeetings = [];
    let weeklyMeetings = [];
    let monthlyMeetings = [];

    const fetchMeetings = async () => {
      const todayQuery = query(collection(db, "meetings"));
      const todayData = await getDocs(todayQuery);
      todayData.forEach((doc) => {
        if (
          new Date(doc.data().date).toLocaleDateString() ===
          new Date().toLocaleDateString()
        ) {
          todayMeetings.push(doc.data().serviceAmount);
        }
      });
      const dailyIncome = todayMeetings.reduce((total, item) => {
        return total + item;
      }, 0);

      setEarning(dailyIncome);
      setIsLoading(false);
    };
    fetchMeetings();
  }, []);
  const dailyTarget = 1500;
  const weeklyTarget = dailyTarget * 5;
  const progressBar = (earning / dailyTarget) * 100;
  const monthlyTarget = weeklyTarget * 4;
  useEffect(() => {
    if (progressBar > 100) {
      setStatus("positive");
    } else setStatus("negative");
  }, [progressBar]);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Przychód</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          {isLoading ? (
            <Spinner />
          ) : (
            <CircularProgressbar
              value={progressBar}
              text={`${progressBar} %`}
              strokeWidth="3"
            />
          )}
        </div>
        <p className="title">Dzisiejszy przychód</p>
        <p className="amount">{earning} PLN</p>
        <p className="description">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="summaryContainerLeft">
            <div className="item">
              <div className="itemTitle">
                <b>Target</b>
              </div>
              <div className={`itemResult`}>
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                {/* <div className="resultAmount">{dailyTarget}</div> */}
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Dzisiaj</div>
              <div className={`itemResult`}>
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{`${dailyTarget} PLN`}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Tydzień</div>
              <div className="itemResult">
                {/* <KeyboardArrowDownOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{`${weeklyTarget} PLN`}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Miesiąc</div>
              <div className="itemResult">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{`${monthlyTarget} PLN`}</div>
              </div>
            </div>
          </div>
          <div className="summaryContainerRight">
            <div className="item">
              <div className="itemTitle">
                <b>Wykonano</b>
              </div>
              <div className={`itemResult ${status}`}>
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                {/* <div className="resultAmount">{dailyTarget}</div> */}
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Dzisiaj</div>
              <div className={`itemResult ${status}`}>
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{`${earning} PLN`}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Tydzień</div>
              <div className="itemResult negative">
                {/* <KeyboardArrowDownOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Miesiąc</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
