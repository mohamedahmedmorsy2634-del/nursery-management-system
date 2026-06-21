import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import FoodMenuModal from "../components/FoodMenuModal";
import "../styles/FoodMenu.css";

export default function FoodMenu() {

  const [editingDay, setEditingDay] = useState(null);

  const [menu, setMenu] = useState([
    {
      day: "Sunday",
      breakfast: "Pancakes with Fresh Berries",
      snack: "Banana & Crackers",
      lunch: "Chicken Pasta with Vegetables",
      vegetables: "Carrots, Broccoli",
    },

    {
      day: "Monday",
      breakfast: "Oatmeal with Honey",
      snack: "Apple Slices & Cheese",
      lunch: "Fish Fingers with Rice",
      vegetables: "Peas, Corn",
    },

    {
      day: "Tuesday",
      breakfast: "Toast with Peanut Butter",
      snack: "Yogurt & Grapes",
      lunch: "Beef Tacos with Salad",
      vegetables: "Lettuce, Tomatoes",
    },

    {
      day: "Wednesday",
      breakfast: "Scrambled Eggs & Toast",
      snack: "Orange Slices",
      lunch: "Chicken Nuggets & Fries",
      vegetables: "Green Beans",
    },

    {
      day: "Thursday",
      breakfast: "Cereal with Milk",
      snack: "Trail Mix",
      lunch: "Pizza Day",
      vegetables: "Mixed Salad",
    },
  ]);

  const saveMenu = (updatedDay) => {

    setMenu(
      menu.map((day) =>
        day.day === updatedDay.day
          ? updatedDay
          : day
      )
    );

    setEditingDay(null);
  };

  return (
    <div>

      <AdminSidebar />

      <div className="food-page">

        <div className="food-header">

          <div>
            <h1>Weekly Food Menu</h1>
            <p>
              Healthy and balanced meals
              for our little butterflies
            </p>
          </div>

        </div>

        {menu.map((item) => (

          <div
            key={item.day}
            className="day-card"
          >

            <div className="day-top">

              <h2>
                • {item.day}
              </h2>

              <button
                className="edit-menu-btn"
                onClick={() =>
                  setEditingDay(item)
                }
              >
                ✏️ Edit Menu
              </button>

            </div>

            <div className="meal-grid">

              <div className="meal breakfast">
                <h4>🍞 Breakfast</h4>
                <p>{item.breakfast}</p>
              </div>
              
              <div className="meal lunch">
                <h4>🍽 Lunch</h4>
                <p>{item.lunch}</p>
              </div>

              <div className="meal snack">
                <h4>🍎 Snack</h4>
                <p>{item.snack}</p>
              </div>

            </div>

          </div>
        ))}

        {editingDay && (
          <FoodMenuModal
            day={editingDay}
            onClose={() =>
              setEditingDay(null)
            }
            onSave={saveMenu}
          />
        )}

      </div>

    </div>
  );
}