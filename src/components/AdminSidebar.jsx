import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/AdminSidebar.css";

import logo from "../assets/logo.png";

const navItems = [
  {
    label: "Dashboard",
    icon: "🏠",
    path: "/AdminDashboard",
  },

  {
    label: "Manage Teachers",
    icon: "👩‍🏫",
    path: "/ManageTeachers",
  },

  {
    label: "Manage Children",
    icon: "👶",
    path: "/ManageChildren",
  },

  {
    label: "Food Menu",
    icon: "🍽️",
    path: "/FoodMenu",
  },

  {
    label: "Events & Activities",
    icon: "🎉",
    path: "/EventsActivities",
  },

  {
    label: "Bus Subscription",
    icon: "🚌",
    path: "/BusSubscription",
  },

  {
    label: "Notifications",
    icon: "🔔",
    path: "/AdminNotifications",
  },
];

export default function AdminSidebar() {

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {

    localStorage.clear();

    sessionStorage.clear();

    navigate("/", { replace: true });
  };

  return (
    <aside className="admin-sidebar">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="admin-sidebar-logo">

          <div className="admin-logo-icon">

            <img
              src={logo}
              alt="Logo"
              className="admin-logo-image"
            />

          </div>

          <div>

            <div className="admin-logo-title">
              Butterflies
            </div>

            <div className="admin-logo-title">
              Academy
            </div>

            <div className="admin-logo-sub">
              Growing Bright Futures
            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="admin-sidebar-nav">

          {navItems.map((item) => (

            <div
              key={item.path}
              className={`admin-sidebar-item ${
                location.pathname === item.path
                  ? "admin-sidebar-active"
                  : ""
              }`}
              onClick={() => navigate(item.path)}
            >

              <span className="admin-sidebar-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>

            </div>
          ))}

        </nav>

      </div>

      {/* BOTTOM */}
      <div className="admin-sidebar-bottom">

        {/* SETTINGS */}
        <div
          className={`admin-sidebar-item ${
            location.pathname === "/AdminSettings"
              ? "admin-sidebar-active"
              : ""
          }`}
          onClick={() => navigate("/AdminSettings")}
        >

          <span className="admin-sidebar-icon">
            ⚙️
          </span>

          <span>Settings</span>

        </div>

        {/* LOGOUT */}
        <div
          className="admin-sidebar-item admin-logout-item"
          onClick={handleLogout}
        >

          <span className="admin-sidebar-icon">
            ↩️
          </span>

          <span>Logout</span>

        </div>

      </div>
    </aside>
  );
}