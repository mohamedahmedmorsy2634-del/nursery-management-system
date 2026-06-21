import React, { useState } from "react";
import Sidebar from "../components/TeacherSidebar";
import "../styles/Notifications.css";

const allNotifications = [
  {
    id: 1,
    type: "Health",
    icon: "❤️",
    iconBg: "icon-red",
    title: "Health Alert - Emma Wilson",
    message: "Remember: Emma has severe peanut allergy. Lunch today contains peanuts - alternative meal prepared.",
    time: "10 minutes ago",
    badge: "Critical",
    badgeType: "badge-critical",
    borderColor: "border-red",
    unread: true,
  },
  {
    id: 2,
    type: "Attendance",
    icon: "⚠️",
    iconBg: "icon-yellow",
    title: "Attendance Alert",
    message: "Noah Davis and Mason Lee are absent today. Parents have been notified.",
    time: "2 hours ago",
    badge: "High Priority",
    badgeType: "badge-high",
    borderColor: "border-yellow",
    unread: true,
  },
  {
    id: 3,
    type: "Events",
    icon: "📅",
    iconBg: "icon-purple",
    title: "Upcoming Event Reminder",
    message: "Spring Concert on May 5th - only 6 days away! Please review the program schedule.",
    time: "3 hours ago",
    badge: null,
    borderColor: "border-none",
    unread: false,
  },
  {
    id: 4,
    type: "Reports",
    icon: "📄",
    iconBg: "icon-purple",
    title: "Weekly Reports Due",
    message: "Behavior reports for this week are due by Friday 5:00 PM. 12 reports completed, 12 pending.",
    time: "5 hours ago",
    badge: null,
    borderColor: "border-none",
    unread: false,
  },
  {
    id: 5,
    type: "Health",
    icon: "❤️",
    iconBg: "icon-yellow",
    title: "Medication Reminder - Liam Johnson",
    message: "Asthma medication due at 2:00 PM today for Liam Johnson.",
    time: "1 day ago",
    badge: "High Priority",
    badgeType: "badge-high",
    borderColor: "border-yellow",
    unread: false,
  },
  {
    id: 6,
    type: "Events",
    icon: "📅",
    iconBg: "icon-purple",
    title: "Field Trip Permission Forms",
    message: "Zoo field trip on May 18th - 5 permission forms still pending. Please follow up with parents.",
    time: "2 days ago",
    badge: null,
    borderColor: "border-none",
    unread: false,
  },
];

const tabs = ["All", "Health", "Attendance", "Events", "Reports"];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("All");
  const [notifications, setNotifications] = useState(allNotifications);

  const filtered =
    activeTab === "All"
      ? notifications
      : notifications.filter((n) => n.type === activeTab);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="main-content">
        <div className="notif-header">
          <div>
            <h1 className="notif-title">Notifications</h1>
            <p className="notif-subtitle">
              Stay updated with important alerts and reminders
            </p>
          </div>
          <button className="mark-read-btn" onClick={markAllRead}>
            Mark All as Read
          </button>
        </div>

        {/* Tabs */}
        <div className="notif-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`notif-tab ${activeTab === tab ? "notif-tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <div className="notif-list">
          {filtered.map((n) => (
            <div key={n.id} className={`notif-item ${n.borderColor}`}>
              <div className={`notif-icon-wrap ${n.iconBg}`}>
                <span className="notif-icon">{n.icon}</span>
              </div>
              <div className="notif-body">
                <div className="notif-row">
                  <span className="notif-item-title">{n.title}</span>
                  {n.unread && <span className="notif-dot" />}
                </div>
                <p className="notif-message">{n.message}</p>
                <div className="notif-footer">
                  <span className="notif-time">🕐 {n.time}</span>
                  {n.badge && (
                    <span className={`notif-badge ${n.badgeType}`}>
                      {n.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}