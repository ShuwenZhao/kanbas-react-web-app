import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiNotebookBold } from "react-icons/pi";
import { BsCalendarMonth } from "react-icons/bs";
import { BsFillInboxFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaShareSquare } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";

import "./index.css";
import "../../styles.css";
import NEU from "../../images/neu.png";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <AiOutlineDashboard className="wd-icon" />,
    Courses: <PiNotebookBold className="wd-icon" />,
    Calendar: <BsCalendarMonth className="wd-icon" />,
    Inbox: <BsFillInboxFill className="wd-icon" />,
    History: <BsClockHistory className="wd-icon" />,
    Studio: <HiOutlineDesktopComputer className="wd-icon" />,
    Commons: <FaShareSquare className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();

  return (
    <div className="wd-kanbas-navigation">
      <div className="logo-container">
        <img src={NEU} alt="NEU Logo" className="school-logo" />
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"} ${
            link === "Account" ? "account-link" : ""
          }`}
        >
          {linkToIconMap[link]}
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
