import React, { useState } from "react";
import Sidebar from "../components/TeacherSidebar";
import "../styles/Schedule.css";

const scheduleData = {
  Monday: [
    { time: "08:00 - 09:00", name: "Morning Circle", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "09:00 - 10:00", name: "Learning Activities", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "10:30 - 11:00", name: "Snack Time", teacher: "Teacher: Ms. Scott", tag: "✔", special: false },
    { time: "11:00 - 12:00", name: "Sports Day 🏅", teacher: "Teacher: Coach Mike", tag: "✔", special: true },
    { time: "12:00 - 13:00", name: "Lunch", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
  ],
  Tuesday: [
    { time: "08:00 - 09:00", name: "Morning Circle", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "09:00 - 10:00", name: "Speech Session 🗣️", teacher: "Teacher: Ms. Laura", tag: "Now Time", special: true },
    { time: "10:00 - 11:00", name: "Art & Craft", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "11:00 - 12:00", name: "Outdoor Play", teacher: "Teacher: Ms. Scott", tag: "✔", special: false },
    { time: "12:00 - 13:00", name: "Lunch", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
  ],
  Wednesday: [
    { time: "08:00 - 09:00", name: "Morning Circle", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "09:00 - 10:00", name: "Music & Movement", teacher: "Teacher: Ms. Mary", tag: "✔", special: false },
    { time: "10:30 - 11:00", name: "Snack Time", teacher: "Teacher: Ms. Scott", tag: "✔", special: false },
    { time: "11:00 - 12:00", name: "Story Time", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "12:00 - 13:00", name: "Lunch", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
  ],
  Thursday: [
    { time: "08:00 - 09:00", name: "Morning Circle", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "09:00 - 10:30", name: "Science Exploration 🔬", teacher: "Teacher: Mr. Davis", tag: "Now Time", special: true },
    { time: "10:30 - 11:00", name: "Snack Time", teacher: "Teacher: Ms. Scott", tag: "✔", special: false },
    { time: "11:00 - 12:00", name: "Free Play", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "12:00 - 13:00", name: "Lunch", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
  ],
  Friday: [
    { time: "08:00 - 09:00", name: "Morning Circle", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "09:00 - 10:00", name: "Show & Tell 🌟", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: true },
    { time: "10:30 - 11:00", name: "Snack Time", teacher: "Teacher: Ms. Scott", tag: "✔", special: false },
    { time: "11:00 - 12:00", name: "Art & Craft", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
    { time: "12:00 - 13:00", name: "Lunch", teacher: "Teacher: Ms. Scott", tag: "Edit Time", special: false },
  ],
};

const days = Object.keys(scheduleData);

export default function Schedule() {
  const [expanded, setExpanded] = useState(days);

  const toggle = (day) => {
    setExpanded((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="main-content">
        <div className="sched-header">
          <h1 className="sched-title">Weekly Schedule</h1>
          <p className="sched-subtitle">Class activities and timetables</p>
        </div>

        {days.map((day) => (
          <div key={day} className="sched-day-section">
            <button className="sched-day-header" onClick={() => toggle(day)}>
              <span className="sched-day-arrow">
                {expanded.includes(day) ? "▼" : "▶"}
              </span>
              <span className="sched-day-name">{day}</span>
            </button>

            {expanded.includes(day) && (
              <div className="sched-day-body">
                {scheduleData[day].map((item, i) => (
                  <div
                    key={i}
                    className={`sched-row ${item.special ? "sched-row-special" : ""}`}
                  >
                    <div className="sched-time-wrap">
                      <span className="sched-clock">🕐</span>
                      <span className="sched-time">{item.time}</span>
                    </div>
                    <div className="sched-info">
                      <div className="sched-name">{item.name}</div>
                      <div className="sched-teacher">{item.teacher}</div>
                    </div>
                    <button
                      className={`sched-tag ${
                        item.tag === "✔"
                          ? "tag-green"
                          : item.tag === "Now Time"
                          ? "tag-now"
                          : "tag-edit"
                      }`}
                    >
                      {item.tag}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}