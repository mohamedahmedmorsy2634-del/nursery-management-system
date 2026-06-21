import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import NotificationFormModal from "../components/NotificationFormModal";
import "../styles/AdminNotifications.css";

export default function AdminNotifications() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [showModal, setShowModal] =
    useState(false);

  const [editingNotification, setEditingNotification] =
    useState(null);

  const [notifications, setNotifications] =
    useState([
      {
        id: 1,
        category: "Health",
        title: "Medication Reminder",
        message:
          "Ahmed Ali requires cough syrup at 12:00 PM for the next 3 days.",
        priority: "High",
        date: "Today",
        read: false,
      },

      {
        id: 2,
        category: "Events",
        title: "Summer Festival",
        message:
          "Summer Festival starts next week. Please prepare activity materials.",
        priority: "Medium",
        date: "Today",
        read: false,
      },

      {
        id: 3,
        category: "Reports",
        title: "Weekly Reports",
        message:
          "Please include social interaction observations in this week's reports.",
        priority: "Low",
        date: "Yesterday",
        read: true,
      },

      {
        id: 4,
        category: "Health",
        title: "Allergy Alert",
        message:
          "Emma Hassan has a peanut allergy. Monitor snack time carefully.",
        priority: "High",
        date: "Yesterday",
        read: false,
      },
    ]);

  const categories = [
    "All",
    "Health",
    "Events",
    "Reports",
  ];

  const filteredNotifications =
    selectedCategory === "All"
      ? notifications
      : notifications.filter(
          (notification) =>
            notification.category ===
            selectedCategory
        );

  const addNotification = (
    notification
  ) => {
    setNotifications([
      {
        ...notification,
        id: Date.now(),
        date: "Today",
        read: false,
      },
      ...notifications,
    ]);

    setShowModal(false);
  };

  const updateNotification = (
    updatedNotification
  ) => {
    setNotifications(
      notifications.map(
        (notification) =>
          notification.id ===
          updatedNotification.id
            ? updatedNotification
            : notification
      )
    );

    setEditingNotification(null);
  };

  const deleteNotification = (
    id
  ) => {
    if (
      window.confirm(
        "Delete this notification?"
      )
    ) {
      setNotifications(
        notifications.filter(
          (notification) =>
            notification.id !== id
        )
      );
    }
  };

  const totalNotifications =
    notifications.length;

  const unreadNotifications =
    notifications.filter(
      (notification) =>
        !notification.read
    ).length;

  const highPriority =
    notifications.filter(
      (notification) =>
        notification.priority ===
        "High"
    ).length;

  const todayNotifications =
    notifications.filter(
      (notification) =>
        notification.date === "Today"
    ).length;

  const getCategoryIcon = (
    category
  ) => {
    switch (category) {
      case "Health":
        return "❤️";

      case "Events":
        return "📅";

      case "Reports":
        return "📄";

      default:
        return "🔔";
    }
  };

  return (
    <div>
      <AdminSidebar />

      <div className="notifications-page">
        {/* HEADER */}

        <div className="page-header">
          <div>
            <h1>Notifications</h1>

            <p>
              Manage teacher
              notifications and
              announcements
            </p>
          </div>

          <button
            className="add-notification-btn"
            onClick={() =>
              setShowModal(true)
            }
          >
            + Create Notification
          </button>
        </div>

        {/* STATS */}

        <div className="stats-grid">
          <div className="stat-card">
            <h3>
              Total Notifications
            </h3>

            <h2>
              {totalNotifications}
            </h2>
          </div>

          <div className="stat-card">
            <h3>Unread</h3>

            <h2>
              {unreadNotifications}
            </h2>
          </div>

          <div className="stat-card">
            <h3>
              High Priority
            </h3>

            <h2>
              {highPriority}
            </h2>
          </div>

          <div className="stat-card">
            <h3>Today</h3>

            <h2>
              {todayNotifications}
            </h2>
          </div>
        </div>

        {/* FILTERS */}

        <div className="notification-filters">
          {categories.map(
            (category) => (
              <button
                key={category}
                className={`filter-btn ${
                  selectedCategory ===
                  category
                    ? "active-filter"
                    : ""
                }`}
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* LIST */}

        <div className="notifications-list">
          {filteredNotifications.map(
            (notification) => (
              <div
                key={notification.id}
                className="notification-card"
              >
                <div className="notification-top">
                  <div className="notification-title">
                    <span className="notification-icon">
                      {getCategoryIcon(
                        notification.category
                      )}
                    </span>

                    <div>
                      <h3>
                        {
                          notification.title
                        }
                      </h3>

                      <span className="notification-category">
                        {
                          notification.category
                        }
                      </span>
                    </div>
                  </div>

                  <span
                    className={`priority-badge ${
                      notification.priority.toLowerCase()
                    }`}
                  >
                    {
                      notification.priority
                    }
                  </span>
                </div>

                <p className="notification-message">
                  {
                    notification.message
                  }
                </p>

                <div className="notification-footer">
                  <span>
                    {
                      notification.date
                    }
                  </span>

                  <div className="notification-actions">
                    <button
                      className="edit-btn"
                      onClick={() =>
                        setEditingNotification(
                          notification
                        )
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteNotification(
                          notification.id
                        )
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {showModal && (
          <NotificationFormModal
            onClose={() =>
              setShowModal(false)
            }
            onSave={
              addNotification
            }
          />
        )}

        {editingNotification && (
          <NotificationFormModal
            notification={
              editingNotification
            }
            onClose={() =>
              setEditingNotification(
                null
              )
            }
            onSave={
              updateNotification
            }
          />
        )}
      </div>
    </div>
  );
}