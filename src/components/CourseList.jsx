import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar"; // Optional search functionality
import { fetchCourse } from "../api/courses";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Optional for search

  useEffect(() => {
    const getCourses = async () => {
      const fetchedCourses = await fetchCourse();
      setCourses(fetchedCourses);
    };
    getCourses();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Implement search logic to filter courses based on term
  };

  const filteredCourses = searchTerm
    ? courses.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : courses;

  return (
    <div>
      <h1>Course Listing</h1>
      <SearchBar onSearch={handleSearch} /> {/* Optional */}
      <div className="course-list">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
