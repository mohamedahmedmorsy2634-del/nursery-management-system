import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import EventFormModal from "../components/EventFormModal";
import EventDetailsModal from "../components/EventDetailsModal";
import "../styles/EventsActivities.css";

export default function EventsActivities() {

  const [showModal, setShowModal] =
    useState(false);

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const [editingEvent, setEditingEvent] =
    useState(null);

  const [events, setEvents] = useState([
    {
      id: 1,

      title: "Monday Sports Day",

      type: "Recurring",

      date: "Every Monday",

      startTime: "11:00 AM",

      endTime: "12:00 PM",

      location: "Outdoor Playground",

      participants: "All Classes",

      description:
        "Weekly sports and physical activities.",

      status: "Upcoming",

      icon: "⚽",
    },

    {
      id: 2,

      title: "Spring Concert",

      type: "Event",

      date: "May 5, 2026",

      startTime: "10:00 AM",

      endTime: "11:30 AM",

      location: "Main Hall",

      participants: "86 Children",

      description:
        "Annual spring concert.",

      status: "Upcoming",

      icon: "🎵",
    },

    {
      id: 3,

      title: "Art Exhibition",

      type: "Event",

      date: "May 15, 2026",

      startTime: "2:00 PM",

      endTime: "4:00 PM",

      location: "Gallery Room",

      participants:
        "Butterflies & Caterpillars",

      description:
        "Display children's artwork.",

      status: "Upcoming",

      icon: "🎨",
    },

    {
      id: 4,

      title: "Zoo Field Trip",

      type: "Trip",

      date: "May 18, 2026",

      startTime: "9:00 AM",

      endTime: "3:00 PM",

      location: "City Zoo",

      participants:
        "Butterflies Class",

      description:
        "Educational zoo trip.",

      status: "Upcoming",

      icon: "🦁",
    },

    {
      id: 5,

      title: "Summer Camp Registration",

      type: "Camp",

      date: "June 1-15",

      startTime: "All Day",

      endTime: "",

      location: "Butterflies Academy",

      participants: "Ages 3-6",

      description:
        "Summer camp registration.",

      status: "Upcoming",

      icon: "🏕️",
    },
  ]);
    const addEvent = (newEvent) => {

    setEvents([
      ...events,
      {
        ...newEvent,
        id: Date.now(),
      },
    ]);

    setShowModal(false);
  };

  const updateEvent = (updated) => {

    setEvents(
      events.map((event) =>
        event.id === updated.id
          ? updated
          : event
      )
    );

    setEditingEvent(null);
  };

  const deleteEvent = (id) => {

    if (
      window.confirm(
        "Delete this event?"
      )
    ) {
      setEvents(
        events.filter(
          (event) => event.id !== id
        )
      );
    }
  };
  return (
<div>

<AdminSidebar />

<div className="events-page">

<div className="events-header">

<div>

<h1>Events & Activities</h1>

<p>
Upcoming events, trips,
and special activities
</p>

</div>

<button
className="add-event-btn"
onClick={() => setShowModal(true)}
>
＋ Add New Event
</button>

</div>

<div className="events-grid">

{events.map((event) => (

<div
key={event.id}
className="event-card"
>

<div className="event-top">

<div className="event-icon">
{event.icon}
</div>

<div>

<h3>{event.title}</h3>

<span className="event-type">
{event.type}
</span>

</div>

</div>

<div className="event-info">

<p>
📅 {event.date}
</p>

<p>
🕒 {event.startTime}
{" "}
{event.endTime &&
` - ${event.endTime}`}
</p>

<p>
📍 {event.location}
</p>

<p>
👥 {event.participants}
</p>

</div>

<div className="event-actions">

<button
className="view-btn"
onClick={() =>
setSelectedEvent(event)
}
>
View
</button>

<button
className="edit-btn"
onClick={() =>
setEditingEvent(event)
}
>
Edit
</button>

<button
className="delete-btn"
onClick={() =>
deleteEvent(event.id)
}
>
Delete
</button>

</div>

</div>

))}

</div>
{showModal && (

<EventFormModal
onClose={() =>
setShowModal(false)
}
onSave={addEvent}
/>

)}

{editingEvent && (

<EventFormModal
event={editingEvent}
onClose={() =>
setEditingEvent(null)
}
onSave={updateEvent}
/>

)}

{selectedEvent && (

<EventDetailsModal
event={selectedEvent}
onClose={() =>
setSelectedEvent(null)
}
/>

)}

</div>
</div>
);
}