import React from "react";

export default function RouteSubscribersModal({
  route,
  onClose,
}) {
  return (
    <div className="modal-overlay">

      <div className="subscribers-modal">

        <div className="modal-header">

          <div>

            <h2>
              {route.routeName}
            </h2>

            <p className="modal-subtitle">
              Route Subscribers
            </p>

          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="subscriber-summary">

          <div className="summary-card">

            <h3>
              Total Subscribers
            </h3>

            <h2>
              {route.children.length}
            </h2>

          </div>

          <div className="summary-card">

            <h3>
              Monthly Revenue
            </h3>

            <h2>
              EGP{" "}
              {route.children.length *
                route.fee}
            </h2>

          </div>

        </div>

        <div className="subscribers-list">

          {route.children.length >
          0 ? (
            route.children.map(
              (
                child,
                index
              ) => (
                <div
                  key={index}
                  className="subscriber-card"
                >
                  <div className="subscriber-avatar">
                    👶
                  </div>

                  <div>
                    <h4>
                      {child}
                    </h4>

                    <p>
                      Bus Subscriber
                    </p>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="empty-state">

              <h3>
                No Subscribers
              </h3>

              <p>
                This route
                currently has
                no children
                assigned.
              </p>

            </div>
          )}

        </div>

        <div className="modal-actions">

          <button
            className="save-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}