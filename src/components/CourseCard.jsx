import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <Link to={`/courses/${course.id}`}>
        <h2>{course.name}</h2>
        <p>Instructor: {course.instructor}</p>
      </Link>
    </div>
  );
}

export default CourseCard;
