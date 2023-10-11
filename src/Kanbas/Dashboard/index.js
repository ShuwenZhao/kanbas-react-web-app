import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="container mt-5" style={{ paddingLeft: '30px' }}>
      <h1>Dashboard</h1>
      <hr />
      <div style={{ paddingLeft: '40px' }}>
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="row">
          {courses.map((course, index) => (
            <div key={course._id} className="col-md-4 col-sm-6 mb-4">
              <Link
                to={`/Kanbas/Courses/${course._id}`}
                className="text-decoration-none"
              >
                <div className="card">
                  <img
                    src={course.imageURL}
                    alt={course.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
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
