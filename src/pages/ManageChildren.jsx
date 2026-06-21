import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import ChildFormModal from "../components/ChildFormModal";
import ChildDetailsModal from "../components/ChildDetailsModal";
import "../styles/ManageChildren.css";

export default function ManageChildren() {
  const initialData = [
    {
      id: 1,
      childId: "CH001",
      fullName: "Emma Johnson",
      dob: "2021-03-15",
      gender: "Female",
      address: "Cairo, Egypt",
      classId: "Butterflies",
      qrCode: "QR-0001",
      monthlyFee: "2500",
      busSubscribed: "Yes",
      activitiesSubscribed: "Yes",
      hasDisability: "No",
      healthNotes: "Healthy",
      medications: "None",
      allergies: "Peanuts",
      guardianName: "John Johnson",
      relationship: "Father",
      guardianPhone: "+20 1012345678",
      guardianEmail: "john@email.com",
      guardianAddress: "Cairo, Egypt",
      emergencyName: "Sarah Johnson",
      emergencyRelationship: "Mother",
      emergencyPhone: "+20 1098765432",
      status: "Active",
    },
  ];

  const [children, setChildren] = useState(() => {
    const savedChildren = localStorage.getItem("nursery_children");
    return savedChildren ? JSON.parse(savedChildren) : initialData;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);
  const [editingChild, setEditingChild] = useState(null);

  useEffect(() => {
    localStorage.setItem("nursery_children", JSON.stringify(children));
  }, [children]);

  const filteredChildren = children.filter(
    (child) =>
      [
        child.fullName,
        child.childId,
        child.classId,
        child.qrCode,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleAddChild = () => {
    setEditingChild(null);
    setShowFormModal(true);
  };

  const handleEditChild = (child) => {
    setEditingChild(child);
    setShowFormModal(true);
  };

  const handleViewChild = (child) => {
    setSelectedChild(child);
    setShowDetailsModal(true);
  };

  const handleDeleteChild = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this child?"
    );
    if (confirmDelete) {
      setChildren(children.filter((child) => child.id !== id));
    }
  };

  const handleSaveChild = (childData) => {
    if (editingChild) {
      setChildren(
        children.map((child) =>
          child.id === editingChild.id
            ? { ...childData, id: editingChild.id }
            : child
        )
      );
    } else {
      const newChild = {
        ...childData,
        id: Date.now(),
      };
      setChildren([...children, newChild]);
    }
    setShowFormModal(false);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <AdminSidebar />
      <div className="children-page">
        <div className="children-header">
          <div>
            <h1>Manage Children 👶</h1>
            <p>Add, edit, view and manage all children</p>
          </div>
          <button className="add-child-btn" onClick={handleAddChild}>
            + Add New Child
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search children..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="child-search"
          />
        </div>

        <div className="children-grid">
          {filteredChildren.length > 0 ? (
            filteredChildren.map((child) => (
              <div className="child-card" key={child.id}>
                <div className="child-card-header">
                  <div className="child-avatar">👶</div>
                  <div>
                    <h3>{child.fullName}</h3>
                    <span className={`status ${child.status?.toLowerCase() === 'active' ? 'active' : 'inactive'}`}>
                      {child.status || "Active"}
                    </span>
                  </div>
                </div>

                <div className="child-info">
                  <p><strong>📧 Parent:</strong> {child.guardianName || "N/A"}</p>
                  <p><strong>📞 Phone:</strong> {child.guardianPhone || "N/A"}</p>
                  <p><strong>🏫 Class:</strong> {child.classId || "N/A"}</p>
                  <p><strong>🆔 ID:</strong> {child.childId || "N/A"}</p>
                </div>

                <div className="child-actions">
                  <button className="view-btn" onClick={() => handleViewChild(child)}>
                    👁️ View
                  </button>
                  <button className="edit-btn" onClick={() => handleEditChild(child)}>
                    ✏️ Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDeleteChild(child.id)}>
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "#777", gridColumn: "1/-1", textAlign: "center" }}>No children found.</p>
          )}
        </div>

        {showFormModal && (
          <ChildFormModal
            isOpen={showFormModal}
            onClose={() => setShowFormModal(false)}
            onSave={handleSaveChild}
            initialData={editingChild}
          />
        )}

        {showDetailsModal && (
          <ChildDetailsModal
            isOpen={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            child={selectedChild}
          />
        )}
      </div>
    </div>
  );
}