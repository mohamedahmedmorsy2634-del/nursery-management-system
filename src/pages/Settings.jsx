import React, { useState } from "react";
import Sidebar from "../components/TeacherSidebar";
import "../styles/Settings.css";

function Settings() {

  const [notifications, setNotifications] = useState(true);


  return (
    <>
      <Sidebar />

      <div className="settings-page">

        <div className="settings-container">

          {/* HEADER */}
          <div className="settings-header">

            <h1>Settings</h1>

            <p>
              Manage your account preferences and system settings
            </p>

          </div>

          {/* PROFILE SECTION */}
          <div className="settings-card">

            <h2>Profile Information</h2>

            <div className="settings-grid">

              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Teacher Name"
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="teacher@email.com"
                />
              </div>

            </div>

          </div>

          {/* PASSWORD SECTION */}
          <div className="settings-card">

            <h2>Change Password</h2>

            <div className="settings-grid">

              <div className="input-group">
                <label>Current Password</label>

                <input
                  type="password"
                  placeholder="Current password"
                />
              </div>

              <div className="input-group">
                <label>New Password</label>

                <input
                  type="password"
                  placeholder="New password"
                />
              </div>

            </div>

          </div>

          {/* PREFERENCES */}
          <div className="settings-card">

            <h2>Preferences</h2>

            {/* Notifications */}
            <div className="toggle-row">

              <div>
                <h3>Email Notifications</h3>
                <p>
                  Receive updates and notifications
                </p>
              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() =>
                    setNotifications(!notifications)
                  }
                />

                <span className="slider"></span>

              </label>

            </div>


          </div>

          {/* SAVE BUTTON */}
          <button className="save-btn">
            Save Changes
          </button>

        </div>
      </div>
    </>
  );
}

export default Settings;