import React, { useState } from "react";
import "../styles/EventsActivities.css";

export default function EventFormModal({
  event,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState(
    event || {
      title: "",
      type: "Event",
      date: "",
      startTime: "",
      endTime: "",
      location: "",
      participants: "",
      capacity: "",
      description: "",
      icon: "🎉",
      status: "Upcoming",
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="event-modal">

        <div className="modal-header">
          <h2>
            {event
              ? "Edit Event"
              : "Add New Event"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          className="event-form"
          onSubmit={handleSubmit}
        >

          <div className="form-grid">

            <div>
              <label>Event Title</label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Event Type</label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>Event</option>
                <option>Trip</option>
                <option>Camp</option>
                <option>Recurring</option>
              </select>
            </div>

            <div>
              <label>Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Upcoming</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>

            <div>
              <label>Start Time</label>

              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>End Time</label>

              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Location</label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Capacity</label>

              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
              />
            </div>

            <div className="full-width">
              <label>Participants</label>

              <input
                type="text"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                placeholder="All Classes"
              />
            </div>

            <div className="full-width">
              <label>Description</label>

              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="full-width">
              <label>Icon</label>

              <select
                name="icon"
                value={formData.icon}
                onChange={handleChange}
              >
                <option value="🎉">🎉 Event</option>
                <option value="⚽">⚽ Sports</option>
                <option value="🎵">🎵 Music</option>
                <option value="🎨">🎨 Art</option>
                <option value="🦁">🦁 Trip</option>
                <option value="🏕️">🏕️ Camp</option>
                <option value="🎭">🎭 Activity</option>
                <option value="📚">📚 Educational</option>
              </select>
            </div>

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
              Save Event
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}