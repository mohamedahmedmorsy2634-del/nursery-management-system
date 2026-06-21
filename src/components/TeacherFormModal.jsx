import React, { useState } from "react";

export default function TeacherFormModal({
  teacher,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState(
    teacher || {
      teacherId: "",
      fullName: "",
      email: "",
      phone: "",
      classAssigned: "",
      position: "",
      dob: "",
      gender: "",
      hireDate: "",
      username: "",
      password: "",
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
      !formData.fullName ||
      !formData.email ||
      !formData.teacherId
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="modal-overlay">

      <div className="teacher-modal">

        {/* HEADER */}
        <div className="modal-header">

          <h2>
            {teacher
              ? "✏️ Edit Teacher"
              : "👩‍🏫 Add New Teacher"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          {/* PERSONAL INFO */}
          <div className="form-section">

            <h3>Personal Information</h3>

            <div className="form-grid">

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
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
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

            </div>

          </div>

          {/* EMPLOYMENT */}
          <div className="form-section">

            <h3>Employment Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Teacher ID *</label>

                <input
                  type="text"
                  name="teacherId"
                  value={formData.teacherId}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Class Assigned</label>

                <input
                  type="text"
                  name="classAssigned"
                  value={formData.classAssigned}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Position</label>

                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Hire Date</label>

                <input
                  type="date"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>

          {/* ACCOUNT */}
          <div className="form-section">

            <h3>Account Information</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Username</label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
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

          {/* BUTTONS */}
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
              {teacher
                ? "Update Teacher"
                : "Add Teacher"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}