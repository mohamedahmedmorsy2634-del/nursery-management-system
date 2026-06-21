import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function ManageEvents() {
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  
  // 1. Initializing form states with ALL parameters from the design blueprints
  const [eventForm, setEventForm] = useState({
    title: "",
    type: "Event",
    date: "",
    status: "Upcoming",
    startTime: "",
    endTime: "",
    location: "",
    capacity: "",
    participants: "All Classes",
    description: "",
    icon: "🎉 Event"
  });

  // 2. Load and save from LocalStorage
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("nursery_events");
    return savedEvents ? JSON.parse(savedEvents) : [
      {
        id: 1,
        title: "Monday Sports Day",
        type: "Event",
        date: "Every Monday",
        status: "Recurring",
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        location: "Outdoor Playground",
        capacity: "50",
        participants: "All Classes",
        description: "Weekly outdoor sports and physical activities.",
        icon: "⚽ Sports"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("nursery_events", JSON.stringify(events));
  }, [events]);

  const openModal = (event = null) => {
    if (event) {
      setEditingEvent(event);
      setEventForm({ ...event });
    } else {
      setEditingEvent(null);
      setEventForm({
        title: "",
        type: "Event",
        date: "",
        status: "Upcoming",
        startTime: "",
        endTime: "",
        location: "",
        capacity: "",
        participants: "All Classes",
        description: "",
        icon: "🎉 Event"
      });
    }
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value });
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date) {
      alert("Please enter at least Title and Date!");
      return;
    }

    if (editingEvent) {
      setEvents(events.map((ev) => (ev.id === editingEvent.id ? { ...ev, ...eventForm } : ev)));
    } else {
      setEvents([...events, { id: Date.now(), ...eventForm }]);
    }

    setShowModal(false);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((ev) => ev.id !== id));
    }
  };

  // Helper functionality to extract emoji for card display
  const getEmoji = (iconStr) => {
    return iconStr ? iconStr.split(" ")[0] : "🎉";
  };

  return (
    <div>
      <AdminSidebar />
      <div className="events-page" style={{ padding: "25px", marginLeft: "270px", fontFamily: "sans-serif" }}>
        
        {/* Header styling */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <div>
            <h1 style={{ color: "#4b0082", fontSize: "2.3rem", fontWeight: "bold", margin: 0 }}>Events & Activities</h1>
            <p style={{ color: "#8a2be2", fontSize: "1.05rem", marginTop: "5px" }}>Upcoming events, trips, and special activities</p>
          </div>
          <button 
            onClick={() => openModal()}
            style={{ padding: "12px 24px", backgroundColor: "#8a2be2", color: "white", border: "none", borderRadius: "15px", cursor: "pointer", fontWeight: "bold", fontSize: "1rem" }}
          >
            + Add New Event
          </button>
        </div>

        {/* Events Cards Layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "25px" }}>
          {events.map((event) => (
            <div key={event.id} style={{ border: "1px solid #f0f0f0", padding: "25px", borderRadius: "20px", backgroundColor: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                <div style={{ fontSize: "2rem", backgroundColor: "#9c27b0", padding: "12px", borderRadius: "18px", width: "45px", height: "45px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                  {getEmoji(event.icon)}
                </div>
                <div>
                  <h2 style={{ color: "#2d0066", margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>{event.title}</h2>
                  <span style={{ backgroundColor: "#f3e5f5", color: "#7b1fa2", padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: "bold", display: "inline-block", marginTop: "6px" }}>
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Event Metadata */}
              <div style={{ color: "#666", fontSize: "1rem", display: "flex", flexDirection: "column", gap: "12px", borderBottom: "1px solid #f5f5f5", paddingBottom: "20px" }}>
                <p style={{ margin: 0 }}>📅 <strong>Date:</strong> {event.date}</p>
                <p style={{ margin: 0 }}>🕒 <strong>Time:</strong> {event.startTime} - {event.endTime}</p>
                <p style={{ margin: 0 }}>📍 <strong>Location:</strong> {event.location || "N/A"}</p>
                <p style={{ margin: 0 }}>👥 <strong>Participants:</strong> {event.participants}</p>
                {event.capacity && <p style={{ margin: 0 }}>🔢 <strong>Capacity:</strong> {event.capacity} Kids</p>}
                {event.description && <p style={{ margin: 0, color: "#555", fontStyle: "italic", backgroundColor: "#fafafa", padding: "10px", borderRadius: "8px" }}>📝 {event.description}</p>}
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: "15px", display: "flex", gap: "15px" }}>
                <button style={{ flex: 1, backgroundColor: "#f5f5f5", color: "#666", border: "none", padding: "12px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>View</button>
                <button onClick={() => openModal(event)} style={{ flex: 1, backgroundColor: "#e3f2fd", color: "#1e88e5", border: "none", padding: "12px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>Edit</button>
                <button onClick={() => handleDeleteEvent(event.id)} style={{ flex: 1, backgroundColor: "#ffebee", color: "#e53935", border: "none", padding: "12px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Form */}
        {showModal && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000 }}>
            <div style={{ backgroundColor: "white", padding: "35px", borderRadius: "24px", width: "700px", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 15px 35px rgba(0,0,0,0.15)", position: "relative" }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                <h2 style={{ color: "#4b0082", margin: 0, fontSize: "1.8rem" }}>{editingEvent ? "Edit Event" : "Add New Event"}</h2>
                <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: "1.8rem", cursor: "pointer", color: "#999" }}>✕</button>
              </div>

              <form onSubmit={handleSaveEvent}>
                {/* Grid Layout */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  
                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Event Title</label>
                    <input type="text" name="title" value={eventForm.title} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", boxSizing: "border-box" }} required />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Event Type</label>
                    <select name="type" value={eventForm.type} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", background: "#fff" }}>
                      <option value="Event">Event</option>
                      <option value="Trip">Trip</option>
                      <option value="Special Activity">Special Activity</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Date</label>
                    <input type="text" name="date" placeholder="e.g., Every Monday or MM/DD/YYYY" value={eventForm.date} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", boxSizing: "border-box" }} required />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Status</label>
                    <select name="status" value={eventForm.status} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", background: "#fff" }}>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Recurring">Recurring</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Start Time</label>
                    <input type="text" name="startTime" placeholder="e.g., 11:00 AM" value={eventForm.startTime} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", boxSizing: "border-box" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>End Time</label>
                    <input type="text" name="endTime" placeholder="e.g., 12:00 PM" value={eventForm.endTime} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", boxSizing: "border-box" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Location</label>
                    <input type="text" name="location" value={eventForm.location} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", boxSizing: "border-box" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Capacity</label>
                    <input type="number" name="capacity" value={eventForm.capacity} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", boxSizing: "border-box" }} />
                  </div>

                  <div style={{ gridColumn: "span 2" }}>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Participants</label>
                    <input type="text" name="participants" value={eventForm.participants} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", boxSizing: "border-box" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Description</label>
                    <textarea name="description" value={eventForm.description} onChange={handleInputChange} placeholder="Enter event details here..." style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", minHeight: "80px", resize: "none", boxSizing: "border-box" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#4b0082", fontWeight: "bold", marginBottom: "8px" }}>Icon</label>
                    <select name="icon" value={eventForm.icon} onChange={handleInputChange} style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #ddd", background: "#fff" }}>
                      <option value="🎉 Event">🎉 Event</option>
                      <option value="⚽ Sports">⚽ Sports</option>
                      <option value="🚌 Trip">🚌 Trip</option>
                      <option value="🎨 Art/Coloring">🎨 Art/Coloring</option>
                      <option value="🎂 Birthday">🎂 Birthday</option>
                    </select>
                  </div>

                </div>

                <div style={{ display: "flex", justifyContent: "end", gap: "15px", marginTop: "30px" }}>
                  <button type="button" onClick={() => setShowModal(false)} style={{ padding: "12px 25px", borderRadius: "12px", border: "1px solid #ddd", background: "#f5f5f5", cursor: "pointer", fontWeight: "bold" }}>Cancel</button>
                  <button type="submit" style={{ padding: "12px 25px", borderRadius: "12px", border: "none", background: "#8a2be2", color: "white", cursor: "pointer", fontWeight: "bold" }}>
                    {editingEvent ? "Update Event" : "Save Event"}
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