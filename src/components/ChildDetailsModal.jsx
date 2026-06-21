import React from "react";

export default function ChildDetailsModal({
  child,
  onClose,
}) {
  if (!child) return null;

  return (
    <div className="modal-overlay">

      <div className="teacher-details-modal">

        {/* HEADER */}

        <div className="modal-header">

          <h2>🧒 Child Profile</h2>

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
            🧒
          </div>

          <h2>{child.fullName}</h2>

          <span
            className={
              child.status === "Active"
                ? "status active"
                : "status inactive"
            }
          >
            {child.status}
          </span>

        </div>

        {/* QUICK INFO */}

        <div className="details-grid">

          <div className="detail-card">
            <span className="detail-label">
              Child ID
            </span>

            <h4>{child.childId}</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">
              Class
            </span>

            <h4>{child.classId}</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">
              QR Code
            </span>

            <h4>{child.qrCode}</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">
              Monthly Fee
            </span>

            <h4>
              {child.monthlyFee} EGP
            </h4>
          </div>

        </div>

        {/* BASIC INFO */}

        <div className="details-section">

          <h3>📋 Basic Information</h3>

          <div className="info-row">
            <strong>Full Name:</strong>
            <span>{child.fullName}</span>
          </div>

          <div className="info-row">
            <strong>Date Of Birth:</strong>
            <span>{child.dob}</span>
          </div>

          <div className="info-row">
            <strong>Gender:</strong>
            <span>{child.gender}</span>
          </div>

          <div className="info-row">
            <strong>Address:</strong>
            <span>{child.address}</span>
          </div>

          <div className="info-row">
            <strong>Class:</strong>
            <span>{child.classId}</span>
          </div>

        </div>

        {/* SUBSCRIPTIONS */}

        <div className="details-section">

          <h3>🎨 Subscriptions</h3>

          <div className="info-row">
            <strong>Bus Subscription:</strong>
            <span>{child.busSubscribed}</span>
          </div>

          <div className="info-row">
            <strong>Activities:</strong>
            <span>{child.activitiesSubscribed}</span>
          </div>

        </div>

        {/* MEDICAL */}

        <div className="details-section">

          <h3>❤️ Medical Information</h3>

          <div className="info-row">
            <strong>Has Disability:</strong>
            <span>{child.hasDisability}</span>
          </div>

          <div className="info-row">
            <strong>Health Notes:</strong>
            <span>{child.healthNotes}</span>
          </div>

          <div className="info-row">
            <strong>Medications:</strong>
            <span>{child.medications}</span>
          </div>

          <div className="info-row">
            <strong>Allergies:</strong>
            <span>{child.allergies}</span>
          </div>

        </div>

        {/* GUARDIAN */}

        <div className="details-section">

          <h3>👨‍👩‍👧 Guardian Information</h3>

          <div className="info-row">
            <strong>Name:</strong>
            <span>{child.guardianName}</span>
          </div>

          <div className="info-row">
            <strong>Relationship:</strong>
            <span>{child.relationship}</span>
          </div>

          <div className="info-row">
            <strong>Phone:</strong>
            <span>{child.guardianPhone}</span>
          </div>

          <div className="info-row">
            <strong>Email:</strong>
            <span>{child.guardianEmail}</span>
          </div>

          <div className="info-row">
            <strong>Address:</strong>
            <span>{child.guardianAddress}</span>
          </div>

        </div>

        {/* EMERGENCY */}

        <div className="details-section">

          <h3>🚨 Emergency Contact</h3>

          <div className="info-row">
            <strong>Name:</strong>
            <span>{child.emergencyName}</span>
          </div>

          <div className="info-row">
            <strong>Relationship:</strong>
            <span>
              {child.emergencyRelationship}
            </span>
          </div>

          <div className="info-row">
            <strong>Phone:</strong>
            <span>{child.emergencyPhone}</span>
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