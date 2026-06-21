import React, { useState } from "react";
import Sidebar from "../components/TeacherSidebar";
import "../styles/HealthNotes.css";

const children = [
  {
    id: 1,
    name: "Emma Wilson",
    age: "4 years old",
    status: "Healthy",
    bloodType: "O+",
    weight: "18 kg",
    height: "105 cm",
    avatar: "😊",
    allergies: [
      {
        name: "Peanut Allergy",
        note: "Severe - EpiPen required",
        severity: "critical",
      },
      {
        name: "Lactose Intolerant",
        note: "Avoid dairy products",
        severity: "moderate",
      },
    ],
    medications: [
      {
        name: "Asthma Inhaler",
        note: "Use as needed",
        available: "Emergency kit",
      },
    ],
    emergency: {
      mother: { name: "Sarah Wilson", phone: "+1 (555) 123-4567" },
      father: { name: "John Wilson", phone: "+1 (555) 987-6543" },
      pediatrician: {
        name: "Dr. Emily Chen",
        phone: "+1 (555) 246-8100",
      },
    },
  },
  {
    id: 2,
    name: "Liam Johnson",
    age: "5 years old",
    status: "Healthy",
    bloodType: "A+",
    weight: "20 kg",
    height: "110 cm",
    avatar: "🙂",
    allergies: [
      {
        name: "Bee Sting Allergy",
        note: "Carry EpiPen at all times",
        severity: "critical",
      },
    ],
    medications: [
      {
        name: "Asthma Medication",
        note: "Due at 2:00 PM daily",
        available: "Stored in classroom cabinet",
      },
    ],
    emergency: {
      mother: { name: "Laura Johnson", phone: "+1 (555) 321-7654" },
      father: { name: "Mark Johnson", phone: "+1 (555) 654-3210" },
      pediatrician: {
        name: "Dr. Alan Park",
        phone: "+1 (555) 111-2222",
      },
    },
  },
];

export default function HealthNotes() {
  const [selectedId, setSelectedId] = useState(1);

  // 🔥 FIX: prevents blank screen crash
  const child =
    children.find((c) => c.id === Number(selectedId)) || children[0];

  return (
    <div className="dashboard-wrapper">
      {/* 🔥 TEMP SAFE CHECK */}
      {Sidebar ? <Sidebar /> : null}

      <main className="main-content">
        <div className="hn-header">
          <div>
            <h1 className="hn-title">Health Notes</h1>
            <p className="hn-subtitle">
              Medical records and important health information
            </p>
          </div>
        </div>

        {/* Selector */}
        <div className="hn-selector-wrap">
          <label className="hn-selector-label">Select Child</label>
          <select
            className="hn-selector"
            value={selectedId}
            onChange={(e) => setSelectedId(Number(e.target.value))}
          >
            {children.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="hn-grid">
          {/* LEFT CARD */}
          <div className="hn-profile-card">
            <div className="hn-avatar">{child.avatar}</div>
            <h2 className="hn-child-name">{child.name}</h2>
            <p className="hn-child-age">{child.age}</p>

            <span className="hn-status-badge">❤️ {child.status}</span>

            <div className="hn-vitals">
              <div className="hn-vital-item">
                <span className="hn-vital-label">Blood Type</span>
                <span className="hn-vital-value">{child.bloodType}</span>
              </div>

              <div className="hn-vital-item">
                <span className="hn-vital-label">Weight</span>
                <span className="hn-vital-value">{child.weight}</span>
              </div>

              <div className="hn-vital-item">
                <span className="hn-vital-label">Height</span>
                <span className="hn-vital-value">{child.height}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hn-details">

            {/* Allergies */}
            <div className="hn-card">
              <h3 className="hn-card-title">⚠️ Allergies</h3>

              {child.allergies.map((a, i) => (
                <div
                  key={i}
                  className={`hn-allergy-item hn-allergy-${a.severity}`}
                >
                  <div>
                    <div className="hn-allergy-name">{a.name}</div>
                    <div className="hn-allergy-note">{a.note}</div>
                  </div>

                  <span className={`hn-badge hn-badge-${a.severity}`}>
                    {a.severity}
                  </span>
                </div>
              ))}
            </div>

            {/* Medications */}
            <div className="hn-card">
              <h3 className="hn-card-title">💊 Current Medications</h3>

              {child.medications.map((m, i) => (
                <div key={i} className="hn-med-item">
                  <div className="hn-med-name">{m.name}</div>
                  <div className="hn-med-note">{m.note}</div>
                  <div className="hn-med-available">
                    ℹ️ {m.available}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency */}
            <div className="hn-card">
              <h3 className="hn-card-title">📞 Emergency Contact</h3>

              <div className="hn-contacts-grid">
                <div>
                  <div className="hn-contact-role">Mother</div>
                  <div className="hn-contact-name">
                    {child.emergency.mother.name}
                  </div>
                  <a
                    href={`tel:${child.emergency.mother.phone}`}
                    className="hn-contact-phone"
                  >
                    {child.emergency.mother.phone}
                  </a>
                </div>

                <div>
                  <div className="hn-contact-role">Father</div>
                  <div className="hn-contact-name">
                    {child.emergency.father.name}
                  </div>
                  <a
                    href={`tel:${child.emergency.father.phone}`}
                    className="hn-contact-phone"
                  >
                    {child.emergency.father.phone}
                  </a>
                </div>

                <div>
                  <div className="hn-contact-role">Pediatrician</div>
                  <div className="hn-contact-name">
                    {child.emergency.pediatrician.name}
                  </div>
                  <a
                    href={`tel:${child.emergency.pediatrician.phone}`}
                    className="hn-contact-phone"
                  >
                    {child.emergency.pediatrician.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}