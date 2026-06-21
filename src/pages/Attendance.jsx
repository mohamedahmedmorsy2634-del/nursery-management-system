import React from "react";
import Sidebar from "../components/TeacherSidebar";
import "../styles/Attendance.css";

const students = [
  {
    name: "Emma Wilson",
    code: "QR-001",
    time: "08:10 AM",
    present: true,
  },
  {
    name: "Liam Johnson",
    code: "QR-002",
    time: "08:25 AM",
    present: true,
  },
  {
    name: "Olivia Brown",
    code: "QR-003",
    time: "08:45 AM",
    present: true,
  },
  {
    name: "Noah Davis",
    code: "QR-004",
    time: "",
    present: false,
  },
  {
    name: "Ava Martinez",
    code: "QR-005",
    time: "08:20 AM",
    present: true,
  },
  {
    name: "Ethan Garcia",
    code: "QR-006",
    time: "08:15 AM",
    present: true,
  },
  {
    name: "Sophia Rodriguez",
    code: "QR-007",
    time: "08:40 AM",
    present: true,
  },
  {
    name: "Mason Lee",
    code: "QR-008",
    time: "",
    present: false,
  },
];

export default function Attendance() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <main className="main-content">
        <div className="attendance-header">
          <h1 className="attendance-title">Attendance Tracking</h1>
          <p className="attendance-subtitle">
            Scan QR codes or mark attendance manually
          </p>
        </div>

        <div className="attendance-grid">
          {/* LEFT */}
          <div>
            <div className="attendance-card">
              <h3 className="attendance-card-title">QR Scanner</h3>

              <div className="scanner-box">
                <div className="scanner-icon">📱</div>
                <p className="scanner-text">Ready to scan</p>
              </div>

              <button className="scan-btn">
                Start Scanning
              </button>
            </div>

            <div className="summary-card">
              <h3 className="attendance-card-title">
                Today's Summary
              </h3>

              <div className="summary-row">
                <span>Total Students</span>
                <span>24</span>
              </div>

              <div className="summary-row present">
                <span>🟢 Present</span>
                <span>22</span>
              </div>

              <div className="summary-row absent">
                <span>🔴 Absent</span>
                <span>2</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="attendance-card">
            <div className="attendance-top">
              <h3 className="attendance-card-title">
                Class Attendance
              </h3>

              <input
                type="text"
                placeholder="Search student..."
                className="attendance-search"
              />
            </div>

            <div className="attendance-list">
              {students.map((student, index) => (
                <div
                  key={index}
                  className={`student-row ${
                    student.present
                      ? "student-present"
                      : "student-absent"
                  }`}
                >
                  <div className="student-left">
                    <div className="student-avatar">
                      👦
                    </div>

                    <div>
                      <div className="student-name">
                        {student.name}
                      </div>

                      <div className="student-code">
                        {student.code}
                      </div>
                    </div>
                  </div>

                  <div className="student-right">
                    {student.present && (
                      <span className="student-time">
                        🕒 {student.time}
                      </span>
                    )}

                    <span
                      className={`student-badge ${
                        student.present
                          ? "badge-present"
                          : "badge-absent"
                      }`}
                    >
                      {student.present
                        ? "Present"
                        : "Absent"}
                    </span>
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