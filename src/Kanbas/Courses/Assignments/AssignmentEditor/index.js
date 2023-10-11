import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
        <input value={assignment.title} className="form-control mb-2" />
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
