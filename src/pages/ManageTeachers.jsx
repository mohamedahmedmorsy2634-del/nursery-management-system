import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function ManageTeachers() {
  const [showModal, setShowModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null); // State lel teacher ely bn-edit fih
  const [teacherForm, setTeacherForm] = useState({ name: "", className: "", email: "", phone: "" });

  // 1. Load teachers from LocalStorage
  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("nursery_teachers");
    return savedTeachers ? JSON.parse(savedTeachers) : [
      {
        id: 1,
        name: "Ms. Sarah Ahmed",
        className: "Butterflies Class",
        email: "sarah.ahmed@nursery.com",
        phone: "01012345678",
      },
      {
        id: 2,
        name: "Ms. Nada Hassan",
        className: "Birds Class",
        email: "nada.hassan@nursery.com",
        phone: "01123456789",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("nursery_teachers", JSON.stringify(teachers));
  }, [teachers]);

  // Lma n-open modal el-Add aw el-Edit
  const openModal = (teacher = null) => {
    if (teacher) {
      setEditingTeacher(teacher);
      setTeacherForm({ name: teacher.name, className: teacher.className, email: teacher.email, phone: teacher.phone });
    } else {
      setEditingTeacher(null);
      setTeacherForm({ name: "", className: "", email: "", phone: "" });
    }
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherForm({ ...teacherForm, [name]: value });
  };

  const handleSaveTeacher = (e) => {
    e.preventDefault();
    if (!teacherForm.name || !teacherForm.className) {
      alert("Please fill in the Name and Class!");
      return;
    }

    if (editingTeacher) {
      // Action: Update
      setTeachers(
        teachers.map((t) => (t.id === editingTeacher.id ? { ...t, ...teacherForm } : t))
      );
    } else {
      // Action: Add
      setTeachers([
        ...teachers,
        {
          id: Date.now(),
          ...teacherForm,
        },
      ]);
    }

    setShowModal(false);
    setTeacherForm({ name: "", className: "", email: "", phone: "" });
    setEditingTeacher(null);
  };

  const handleDeleteTeacher = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    }
  };

  return (
    <div>
      <AdminSidebar />
      <div className="children-page" style={{ padding: "20px", marginLeft: "270px" }}>
        <div className="page-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <h1 style={{ color: "#4b0082", fontSize: "2.5rem", fontWeight: "bold" }}>
              Manage Teachers 👩‍🏫
            </h1>
            <p style={{ color: "#777", marginTop: "5px" }}>Add, edit, view and manage all teachers</p>
          </div>
          <button 
            className="add-route-btn" 
            onClick={() => openModal()}
            style={{ 
              padding: "12px 24px", 
              backgroundColor: "#8a2be2", 
              color: "white", 
              border: "none", 
              borderRadius: "15px", 
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem"
            }}
          >
            + Add New Teacher
          </button>
        </div>

        {/* Grid layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "25px", marginTop: "30px" }}>
          {teachers.map((teacher) => (
            <div 
              key={teacher.id} 
              style={{ 
                border: "none", 
                padding: "25px", 
                borderRadius: "20px", 
                backgroundColor: "#fff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ fontSize: "2.5rem", backgroundColor: "#f3e8ff", padding: "10px", borderRadius: "50%", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  👩‍🏫
                </div>
                <div>
                  <h2 style={{ color: "#4b0082", margin: 0, fontSize: "1.5rem" }}>{teacher.name}</h2>
                  <span style={{ backgroundColor: "#e8f5e9", color: "#2e7d32", padding: "3px 10px", borderRadius: "10px", fontSize: "0.8rem", fontWeight: "bold", display: "inline-block", marginTop: "5px" }}>Active</span>
                </div>
              </div>

              <div style={{ color: "#555", fontSize: "0.95rem", display: "flex", flexDirection: "column", gap: "8px" }}>
                <p>🏫 <strong>Class:</strong> {teacher.className}</p>
                <p>📧 <strong>Email:</strong> {teacher.email || "N/A"}</p>
                <p>📞 <strong>Phone:</strong> {teacher.phone || "N/A"}</p>
              </div>

              {/* Action Buttons: Edit and Delete */}
              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button 
                  onClick={() => openModal(teacher)}
                  style={{ 
                    backgroundColor: "#e8eaf6", 
                    color: "#3f51b5", 
                    border: "none", 
                    padding: "10px 20px", 
                    borderRadius: "12px", 
                    cursor: "pointer",
                    width: "50%",
                    fontWeight: "bold"
                  }}
                >
                  📝 Edit
                </button>
                <button 
                  onClick={() => handleDeleteTeacher(teacher.id)}
                  style={{ 
                    backgroundColor: "#ffebee", 
                    color: "#c62828", 
                    border: "none", 
                    padding: "10px 20px", 
                    borderRadius: "12px", 
                    cursor: "pointer",
                    width: "50%",
                    fontWeight: "bold"
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Form shared for both Add and Edit */}
        {showModal && (
          <div className="modal-backdrop" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
            <div className="modal-content" style={{ backgroundColor: "white", padding: "30px", borderRadius: "20px", width: "400px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
              <h2 style={{ color: "#4b0082", marginBottom: "20px" }}>
                {editingTeacher ? "Edit Teacher Details" : "Add New Teacher"}
              </h2>
              <form onSubmit={handleSaveTeacher} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <input type="text" name="name" placeholder="Teacher Name" value={teacherForm.name} onChange={handleInputChange} style={{ padding: "12px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "1rem" }} required />
                <input type="text" name="className" placeholder="Class Name" value={teacherForm.className} onChange={handleInputChange} style={{ padding: "12px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "1rem" }} required />
                <input type="email" name="email" placeholder="Email Address" value={teacherForm.email} onChange={handleInputChange} style={{ padding: "12px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "1rem" }} />
                <input type="text" name="phone" placeholder="Phone Number" value={teacherForm.phone} onChange={handleInputChange} style={{ padding: "12px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "1rem" }} />
                
                <div style={{ display: "flex", justifyContent: "end", gap: "10px", marginTop: "15px" }}>
                  <button type="button" onClick={() => setShowModal(false)} style={{ padding: "10px 20px", borderRadius: "10px", border: "1px solid #ddd", background: "#f5f5f5", cursor: "pointer", fontWeight: "bold" }}>Cancel</button>
                  <button type="submit" style={{ padding: "10px 20px", borderRadius: "10px", border: "none", background: "#8a2be2", color: "white", cursor: "pointer", fontWeight: "bold" }}>
                    {editingTeacher ? "Update" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}