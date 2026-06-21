import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TeacherFormModal from "../components/TeacherFormModal";
import TeacherDetailsModal from "../components/TeacherDetailsModal";
import "../styles/ManageTeachers.css";

export default function ManageTeachers() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      teacherId: "T001",
      fullName: "Sarah Johnson",
      email: "sarah@butterflies.com",
      phone: "+20 1012345678",
      classAssigned: "Butterflies",
      position: "Lead Teacher",
      dob: "1990-05-12",
      gender: "Female",
      hireDate: "2023-01-15",
      username: "sarahj",
      password: "1234",
      status: "Active",
    },
    {
      id: 2,
      teacherId: "T002",
      fullName: "Emily Davis",
      email: "emily@butterflies.com",
      phone: "+20 1098765432",
      classAssigned: "Caterpillars",
      position: "Assistant Teacher",
      dob: "1993-07-21",
      gender: "Female",
      hireDate: "2023-03-10",
      username: "emilyd",
      password: "1234",
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const [showFormModal, setShowFormModal] = useState(false);

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const [editingTeacher, setEditingTeacher] = useState(null);

  const filteredTeachers = teachers.filter((teacher) =>
    [
      teacher.fullName,
      teacher.teacherId,
      teacher.email,
      teacher.classAssigned,
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleAddTeacher = () => {
    setEditingTeacher(null);
    setShowFormModal(true);
  };

  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher);
    setShowFormModal(true);
  };

  const handleViewTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setShowDetailsModal(true);
  };

  const handleDeleteTeacher = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (confirmDelete) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    }
  };

  const handleSaveTeacher = (teacherData) => {
    if (editingTeacher) {
      setTeachers(
        teachers.map((teacher) =>
          teacher.id === editingTeacher.id
            ? {
                ...teacherData,
                id: editingTeacher.id,
              }
            : teacher
        )
      );
    } else {
      const newTeacher = {
        ...teacherData,
        id: Date.now(),
      };

      setTeachers([...teachers, newTeacher]);
    }

    setShowFormModal(false);
  };

  return (
    <>
      <AdminSidebar />

      <div className="teachers-page">
        {/* HEADER */}
        <div className="teachers-header">
          <div>
            <h1>Manage Teachers 👩‍🏫</h1>

            <p>
              Add, edit, view and manage all teachers
            </p>
          </div>

          <button
            className="add-teacher-btn"
            onClick={handleAddTeacher}
          >
            ➕ Add New Teacher
          </button>
        </div>

        {/* SEARCH */}
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search teachers..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="teacher-search"
          />
        </div>

        {/* CARDS */}
        <div className="teachers-grid">
          {filteredTeachers.map((teacher) => (
            <div
              className="teacher-card"
              key={teacher.id}
            >
              <div className="teacher-card-header">
                <div className="teacher-avatar">
                  👩‍🏫
                </div>

                <div>
                  <h3>{teacher.fullName}</h3>

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
              </div>

              <div className="teacher-info">
                <p>
                  📧 {teacher.email}
                </p>

                <p>
                  📞 {teacher.phone}
                </p>

                <p>
                  🏫 {teacher.classAssigned}
                </p>

                <p>
                  🆔 {teacher.teacherId}
                </p>

                <p>
                  💼 {teacher.position}
                </p>
              </div>

              <div className="teacher-actions">
                <button
                  className="view-btn"
                  onClick={() =>
                    handleViewTeacher(teacher)
                  }
                >
                  👁 View
                </button>

                <button
                  className="edit-btn"
                  onClick={() =>
                    handleEditTeacher(teacher)
                  }
                >
                  ✏️ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDeleteTeacher(teacher.id)
                  }
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ADD / EDIT MODAL */}
        {showFormModal && (
          <TeacherFormModal
            teacher={editingTeacher}
            onClose={() =>
              setShowFormModal(false)
            }
            onSave={handleSaveTeacher}
          />
        )}

        {/* DETAILS MODAL */}
        {showDetailsModal && (
          <TeacherDetailsModal
            teacher={selectedTeacher}
            onClose={() =>
              setShowDetailsModal(false)
            }
          />
        )}
      </div>
    </>
  );
}