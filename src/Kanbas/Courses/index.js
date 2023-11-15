import db from "../../Kanbas/Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import "./index.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();
  const currentScreen = location.pathname.split("/").pop();

  return (
    <div className="container mt-3">
      <div className="flex-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb p-2 custom-breadcrumb">
            <li
              className="breadcrumb-item active d-flex align-items-center"
              aria-current="page"
            >
              <FaBars className="icon-style" style={{ color: "red" }} />
              <span className="course-name-style ml-2">{course.name}/</span>
              <span className="mx-2">{currentScreen}</span>
            </li>
          </ol>
        </nav>
        <div>
          <a
            className="btn btn-secondary student-view-button"
            href="#"
            role="button"
          >
            <FaGlasses className="student-view-icon" />
            Student View
          </a>
        </div>
      </div>
      <hr className="full-width" />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
