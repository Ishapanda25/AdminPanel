import React from "react";
import {
  SupervisorAccount,
  Language,
  NotificationsNone,
  Settings,
} from "@mui/icons-material/";

import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="avatar.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
