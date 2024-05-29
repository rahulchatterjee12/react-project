import React, { useState, useEffect } from "react";
import { fetchEnrolledCourses } from "../api/courses";
import DashboardCourse from "./DashboardCourse";
// Import components/services for fetching enrolled courses and user data (if implemented)

function StudentDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getEnrolledCourses = async () => {
      // Fetch enrolled courses based on logged-in user (replace with your logic)
      const fetchedCourses = await fetchEnrolledCourses();
      setCourses(fetchedCourses);
    };
    getEnrolledCourses();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      {courses.length > 0 ? (
        <ul className="course-list">
          {courses.map((course) => (
            <DashboardCourse key={course.id} course={course} />
          ))}
        </ul>
      ) : (
        <p>You are not enrolled in any courses yet.</p>
      )}
    </div>
  );
}

export default StudentDashboard;
