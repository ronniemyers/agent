import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Error from "./Error";
import { LogoSvg } from "./svg/LogoSvg";

// const user = null;
const user = {};

function NavBar() {
  return (
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
        {!user && (
          <div>
            <Link to="/register" className="btn">
              <i>Register</i>
            </Link>
            <Link to="/login" className="btn">
              <i>Login</i>
            </Link>
          </div>
        )}
        {user && (
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
  );
}

export default NavBar;
