import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./account.css";
function Account() {
  const [account, setAccount] = useState({
    username: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Project/signin");
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="account-container">
      <h1>Account</h1>
      <div className="account-form">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={account.username}
          onChange={(e) => setAccount({ ...account, username: e.target.value })}
        />

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={account.firstName}
          onChange={(e) =>
            setAccount({ ...account, firstName: e.target.value })
          }
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={account.lastName}
          onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
        />

        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          value={account.dob}
          onChange={(e) => setAccount({ ...account, dob: e.target.value })}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={account.email}
          onChange={(e) => setAccount({ ...account, email: e.target.value })}
        />

        <label htmlFor="role">Role</label>
        <select
          id="role"
          value={account.role}
          onChange={(e) => setAccount({ ...account, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>

        <button className="save-button" onClick={save}>
          Save
        </button>
        <button className="signout-button" onClick={signout}>
          Signout
        </button>

        <Link to="/Project/users/table" className="btn btn-warning w-100">
          Users
        </Link>
      </div>
    </div>
  );
}
export default Account;
