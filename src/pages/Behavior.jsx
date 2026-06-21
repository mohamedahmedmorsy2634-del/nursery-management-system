import React, { useState } from "react";
import Sidebar from "../components/TeacherSidebar";
import "../styles/Behavior.css";


const reports = [
  {
    child: "Emma Wilson",
    date: "Apr 25, 2026",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    child: "Liam Johnson",
    date: "Apr 25, 2026",
    stars: "⭐⭐⭐⭐",
  },
  {
    child: "Olivia Brown",
    date: "Apr 24, 2026",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    child: "Noah Davis",
    date: "Apr 24, 2026",
    stars: "⭐⭐⭐",
  },
];

export default function Behavior() {
  const [rating, setRating] = useState(5);

  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <main className="main-content">
        <div className="behavior-header">
          <h1 className="behavior-title">Weekly Behavior Report</h1>
          <p className="behavior-subtitle">
            Track and document student progress
          </p>
        </div>

        <div className="behavior-grid">
          {/* LEFT */}
          <div className="behavior-card">
            <h3 className="card-title">Create New Report</h3>

            <div className="form-group">
              <label>Select Child</label>

              <select className="behavior-input">
                <option>Emma Wilson</option>
                <option>Liam Johnson</option>
                <option>Olivia Brown</option>
              </select>
            </div>

            <div className="form-group">
              <label>Week Ending</label>

              <input
                type="date"
                className="behavior-input"
              />
            </div>

            <div className="form-group">
              <label>Overall Rating</label>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${rating >= star ? "active-star" : ""}`}
                    onClick={() => setRating(star)}
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>

            <div className="behavior-two-cols">
              <div className="form-group">
                <label>Social Skills</label>

                <select className="behavior-input">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                </select>
              </div>

              <div className="form-group">
                <label>Listening Skills</label>

                <select className="behavior-input">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                </select>
              </div>

              <div className="form-group">
                <label>Participation</label>

                <select className="behavior-input">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                </select>
              </div>

              <div className="form-group">
                <label>Following Rules</label>

                <select className="behavior-input">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Notes & Comments</label>

              <textarea
                className="behavior-textarea"
                placeholder="Share observations about the child's week..."
              />
            </div>

            <div className="upload-box">
              <div className="upload-icon">📷</div>
              <p>Click to upload photo</p>
            </div>

            <button className="submit-btn">
              ✈ Submit Report
            </button>
          </div>

          {/* RIGHT */}
          <div className="recent-card">
            <h3 className="card-title">Recent Reports</h3>

            <div className="recent-list">
              {reports.map((report, index) => (
                <div key={index} className="recent-item">
                  <div>
                    <div className="recent-name">{report.child}</div>
                    <div className="recent-date">{report.date}</div>
                  </div>

                  <div className="recent-stars">
                    {report.stars}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}