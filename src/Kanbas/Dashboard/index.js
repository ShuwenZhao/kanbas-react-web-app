import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="container mt-5" style={{ paddingLeft: "30px" }}>
      <h1>Dashboard</h1>
      <hr />
      <div style={{ paddingLeft: "40px" }}>
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="crud-operations">
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <div className="add-update-buttons">
            <button
              className="btn btn-success"
              style={{ marginRight: "10px" }}
              onClick={addNewCourse}
            >
              Add
            </button>
            <button className="btn btn-primary" onClick={updateCourse}>
              Update
            </button>
          </div>
        </div>

        <div className="row">
          {courses.map((course, index) => (
            <div key={course._id} className="col-md-4 col-sm-6 mb-4">
              <Link
                to={`/Kanbas/Courses/${course._id}`}
                className="text-decoration-none"
              >
                <div className="card">
                  <img
                    src="https://www.eastbaypaintcenter.com/cdn/shop/products/FFCDD8_1200x.png?v=1611256387"
                    alt={course.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="flex-container">
                      <h5 className="card-title">{course.name}</h5>
                      <button
                        className="btn btn-warning"
                        style={{ marginRight: "10px" }}
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <p className="card-text">{course.number}</p>
                    <p className="card-text">{course.startDate}</p>
                    <p className="card-text">{course.endDate}</p>
                  </div>
                  <div className="card-footer">
                    {/* Any footer details or actions for the course */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
