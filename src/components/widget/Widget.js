import React, { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { query, where, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
function Widget({ type }) {
  const [diffState, setDiffState] = useState(null);
  const [amount, setAmount] = useState(null);
  const [diff, setDiff] = useState(null);
  let data;

  switch (type) {
    case "user":
      data = {
        title: "Nowi użytkownicy ",
        isMoney: false,
        query: "users",
        link: "Wszyscy użytkownicy",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ backgroundColor: "rgba(128,0,128,0.2", color: "purple" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Zakończone wizyty",
        query: "meetings",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(255,0,0,0.2", color: "crimson" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        query: "earnings",
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218,165,32,0.2",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        query: "products",
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0,128,0,0.2", color: "green" }}
          />
        ),
      };
      break;

    default:
      break;
  }
  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, "users"),
        where("timestamp", "<=", today),
        where("timestamp", ">", lastMonth)
      );

      // // const prevMonthQuery = query(
      // //   collection(db, "users"),
      // //   where("timestamp", "<=", lastMonth),
      // //   where("timestamp", ">", prevMonth)
      // // );

      const lastMonthData = await getDocs(lastMonthQuery);

      // const prevMonthData = await getDocs(prevMonthQuery);
     
      
   
      // setDiff(
      //   (
      //     ((lastMonthData.docs.length - prevMonthData.docs.length) /
      //       prevMonthData.docs.length) *
      //     100
      //   ).toFixed(1)
      // );
    };

    fetchData();
  }, []);
  // console.log(diff);
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "PLN "}
          {amount}
        </span>
        <Link className="link" to={`/${data.query.toLocaleLowerCase()}`}>
          <span className="link">{data.link}</span>
        </Link>
      </div>

      <div className="right">
        <div
          className={`percentage ${
            +diff && diff < 0 ? "negative" : "positive"
          }`}
        >
          {!+diff || diff === "Infinity" ? (
            ""
          ) : diff > 0 ? (
            <KeyboardArrowUpOutlinedIcon />
          ) : (
            <KeyboardArrowDownOutlinedIcon />
          )}

          {diff === "Infinity" || !+diff ? "bd." : `${diff}%`}
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
