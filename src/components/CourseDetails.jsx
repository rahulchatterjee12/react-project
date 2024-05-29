import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourse } from "../api/courses.js"; // Adjust path if using a custom backend

function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  console.log(courseId);

  useEffect(() => {
    const getCourseDetails = async () => {
      const fetchedCourse = await fetchCourse(courseId);
      setCourse(fetchedCourse);
    };
    getCourseDetails();
  }, [courseId]);

  if (!course) return <div>Loading course details...</div>;

  return (
    <div>
      <h1>{course.name}</h1>
      <p>Instructor: {course.instructor}</p>
      {/* Display other course details from courseModel */}
    </div>
  );
}

export default CourseDetails;
