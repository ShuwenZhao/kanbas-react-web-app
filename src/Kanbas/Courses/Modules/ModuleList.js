import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaBars, FaCheck, FaPlus, FaEllipsisV } from "react-icons/fa";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="modules-container">
      <div className="module-header">
        <button className="btn btn-outline-secondary">Collapse All</button>
        <button className="btn btn-outline-secondary">View Progress</button>
        <button className="btn btn-outline-success"><FaCheck className="module-check-icon" />Publish All</button>
        <button className="btn btn-danger">+ Module</button>
        <FaEllipsisV className="module-menu-icon" />
      </div>
      <hr />
      <ul className="list-group">
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
