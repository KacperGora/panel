import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">adminLogo</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Panel administratora</span>
            </Link>
          </li>
          <p className="title">List</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Użytkownicy</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LocalGroceryStoreIcon className="icon" />
              <span>Usługi</span>
            </li>
          </Link>
          <Link to="/meetings" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Umówione wizyty</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful links</p>
          <li>
            <SsidChartIcon className="icon" />
            <span>Statystyki</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Powiadomienia</span>
          </li>
          <p className="title">Service</p>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span>Ustawienia</span>
          </li>
          <p className="title">User</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Profil</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Wyloguj</span>
          </li>
        </ul>{" "}
      </div>{" "}
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
