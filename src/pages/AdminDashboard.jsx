import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />

      <main className="admin-main">

        {/* HEADER */}
        <div className="admin-header">
          <h1>
            Welcome Back,
            <span className="admin-name"> Admin</span> 👋
          </h1>

          <p>
            Butterflies Academy Overview
          </p>
        </div>

        {/* TOP STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon purple">
                👩‍🏫
              </div>

              <span className="badge green-badge">
                +2 this month
              </span>
            </div>

            <h2>12</h2>

            <p>Teachers</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon pink">
                👶
              </div>

              <span className="badge green-badge">
                +5 this month
              </span>
            </div>

            <h2>86</h2>

            <p>Children</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon blue">
                📈
              </div>

              <span className="badge blue-badge">
                92% avg
              </span>
            </div>

            <h2>90%</h2>

            <p>Attendance Rate</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon green">
                ✅
              </div>

              <span className="badge purple-badge">
                This week
              </span>
            </div>

            <h2>84</h2>

            <p>Reports Submitted</p>
          </div>

        </div>

        {/* CHART SECTION */}
        <div className="charts-grid">

          {/* BAR CHART */}
          <div className="chart-box">

            <h3>Weekly Attendance</h3>

            <div className="bar-chart">

              <div className="bar-item">
                <div className="bar" style={{ height: "90%" }}></div>
                <span>Mon</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "88%" }}></div>
                <span>Tue</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "95%" }}></div>
                <span>Wed</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "92%" }}></div>
                <span>Thu</span>
              </div>

              <div className="bar-item">
                <div className="bar" style={{ height: "84%" }}></div>
                <span>Fri</span>
              </div>

            </div>
          </div>

          {/* LINE GRAPH */}
          <div className="chart-box">

            <h3>Monthly Reports</h3>

            <div className="line-chart">

              <div className="line one"></div>
              <div className="line two"></div>
              <div className="line three"></div>

              <div className="dot d1"></div>
              <div className="dot d2"></div>
              <div className="dot d3"></div>
              <div className="dot d4"></div>

            </div>

            <div className="weeks">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-grid">

          {/* EVENTS */}
          <div className="bottom-card">

            <h3>📅 Upcoming Events This Month</h3>

            <div className="event-item">
              <div className="event-date">
                <span>May 5</span>
              </div>

              <div>
                <h4>Spring Concert</h4>
                <p>Event</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span>May 12</span>
              </div>

              <div>
                <h4>Parent-Teacher Meeting</h4>
                <p>Meeting</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span>May 19</span>
              </div>

              <div>
                <h4>Zoo Field Trip</h4>
                <p>Trip</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span>May 25</span>
              </div>

              <div>
                <h4>Art Exhibition</h4>
                <p>Event</p>
              </div>
            </div>

          </div>

          {/* UPDATES */}
          <div className="bottom-card">

            <h3>📝 Recent Updates</h3>

            <div className="update blue-update">
              5 new enrollment applications pending
            </div>

            <div className="update yellow-update">
              3 teacher performance reviews due
            </div>

            <div className="update purple-update">
              Bus route #2 driver changed
            </div>

            <div className="update green-update">
              New food menu uploaded for May
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}