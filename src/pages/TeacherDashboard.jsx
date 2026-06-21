import React from "react";
import Sidebar from "../components/TeacherSidebar";
import "../styles/TeacherDashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <main className="main-content">
        {/* HEADER */}
        <div className="dashboard-header">
          <h1>
            Welcome Back,
            <span className="teacher-name">
              {" "}User
            </span>
            👋
          </h1>
          <p>Here’s what’s happening with your class today</p>
        </div>

        {/* MIDDLE GRID */}
        <div className="middle-grid">
          {/* OVERVIEW */}
          <div className="box">
            <h2>Class Overview</h2>

            <div className="overview-row">
              <span>Total Students</span>
              <strong>24</strong>
            </div>

            <div className="overview-row">
              <span>Present Today</span>
              <strong className="green">22</strong>
            </div>

            <div className="overview-row">
              <span>Absent</span>
              <strong className="red-text">2</strong>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <p className="attendance-text">92% Attendance Rate</p>
          </div>

          {/* ACTIVITIES */}
          <div className="box">
            <h2>Today's Activities</h2>

            <div className="activity">
              <div className="dot dot1"></div>
              <div>
                <h4>Morning Circle</h4>
                <p>Welcome & Songs</p>
              </div>
            </div>

            <div className="activity">
              <div className="dot dot2"></div>
              <div>
                <h4>Art Time</h4>
                <p>Butterfly Painting</p>
              </div>
            </div>

            <div className="activity">
              <div className="dot dot3"></div>
              <div>
                <h4>Lunch</h4>
                <p>Chicken & Vegetables</p>
              </div>
            </div>

            <div className="activity">
              <div className="dot dot4"></div>
              <div>
                <h4>Sports Day</h4>
                <p>Outdoor Activities</p>
              </div>
            </div>
          </div>

          {/* ALERTS */}
          <div className="box">
            <h2>Important Alerts</h2>

            <div className="alert red-alert">
              Emma has peanut allergy
            </div>

            <div className="alert yellow-alert">
              Liam needs medication at 2PM
            </div>

            <div className="alert blue-alert">
              Field trip permission needed
            </div>
          </div>
        </div>

        {/* BEHAVIOR SUMMARY */}
        <div className="box bottom-box">
          <h2>Weekly Behavior Summary</h2>

          <div className="behavior-summary-grid">
            <div className="behavior-card green">
              <div className="emoji">😊</div>
              <h2>18</h2>
              <p>Excellent</p>
            </div>

            <div className="behavior-card blue-bg">
              <div className="emoji">🙂</div>
              <h2>5</h2>
              <p>Good</p>
            </div>

            <div className="behavior-card yellow">
              <div className="emoji">😐</div>
              <h2>1</h2>
              <p>Fair</p>
            </div>

            <div className="behavior-card red-bg">
              <div className="emoji">☹️</div>
              <h2>0</h2>
              <p>Needs Work</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}