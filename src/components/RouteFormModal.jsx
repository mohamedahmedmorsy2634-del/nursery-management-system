import React, { useState } from "react";

export default function RouteFormModal({
  route,
  onClose,
  onSave,
}) {

  const [formData, setFormData] =
    useState(
      route || {
        routeName: "",
        areasCovered: "",
        pickupSupervisor: "",
        startTime: "",
        endTime: "",
        stops: "",
        fee: "",
        status: "Active",
        children: [],
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

      <div className="route-modal">

        <div className="modal-header">

          <h2>
            {route
              ? "Edit Route"
              : "Add New Route"}
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
          className="route-form"
        >

          <div className="form-grid">

            <div>
              <label>
                Route Name
              </label>

              <input
                type="text"
                name="routeName"
                value={
                  formData.routeName
                }
                onChange={
                  handleChange
                }
                required
              />
            </div>

            <div>
              <label>
                Pickup Supervisor
              </label>

              <input
                type="text"
                name="pickupSupervisor"
                value={
                  formData.pickupSupervisor
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Start Time
              </label>

              <input
                type="time"
                name="startTime"
                value={
                  formData.startTime
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                End Time
              </label>

              <input
                type="time"
                name="endTime"
                value={
                  formData.endTime
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Number of Stops
              </label>

              <input
                type="number"
                name="stops"
                value={
                  formData.stops
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Monthly Fee
              </label>

              <input
                type="number"
                name="fee"
                value={
                  formData.fee
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div>
              <label>
                Status
              </label>

              <select
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
              >
                <option>
                  Active
                </option>

                <option>
                  Inactive
                </option>
              </select>
            </div>

            <div className="full-width">

              <label>
                Areas Covered
              </label>

              <textarea
                rows="4"
                name="areasCovered"
                value={
                  formData.areasCovered
                }
                onChange={
                  handleChange
                }
              />

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
              Save Route
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}