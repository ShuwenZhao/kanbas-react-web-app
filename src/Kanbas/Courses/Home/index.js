import ModuleList from "../Modules/ModuleList";
import {
  FaBan,
  FaCheckCircle,
  FaBell,
  FaFileImport,
  FaCloudDownloadAlt,
  FaHome,
  FaStream,
  FaBullhorn,
  FaChartBar,
} from "react-icons/fa";
import { ImNotification } from "react-icons/im";
import "./index.css";

function Home() {
  return (
    <div className="whole-container">
      <ModuleList />
      <div className="right-container">
        <h5 style={{ color: "black" }}>Course Status</h5>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-light">
            <FaBan style={{ paddingRight: "5px" }} />
            Unpublish
          </button>
          <button type="button" className="btn btn-success">
            <FaCheckCircle style={{ paddingRight: "5px" }} /> Published
          </button>
        </div>
        <ul className="list-group mt-4">
          <li
            className="list-group-item"
            style={{ backgroundColor: "lightgray" }}
          >
            <FaFileImport style={{ backgroundColor: "black" }} />
            <a href="#">
              <span className="right-text-style">Import Existing Content</span>
            </a>
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "lightgray" }}
          >
            <FaCloudDownloadAlt />
            <a href="#">
              <span className="right-text-style">Import From Commons</span>
            </a>
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "lightgray" }}
          >
            <FaHome />
            <a href="#">
              <span className="right-text-style">Choose Home Page</span>
            </a>
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "lightgray" }}
          >
            <FaStream />
            <a href="#">
              <span className="right-text-style">View Course Stream</span>
            </a>
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "lightgray" }}
          >
            <FaBullhorn />
            <a href="#">
              <span className="right-text-style">New Announcement</span>
            </a>
          </li>
          <li
            className="list-group-item"
            style={{ backgroundColor: "lightgray" }}
          >
            <FaChartBar />
            <a href="#">
              <span className="right-text-style">New Analytics</span>
            </a>
          </li>

          <li
            className="list-group-item"
            style={{ backgroundColor: "lightgray" }}
          >
            <FaBell />
            <a href="#">
              <span className="right-text-style">
                View Course Notifications
              </span>
            </a>
          </li>
        </ul>

        <br />

        <div>
          <h5>To Do</h5>
          <hr />
          <div className="d-flex justify-content-between align-items-center mb-3">
            <ul className="list-group-1">
              <li className="list-group-item flex-container">
                <div className="icon-column">
                  <ImNotification />
                </div>
                <div className="content-column">
                  <a href="#" className="custom-link">
                    Grade A1 - ENV + HTML
                  </a>
                  <p className="right-contents-grey-text">
                    100 points Sep 18 at 11:59pm
                  </p>
                </div>
              </li>
              <li className="list-group-item flex-container">
                <div className="icon-column">
                  <ImNotification />
                </div>
                <div className="content-column">
                  <a href="#" className="custom-link">
                    Grade A2 - CSS + BOOTSTRAP
                  </a>
                  <p className="right-contents-grey-text">
                    100 points Sep 18 at 11:59pm
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
