import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignmentAction,
  deleteAssignmentAction,
  updateAssignmentAction,
  setAssignmentsAction,
} from "../assignmentsReducer";
import {
  createAssignment,
  findAssignmentsForCourse,
  updateAssignment,
  deleteAssignment,
} from "../client";
import "./index.css";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch the assignment from Redux based on assignmentId
  const currentAssignment = useSelector((state) =>
    state.assignmentsReducer.assignments.find((a) => a._id === assignmentId)
  );

  // Create a local state to hold the assignment's data for editing
  const [localAssignment, setLocalAssignment] = useState(
    currentAssignment || {
      _id: "",
      title: "",
      description: "",
      points: "",
      course: courseId,
    }
  );

  useEffect(() => {
    if (
      assignmentId &&
      assignmentId !== "AssignmentEditor" &&
      currentAssignment
    ) {
      setLocalAssignment(currentAssignment);
    }
  }, [assignmentId, currentAssignment]);

  const handleSave = async () => {
    try {
      let savedAssignment;
      if (assignmentId && assignmentId !== "AssignmentEditor") {
        // Update the assignment in the database and Redux
        savedAssignment = await updateAssignment(assignmentId, localAssignment);
        dispatch(updateAssignmentAction(savedAssignment));
      } else {
        // Create a new assignment in the database and Redux
        const newAssignmentData = {
          ...localAssignment,
          course: courseId,
        };
        delete newAssignmentData._id; 
        savedAssignment = await createAssignment(courseId, newAssignmentData);
        dispatch(addAssignmentAction(savedAssignment));
      }
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    } catch (error) {
      console.error("Failed to save assignment:", error);
    }
  };

  const handleChange = (field, value) => {
    setLocalAssignment((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="assignment-container">
      <div className="assignment-header">
        <FaCheckCircle className="check-icon" />
        <span className="publish-text">Published</span>
        <FaEllipsisV className="ellip-icon" />
      </div>
      <hr />
      <div className="assignment-name">
        <h3>Assignment Name</h3>
        <input
          value={localAssignment.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          className="form-control mb-2"
        />
      </div>
      <div className="assignment-description">
        <h3>New Assignment Description</h3>
        <textarea
          value={localAssignment.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="form-control mb-2"
        ></textarea>
      </div>

      <div className="assignment-points">
        <h3>Points</h3>
        <input
          type="number"
          value={localAssignment.points}
          onChange={(e) => handleChange("points", e.target.value)}
          className="form-control mb-2"
        />
      </div>
      <div className="assignment-dates">
        <h3>Assign</h3>
        <input
          type="date"
          value={localAssignment.dueDate || ""}
          onChange={(e) => handleChange("dueDate", e.target.value)}
          className="form-control mb-2"
        />
        <h3>Available from</h3>
        <input
          type="date"
          value={localAssignment.availableFromDate || ""}
          onChange={(e) => handleChange("availableFromDate", e.target.value)}
          className="form-control mb-2"
        />
        <h3>Until</h3>
        <input
          type="date"
          value={localAssignment.availableUntilDate || ""}
          onChange={(e) => handleChange("availableUntilDate", e.target.value)}
          className="form-control mb-2"
        />
      </div>
      <hr />
      <div className="button-container float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
