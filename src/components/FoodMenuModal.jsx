import React, { useState } from "react";

export default function FoodMenuModal({
  day,
  onClose,
  onSave,
}) {

  const [formData, setFormData] =
    useState(day);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {

    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">

      <div className="food-modal">

        <div className="modal-header">

          <h2>
            Edit {day.day} Menu
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <form onSubmit={submit}>

          <div className="form-group">
            <label>Breakfast</label>

            <input
              type="text"
              name="breakfast"
              value={formData.breakfast}
              onChange={handleChange}
            />
          </div>

          

          <div className="form-group">
            <label>Lunch</label>

            <input
              type="text"
              name="lunch"
              value={formData.lunch}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Snack</label>

            <input
              type="text"
              name="snack"
              value={formData.snack}
              onChange={handleChange}
            />
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
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}