import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaBars, FaCheck, FaPlus, FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="modules-container">
      <div className="module-header">
        <button className="btn btn-outline-secondary">Collapse All</button>
        <button className="btn btn-outline-secondary">View Progress</button>
        <button className="btn btn-outline-success">
          <FaCheck className="module-check-icon" />
          Publish All
        </button>
        <button className="btn btn-danger">+ Module</button>
        <FaEllipsisV className="module-menu-icon" />
      </div>
      <hr />
      <ul className="list-group">
        <div className="crud-operations">
          <input
            value={module.name}
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <div className="add-update-buttons">
            <button
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </button>
            <button
              className="btn btn-success"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
          </div>
        </div>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="module-item">
              <div className="module-content">
                <div className="module-content-start">
                  <FaBars className="module-icon" />
                  <span>{module.name}</span>
                </div>
                <div className="module-actions">
                  <button
                    className="btn btn-success"
                    style={{ marginRight: "5px" }}
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginRight: "5px" }}
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <FaCheck className="module-check-icon" />
                  <FaPlus />
                  <FaEllipsisV />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
