import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Attendance from "./pages/Attendance";
import Behavior from "./pages/Behavior";
import Schedule from "./pages/Schedule";
import HealthNotes from "./pages/HealthNotes";
import Notifications from "./pages/Notifications";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";
import ManageTeachers from "./pages/ManageTeachers";
import ManageChildren from "./pages/ManageChildren";
import FoodMenu from "./pages/FoodMenu"; 
import EventsActivities from "./pages/EventsActivities";
import BusSubscription from "./pages/BusSubscription";
import AdminNotifications from "./pages/AdminNotifications";
import AdminSettings from "./pages/AdminSettings";

export default function App() {
  return (
<BrowserRouter>
  <Routes>

    <Route path="/" element={<Login />} />

    <Route path="/ForgotPassword" element={<ForgotPassword />}/>

    <Route path="/AdminDashboard" element={<AdminDashboard />} />

    <Route path="/TeacherDashboard" element={<TeacherDashboard />} />

    <Route path="/Attendance" element={<Attendance />} />

    <Route path="/Behavior" element={<Behavior />} />

    <Route path="/Schedule" element={<Schedule />} />

    <Route path="/HealthNotes" element={<HealthNotes />} />

    <Route path="/Notifications" element={<Notifications />} />

    <Route path="/Settings" element={<Settings />}/>

    <Route path="/ManageTeachers" element={<ManageTeachers />}/>

    <Route path="/ManageChildren" element={<ManageChildren />}/>

    <Route path="/FoodMenu" element={<FoodMenu />}/>

    <Route path="/EventsActivities" element={<EventsActivities />}/>

    <Route path="/BusSubscription" element={<BusSubscription />}/>

    <Route path="/AdminNotifications" element={<AdminNotifications />}/>

    <Route path="AdminSettings" element={<AdminSettings />}/>

    {/* fallback */}
    <Route path="*" element={<Navigate to="/" />} />

  </Routes>
</BrowserRouter>
  );
}
