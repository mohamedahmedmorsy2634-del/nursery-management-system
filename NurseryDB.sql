CREATE DATABASE nursery_system;
USE nursery_system;

-- USERS
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('admin', 'teacher') NOT NULL
);

-- CLASSES
CREATE TABLE classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age_group VARCHAR(50)
);

-- CHILDREN
CREATE TABLE children (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    date_of_birth DATE,
    gender ENUM('male','female'),
    address TEXT,
    class_id INT,
    qr_code VARCHAR(255),
    monthly_fee DECIMAL(10,2),
    bus_subscribed BOOLEAN,
    activities_subscribed BOOLEAN,
    has_disability BOOLEAN,
    notes TEXT,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

-- PARENTS
CREATE TABLE parents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE child_parents (
    child_id INT,
    parent_id INT,
    PRIMARY KEY (child_id, parent_id),
    FOREIGN KEY (child_id) REFERENCES children(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_id) REFERENCES parents(id) ON DELETE CASCADE
);

-- MEDICAL
CREATE TABLE medical_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    child_id INT,
    medications TEXT,
    allergies TEXT,
    health_notes TEXT,
    FOREIGN KEY (child_id) REFERENCES children(id) ON DELETE CASCADE
);

-- ATTENDANCE
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    child_id INT,
    date DATE,
    check_in_time TIME,
    check_out_time TIME,
    FOREIGN KEY (child_id) REFERENCES children(id) ON DELETE CASCADE
);

-- DAILY REPORTS
CREATE TABLE daily_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    child_id INT,
    teacher_id INT,
    date DATE,
    report_text TEXT,
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (teacher_id) REFERENCES users(id)
);

-- FOOD MENU
CREATE TABLE food_menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day_of_week VARCHAR(20),
    meal_description TEXT
);

-- SCHEDULE
CREATE TABLE schedules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_id INT,
    day_of_week VARCHAR(20),
    activity VARCHAR(100),
    start_time TIME,
    end_time TIME,
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

-- EVENTS
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    date DATE
);

-- BUS
CREATE TABLE bus_routes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    route_name VARCHAR(100),
    driver_name VARCHAR(100),
    time_start TIME
);

CREATE TABLE bus_assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    child_id INT,
    route_id INT,
    pickup_time TIME,
    dropoff_time TIME,
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (route_id) REFERENCES bus_routes(id)
);

-- CAMPS
CREATE TABLE camps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('summer','winter'),
    name VARCHAR(100)
);

CREATE TABLE camp_children (
    id INT AUTO_INCREMENT PRIMARY KEY,
    child_id INT,
    camp_id INT,
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (camp_id) REFERENCES camps(id)
);

CREATE TABLE camp_activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    camp_id INT,
    activity_name VARCHAR(100),
    FOREIGN KEY (camp_id) REFERENCES camps(id)
);

CREATE TABLE camp_assessments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    child_id INT,
    camp_id INT,
    assessment_notes TEXT,
    FOREIGN KEY (child_id) REFERENCES children(id),
    FOREIGN KEY (camp_id) REFERENCES camps(id)
);