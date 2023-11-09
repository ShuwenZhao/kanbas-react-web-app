import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignmentAction,
  deleteAssignmentAction,
  updateAssignmentAction,
  setAssignmentsAction,
} from "./assignmentsReducer";
import {
  createAssignment,
  findAssignmentsForCourse,
  updateAssignment,
  deleteAssignment,
} from "./client";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  useEffect(() => {
    findAssignmentsForCourse(courseId).then((assignments) => {
      dispatch(setAssignmentsAction(assignments));
    });
  }, [courseId, dispatch]);

  const handleDelete = async (event,assignmentId) => {
    event.preventDefault();
    event.stopPropagation();
    const confirmation = window.confirm(
      "Are you sure you want to remove this assignment?"
    );
    if (confirmation) {
      await deleteAssignment(assignmentId);
      dispatch(deleteAssignmentAction(assignmentId));
    }
  };

  return (
    <div className="assignment-container">
      <div className="flex-container">
        <div>
          <input class="form-control" placeholder="Search for Assignment" />
        </div>
        <div className="assignment-buttons-header">
          <button className="btn btn-outline-success">+ Group</button>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
            className="btn btn-danger"
          >
            + Assignment
          </Link>
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
              <FaTrashAlt
                onClick={(event) => handleDelete(event, assignment._id)}
                className="delete-icon"
              />
              <FaEllipsisV />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
