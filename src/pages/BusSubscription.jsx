import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import RouteFormModal from "../components/RouteFormModal";
import RouteSubscribersModal from "../components/RouteSubscribersModal";
import "../styles/BusSubscription.css";

export default function BusSubscription() {
  const [showModal, setShowModal] = useState(false);
  const [editingRoute, setEditingRoute] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  // 1. Hna bn-load el-data men el-LocalStorage awel ma el-page tfta7, law fady bn7ot el-mock data
  const [routes, setRoutes] = useState(() => {
    const savedRoutes = localStorage.getItem("bus_routes");
    return savedRoutes ? JSON.parse(savedRoutes) : [
      {
        id: 1,
        routeName: "Nasr City Route",
        areasCovered: "Nasr City, Abbas El Akkad, Makram Ebeid",
        pickupSupervisor: "Ms. Sarah Ahmed",
        startTime: "07:00",
        endTime: "08:00",
        stops: 8,
        fee: 300,
        status: "Active",
        children: ["Omar Ali", "Mariam Ahmed", "Youssef Hassan", "Jana Mohamed"],
      },
      {
        id: 2,
        routeName: "Heliopolis Route",
        areasCovered: "Heliopolis, Korba, Merghany",
        pickupSupervisor: "Ms. Nada Hassan",
        startTime: "07:15",
        endTime: "08:10",
        stops: 6,
        fee: 350,
        status: "Active",
        children: ["Adam Ahmed", "Sara Ali", "Laila Hassan"],
      },
    ];
  });

  // 2. Kol ma array el-routes t-ghayar (Add/Edit/Delete), bn-save el-gded f LocalStorage
  useEffect(() => {
    localStorage.setItem("bus_routes", JSON.stringify(routes));
  }, [routes]);

  const addRoute = (route) => {
    setRoutes([
      ...routes,
      {
        ...route,
        id: Date.now(),
        children: route.children || [], // Taked enha array 3ashan el-length msh t-crash
      },
    ]);
    setShowModal(false);
  };

  const updateRoute = (updated) => {
    setRoutes(
      routes.map((route) => (route.id === updated.id ? updated : route))
    );
    setEditingRoute(null);
  };

  const deleteRoute = (id) => {
    if (window.confirm("Delete this route?")) {
      setRoutes(routes.filter((route) => route.id !== id));
    }
  };

  const activeRoutes = routes.filter((route) => route.status === "Active").length;

  const totalChildren = routes.reduce(
    (total, route) => total + (route.children ? route.children.length : 0),
    0
  );

  const totalRevenue = routes.reduce(
    (total, route) => total + (route.children ? route.children.length : 0) * route.fee,
    0
  );

  const totalStops = routes.reduce(
    (total, route) => total + Number(route.stops),
    0
  );

  return (
    <div>
      <AdminSidebar />
      <div className="bus-page">
        <div className="page-header">
          <div>
            <h1>Bus Subscription</h1>
            <p>Manage transportation routes and subscribers</p>
          </div>
          <button className="add-route-btn" onClick={() => setShowModal(true)}>
            + Add New Route
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Active Routes</h3>
            <h2>{activeRoutes}</h2>
          </div>
          <div className="stat-card">
            <h3>Children Enrolled</h3>
            <h2>{totalChildren}</h2>
          </div>
          <div className="stat-card">
            <h3>Monthly Revenue</h3>
            <h2>EGP {totalRevenue}</h2>
          </div>
          <div className="stat-card">
            <h3>Total Stops</h3>
            <h2>{totalStops}</h2>
          </div>
        </div>

        <div className="routes-grid">
          {routes.map((route) => (
            <div key={route.id} className="route-card">
              <div className="route-header">
                <h2>🚌 {route.routeName}</h2>
                <span className={route.status === "Active" ? "active-status" : "inactive-status"}>
                  {route.status}
                </span>
              </div>
              <p>⏰ {route.startTime} - {route.endTime}</p>
              <p>📍 {route.areasCovered}</p>
              <p>👩‍🏫 Supervisor: {route.pickupSupervisor}</p>
              <p>🚏 Stops: {route.stops}</p>
              <p>👶 Subscribers: {route.children ? route.children.length : 0}</p>
              <p>💰 Revenue: EGP {(route.children ? route.children.length : 0) * route.fee}</p>

              <div className="route-actions">
                <button className="view-btn" onClick={() => setSelectedRoute(route)}>
                  View Subscribers
                </button>
                <button className="edit-btn" onClick={() => setEditingRoute(route)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteRoute(route.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <RouteFormModal onClose={() => setShowModal(false)} onSave={addRoute} />
        )}

        {editingRoute && (
          <RouteFormModal route={editingRoute} onClose={() => setEditingRoute(null)} onSave={updateRoute} />
        )}

        {selectedRoute && (
          <RouteSubscribersModal route={selectedRoute} onClose={() => setSelectedRoute(null)} />
        )}
      </div>
    </div>
  );
}