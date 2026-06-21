import React, { useState } from "react";

export default function NotificationFormModal({
  notification,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState(
    notification || {
      category: "Health",
      title: "",
      message: "",
      priority: "Medium",
      read: false,
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <div className="modal-overlay">

      <div className="notification-modal">

        <div className="modal-header">

          <h2>
            {notification
              ? "Edit Notification"
              : "Create Notification"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="notification-form"
        >

          <div className="form-group">

            <label>
              Category
            </label>

            <select
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
            >
              <option value="Health">
                ❤️ Health
              </option>

              <option value="Events">
                📅 Events
              </option>

              <option value="Reports">
                📄 Reports
              </option>
            </select>

          </div>

          <div className="form-group">

            <label>
              Title
            </label>

            <input
              type="text"
              name="title"
              value={
                formData.title
              }
              onChange={
                handleChange
              }
              placeholder="Enter notification title"
              required
            />

          </div>

          <div className="form-group">

            <label>
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              value={
                formData.message
              }
              onChange={
                handleChange
              }
              placeholder="Write notification details..."
              required
            />

          </div>

          <div className="form-group">

            <label>
              Priority
            </label>

            <select
              name="priority"
              value={
                formData.priority
              }
              onChange={
                handleChange
              }
            >
              <option value="High">
                High
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="Low">
                Low
              </option>
            </select>

          </div>

          <div className="modal-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {notification
                ? "Update Notification"
                : "Send Notification"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}