import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="assignment-container">
      <div className="flex-container">
        <div>
          <input class="form-control" placeholder="Search for Assignment" />
        </div>
        <div className="assignment-buttons-header">
          <button className="btn btn-outline-success">+ Group</button>
          <button className="btn btn-danger">+ Module</button>
          <FaEllipsisV className="module-menu-icon" />
        </div>
      </div>
      <hr />

      <div className="list-group assignment-contents-container">
        <div className="assignment-header-container">
          <div className="start-icons flex-container">
            <FaEllipsisV />
            <h2>Assignments for Course {courseId}</h2>
          </div>
          <div className="end-icons flex-container">
            <div className="round-container">40% of Total</div>
            <span className="plus-icon">+</span>
            <FaEllipsisV />
          </div>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="custom-link list-group-item-assign"
          >
            <div className="start-icons">
              <FaEllipsisV />
              <FaRegPenToSquare className="check-icon" />
              <span>{assignment.title}</span>
            </div>
            <div className="end-icons">
              <FaCheckCircle className="check-icon" />
              <FaEllipsisV />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
