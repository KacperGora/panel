import React, { useContext } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import avatar from '../../Assets/face4.jpg'
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" /> English
          </div>
          <div onClick={()=> 
          dispatch({type: 'TOGGLE'})} className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src={avatar} alt="Profile picture" className="avatar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
