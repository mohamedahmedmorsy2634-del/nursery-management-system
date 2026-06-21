import React from "react";

export default function TeacherDetailsModal({
  teacher,
  onClose,
}) {
  if (!teacher) return null;

  return (
    <div className="modal-overlay">

      <div className="teacher-details-modal">

        {/* HEADER */}
        <div className="modal-header">

          <h2>👩‍🏫 Teacher Profile</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        {/* PROFILE */}
        <div className="profile-section">

          <div className="profile-avatar">
            👩‍🏫
          </div>

          <h2>{teacher.fullName}</h2>

          <span
            className={
              teacher.status === "Active"
                ? "status active"
                : "status inactive"
            }
          >
            {teacher.status}
          </span>

        </div>

        {/* DETAILS GRID */}
        <div className="details-grid">

          <div className="detail-card">
            <span className="detail-label">
              Teacher ID
            </span>

            <h4>{teacher.teacherId}</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">
              Position
            </span>

            <h4>{teacher.position}</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">
              Class Assigned
            </span>

            <h4>{teacher.classAssigned}</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">
              Gender
            </span>

            <h4>{teacher.gender}</h4>
          </div>

        </div>

        {/* CONTACT INFO */}
        <div className="details-section">

          <h3>📞 Contact Information</h3>

          <div className="info-row">
            <strong>Email:</strong>
            <span>{teacher.email}</span>
          </div>

          <div className="info-row">
            <strong>Phone:</strong>
            <span>{teacher.phone}</span>
          </div>

        </div>

        {/* PERSONAL INFO */}
        <div className="details-section">

          <h3>📝 Personal Information</h3>

          <div className="info-row">
            <strong>Date Of Birth:</strong>
            <span>{teacher.dob}</span>
          </div>

        </div>

        {/* EMPLOYMENT INFO */}
        <div className="details-section">

          <h3>💼 Employment Information</h3>

          <div className="info-row">
            <strong>Hire Date:</strong>
            <span>{teacher.hireDate}</span>
          </div>

          <div className="info-row">
            <strong>Position:</strong>
            <span>{teacher.position}</span>
          </div>

          <div className="info-row">
            <strong>Class:</strong>
            <span>{teacher.classAssigned}</span>
          </div>

        </div>

        {/* ACCOUNT INFO */}
        <div className="details-section">

          <h3>🔐 Account Information</h3>

          <div className="info-row">
            <strong>Username:</strong>
            <span>{teacher.username}</span>
          </div>

          <div className="info-row">
            <strong>Password:</strong>
            <span>••••••••</span>
          </div>

        </div>

        {/* FOOTER */}
        <div className="details-footer">

          <button
            className="close-profile-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}