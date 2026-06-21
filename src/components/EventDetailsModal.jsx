import React from "react";
import "../styles/EventsActivities.css";

export default function EventDetailsModal({
  event,
  onClose,
}) {
  return (
    <div className="modal-overlay">
      <div className="details-modal">

        <div className="details-header">

          <div className="details-title">

            <div className="details-icon">
              {event.icon}
            </div>

            <div>
              <h2>{event.title}</h2>

              <span className="details-badge">
                {event.type}
              </span>
            </div>

          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="details-content">

          <div className="details-row">
            <strong>Date:</strong>
            <span>{event.date}</span>
          </div>

          <div className="details-row">
            <strong>Start Time:</strong>
            <span>{event.startTime}</span>
          </div>

          <div className="details-row">
            <strong>End Time:</strong>
            <span>{event.endTime}</span>
          </div>

          <div className="details-row">
            <strong>Location:</strong>
            <span>{event.location}</span>
          </div>

          <div className="details-row">
            <strong>Participants:</strong>
            <span>{event.participants}</span>
          </div>

          <div className="details-row">
            <strong>Capacity:</strong>
            <span>{event.capacity}</span>
          </div>

          <div className="details-row">
            <strong>Status:</strong>

            <span className="status-pill">
              {event.status}
            </span>
          </div>

          <div className="details-description">

            <h4>Description</h4>

            <p>
              {event.description ||
                "No description available."}
            </p>

          </div>

        </div>

        <div className="details-footer">

          <button
            className="close-details-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}