import {
  FaHome,
  FaUsers,
  FaChild,
  FaUtensils,
  FaBell,
  FaBus,
  FaCalendar
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <h3 className="sidebar-title">
        Butterflies Academy
      </h3>

      <div className="sidebar-item sidebar-active">
        <FaHome /> Dashboard
      </div>

      <div className="sidebar-item">
        <FaUsers /> Manage Teachers
      </div>

      <div className="sidebar-item">
        <FaChild /> Manage Children
      </div>

      <div className="sidebar-item">
        <FaUtensils /> Food Menu
      </div>

      <div className="sidebar-item">
        <FaCalendar /> Events
      </div>

      <div className="sidebar-item">
        <FaBus /> Bus Subscription
      </div>

      <div className="sidebar-item">
        <FaBell /> Notifications
      </div>

    </div>
  );
}

export default Sidebar;