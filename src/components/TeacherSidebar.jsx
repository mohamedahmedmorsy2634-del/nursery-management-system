import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/TeacherSidebar.css";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Dashboard", icon: "🏠", path: "/TeacherDashboard" },
  { label: "Attendance", icon: "📋", path: "/Attendance" },
  { label: "Behavior Reports", icon: "📊", path: "/Behavior" },
  { label: "Schedule", icon: "📅", path: "/Schedule" },
  { label: "Health Notes", icon: "❤️", path: "/HealthNotes" },
  { label: "Notifications", icon: "🔔", path: "/Notifications" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {

  // clear saved login/session
  localStorage.clear();
  sessionStorage.clear();

  // redirect to login page
  navigate("/", { replace: true });
};

  return (
    <aside className="sidebar">
      {/* TOP */}
      <div>
        <div className="sidebar-logo">
          <div className="logo-icon">
            <img
              src={logo}
              alt="Logo"
              className="sidebar-logo-image"
          />
      </div>

          <div>
            <div className="logo-title">Butterflies</div>
            <div className="logo-title">Academy</div>
            <div className="logo-sub">Growing Bright Futures</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`sidebar-item ${
                location.pathname === item.path ? "sidebar-active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="sidebar-bottom">
        <div
            className={`sidebar-item ${
              location.pathname === "/Settings"
                ? "sidebar-active"
                : ""
            }`}
            onClick={() => navigate("/Settings")}
        >
          <span className="sidebar-icon">⚙️</span>
          <span>Settings</span>
        </div>

        <div
        className="sidebar-item logout-item"
        onClick={handleLogout}
        >
          <span className="sidebar-icon">↩️</span>
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}