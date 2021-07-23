
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import Error from "./Error";

function NavBar() {
  const auth = useContext(AuthContext);

  return (
    <div>
    <div className="item3">
      <div className="flex-container button-flex">
        <Link to="/" className="btn">
          <i>Home</i>
        </Link>
        <Link to="/agents" className="btn">
          <i>All Agents</i>
        </Link>
        <Link to="/add" className="btn">
          <i>Add Agents</i>
        </Link>
        {!auth.user && (
          <div>
            <Link to="/register" className="btn">
              <i>Register</i>
            </Link>
            <Link to="/login" className="btn">
              <i>Login</i>
            </Link>
          </div>
        )}
        {auth.user && (
          <div>
            <div>
              <Link to="/login" className="btn">
                <i>Logout</i>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default NavBar;
