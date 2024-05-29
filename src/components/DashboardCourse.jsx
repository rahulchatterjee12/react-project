import React from "react";
import ProgressBar from "./ProgressBar"; // Optional progress bar component

function DashboardCourse({ course }) {
  // Implement logic to fetch or calculate due date
  const dueDate = "2024-06-15";

  return (
    <li className="course-card">
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Due Date: {dueDate}</p>
      {/* Display additional information like thumbnail */}
      <ProgressBar progress={50} /> {/* Optional progress bar */}
    </li>
  );
}

export default DashboardCourse;
