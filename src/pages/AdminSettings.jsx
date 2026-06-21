import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/AdminSettings.css";

export default function AdminSettings() {

  const [settings, setSettings] = useState({
    nurseryName: "Butterflies Academy",
    slogan: "Growing Bright Futures",
    address: "Cairo, Egypt",
    phone: "+20 10 1234 5678",
    email: "info@butterfliesacademy.com",

    adminName: "Admin User",
    username: "admin",
    adminEmail: "admin@butterfliesacademy.com",
    adminPhone: "+20 10 1234 5678",

    academicYear: "2026 / 2027",
    semester: "First Semester",

    monthlyFee: 2500,
    busFee: 300,
    activityFee: 200,

    driverName: "Ahmed Hassan",
    supervisorName: "Sarah Ahmed",
    emergencyNumber: "+20 10 9999 9999",

    healthAlerts: true,
    eventAlerts: true,
    reportAlerts: true,
    parentAlerts: true,
  });

  const handleChange = (e) => {

    const { name, value, type, checked } =
      e.target;

    setSettings({
      ...settings,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSave = () => {
    alert(
      "Settings saved successfully!"
    );
  };

  return (
    <div>
      <AdminSidebar />

      <div className="settings-page">

        <div className="settings-header">
          <h1>Settings</h1>

          <p>
            Manage nursery information
            and system preferences
          </p>
        </div>

        {/* NURSERY INFO */}

        <div className="settings-card">

          <h2>
            🏫 Nursery Information
          </h2>

          <div className="settings-grid">

            <div>
              <label>
                Nursery Name
              </label>

              <input
                type="text"
                name="nurseryName"
                value={
                  settings.nurseryName
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Slogan
              </label>

              <input
                type="text"
                name="slogan"
                value={
                  settings.slogan
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={
                  handleChange
                }
              />
            </div>

            <div className="full-width">
              <label>
                Address
              </label>

              <textarea
                rows="3"
                name="address"
                value={
                  settings.address
                }
                onChange={
                  handleChange
                }
              />
            </div>

          </div>

        </div>

        {/* ADMIN PROFILE */}

        <div className="settings-card">

          <h2>
            👤 Admin Profile
          </h2>

          <div className="settings-grid">

            <div>
              <label>
                Full Name
              </label>

              <input
                type="text"
                name="adminName"
                value={
                  settings.adminName
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Username
              </label>

              <input
                type="text"
                name="username"
                value={
                  settings.username
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Email
              </label>

              <input
                type="email"
                name="adminEmail"
                value={
                  settings.adminEmail
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Phone
              </label>

              <input
                type="text"
                name="adminPhone"
                value={
                  settings.adminPhone
                }
                onChange={
                  handleChange
                }
              />
            </div>

          </div>

        </div>

        {/* SECURITY */}

        <div className="settings-card">

          <h2>
            🔐 Security
          </h2>

          <div className="settings-grid">

            <div>
              <label>
                Current Password
              </label>

              <input
                type="password"
              />
            </div>

            <div>
              <label>
                New Password
              </label>

              <input
                type="password"
              />
            </div>

            <div>
              <label>
                Confirm Password
              </label>

              <input
                type="password"
              />
            </div>

          </div>

        </div>

        {/* ACADEMIC */}

        <div className="settings-card">

          <h2>
            📅 Academic Settings
          </h2>

          <div className="settings-grid">

            <div>
              <label>
                Academic Year
              </label>

              <input
                type="text"
                name="academicYear"
                value={
                  settings.academicYear
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Semester
              </label>

              <select
                name="semester"
                value={
                  settings.semester
                }
                onChange={
                  handleChange
                }
              >
                <option>
                  First Semester
                </option>

                <option>
                  Second Semester
                </option>
              </select>
            </div>

          </div>

        </div>

        {/* FEES */}

        <div className="settings-card">

          <h2>
            💰 Fee Settings
          </h2>

          <div className="settings-grid">

            <div>
              <label>
                Monthly Fee
              </label>

              <input
                type="number"
                name="monthlyFee"
                value={
                  settings.monthlyFee
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Bus Fee
              </label>

              <input
                type="number"
                name="busFee"
                value={
                  settings.busFee
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Activity Fee
              </label>

              <input
                type="number"
                name="activityFee"
                value={
                  settings.activityFee
                }
                onChange={
                  handleChange
                }
              />
            </div>

          </div>

        </div>

        {/* TRANSPORT */}

        <div className="settings-card">

          <h2>
            🚌 Transportation
          </h2>

          <div className="settings-grid">

            <div>
              <label>
                Driver Name
              </label>

              <input
                type="text"
                name="driverName"
                value={
                  settings.driverName
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Bus Supervisor
              </label>

              <input
                type="text"
                name="supervisorName"
                value={
                  settings.supervisorName
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Emergency Number
              </label>

              <input
                type="text"
                name="emergencyNumber"
                value={
                  settings.emergencyNumber
                }
                onChange={
                  handleChange
                }
              />
            </div>

          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="settings-card">

          <h2>
            🔔 Notification Settings
          </h2>

          <div className="checkbox-group">

            <label>
              <input
                type="checkbox"
                name="healthAlerts"
                checked={
                  settings.healthAlerts
                }
                onChange={
                  handleChange
                }
              />
              Send Health Alerts
            </label>

            <label>
              <input
                type="checkbox"
                name="eventAlerts"
                checked={
                  settings.eventAlerts
                }
                onChange={
                  handleChange
                }
              />
              Send Event Reminders
            </label>

            <label>
              <input
                type="checkbox"
                name="reportAlerts"
                checked={
                  settings.reportAlerts
                }
                onChange={
                  handleChange
                }
              />
              Send Report Reminders
            </label>

            <label>
              <input
                type="checkbox"
                name="parentAlerts"
                checked={
                  settings.parentAlerts
                }
                onChange={
                  handleChange
                }
              />
              Send Parent Notifications
            </label>

          </div>

        </div>

        <button
          className="save-settings-btn"
          onClick={handleSave}
        >
          Save All Changes
        </button>

      </div>
    </div>
  );
}