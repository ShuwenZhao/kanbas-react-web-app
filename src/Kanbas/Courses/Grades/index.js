import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import {AiOutlineSearch,AiOutlineFilter } from "react-icons/ai";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div className="grade-container">
      <div className="flex-container">
        <h3 className="gradebook">Gradebook</h3>
        <div className="buttons-container">
          <button className="btn btn-light me-2">
            <FaFileImport /> Import
          </button>
          <button className="btn btn-light me-2">
            <FaFileExport /> Export
          </button>
          <button className="btn btn-light">
            <IoMdSettings />
          </button>
        </div>
      </div>

      <div className="row">
        {/* Student Names Section */}
        <div className="col-md-6 mb-3">
          <h4>Student Names</h4>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
            />
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            ></button>
            <ul className="dropdown-menu">
              {/* Dropdown items can go here */}
            </ul>
          </div>
          <button className="btn btn-light w-50">
            <AiOutlineFilter /> Apply Filters
          </button>
        </div>
        {/* Assignment Names Section */}
        <div className="col-md-6">
          <h4>Assignment Names</h4>
          <div className="input-group mb-3">
            <span className="input-group-text">
            <AiOutlineSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Assignments"
            />
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            ></button>
            <ul className="dropdown-menu">
              {/* Dropdown items can go here */}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-container table-responsive">
        <table className="table table-striped">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>

          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
