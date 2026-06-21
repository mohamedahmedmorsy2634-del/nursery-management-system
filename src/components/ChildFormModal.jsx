import React, { useState } from "react";

export default function ChildFormModal({
  child,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState(
    child || {
      childId: "",
      fullName: "",
      dob: "",
      gender: "",
      address: "",
      classId: "",
      qrCode: "",
      monthlyFee: "",

      busSubscribed: "No",
      activitiesSubscribed: "No",

      hasDisability: "No",
      healthNotes: "",
      medications: "",
      allergies: "",

      guardianName: "",
      relationship: "",
      guardianPhone: "",
      guardianEmail: "",
      guardianAddress: "",

      emergencyName: "",
      emergencyRelationship: "",
      emergencyPhone: "",

      status: "Active",
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

    if (
      !formData.childId ||
      !formData.fullName ||
      !formData.qrCode
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="child-modal">

        {/* HEADER */}

        <div className="modal-header">

          <h2>
            {child
              ? "✏️ Edit Child"
              : "🧒 Add New Child"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          {/* BASIC INFO */}

          <div className="form-section">

            <h3>Basic Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Child ID *</label>

                <input
                  type="text"
                  name="childId"
                  value={formData.childId}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Date Of Birth</label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Gender</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Address</label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Class ID</label>

                <input
                  type="text"
                  name="classId"
                  value={formData.classId}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>QR Code *</label>

                <input
                  type="text"
                  name="qrCode"
                  value={formData.qrCode}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Monthly Fee</label>

                <input
                  type="number"
                  name="monthlyFee"
                  value={formData.monthlyFee}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>

          {/* SUBSCRIPTIONS */}

          <div className="form-section">

            <h3>Subscriptions</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Bus Subscribed</label>

                <select
                  name="busSubscribed"
                  value={formData.busSubscribed}
                  onChange={handleChange}
                >
                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Activities Subscribed</label>

                <select
                  name="activitiesSubscribed"
                  value={formData.activitiesSubscribed}
                  onChange={handleChange}
                >
                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>
                </select>
              </div>

            </div>

          </div>

          {/* MEDICAL */}

          <div className="form-section">

            <h3>Medical Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Has Disability</label>

                <select
                  name="hasDisability"
                  value={formData.hasDisability}
                  onChange={handleChange}
                >
                  <option value="No">
                    No
                  </option>

                  <option value="Yes">
                    Yes
                  </option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label>Health Notes</label>

              <textarea
                name="healthNotes"
                value={formData.healthNotes}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Medications</label>

              <textarea
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Allergies</label>

              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                rows="3"
              />
            </div>

          </div>

          {/* GUARDIAN */}

          <div className="form-section">

            <h3>Guardian Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Guardian Name</label>

                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Relationship</label>

                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Relationship
                  </option>

                  <option value="Mother">
                    Mother
                  </option>

                  <option value="Father">
                    Father
                  </option>

                  <option value="Grandmother">
                    Grandmother
                  </option>

                  <option value="Grandfather">
                    Grandfather
                  </option>

                  <option value="Aunt">
                    Aunt
                  </option>

                  <option value="Uncle">
                    Uncle
                  </option>

                  <option value="Older Sibling">
                    Older Sibling
                  </option>

                  <option value="Legal Guardian">
                    Legal Guardian
                  </option>

                  <option value="Foster Parent">
                    Foster Parent
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="text"
                  name="guardianPhone"
                  value={formData.guardianPhone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="guardianEmail"
                  value={formData.guardianEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Address</label>

                <input
                  type="text"
                  name="guardianAddress"
                  value={formData.guardianAddress}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>

          {/* EMERGENCY */}

          <div className="form-section">

            <h3>Emergency Contact</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                  name="emergencyName"
                  value={formData.emergencyName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Relationship</label>

                <input
                  type="text"
                  name="emergencyRelationship"
                  value={formData.emergencyRelationship}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="text"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </select>
              </div>

            </div>

          </div>

          <div className="modal-buttons">

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
              {child
                ? "Update Child"
                : "Add Child"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}