import Home from "./home";
import Login from "./login";
import Signup from "./users/signup";
import Profile from "./profile";
import Search from "./search";
import Details from "./details";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import UserList from "./users/list";
import SignIn from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
function Project() {
  const { pathname } = useLocation();
  return (
    <div className="row">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/Project/" className={`list-group-item nav-link ${pathname === "/Project/" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/Project/signin" className={`list-group-item nav-link ${pathname === "/Project/signin" ? "active" : ""}`}>
              Signin
            </Link>
            <Link to="/Project/signup" className={`list-group-item nav-link ${pathname === "/Project/signup" ? "active" : ""}`}>
              Signup
            </Link>
            <Link to="/Project/account" className={`list-group-item nav-link ${pathname === "/Project/account" ? "active" : ""}`}>
              Account
            </Link>
            <Link to="/Project/search" className={`list-group-item nav-link ${pathname === "/Project/search" ? "active" : ""}`}>
              Search
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/details/:albumId" element={<Details />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/table" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;
