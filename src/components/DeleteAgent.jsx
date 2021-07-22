import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoSvg } from "./svg/LogoSvg";

const DEFAULT_BUTTON = {
  deleteBtn: "Delete",
  cancelBtn: "Cancel",
};

function DeleteAgent() {
  const [deleteMsg, setDeleteMsg] = useState("Are you sure?");

  const [defaultBtn, setDefaultBtn] = useState(DEFAULT_BUTTON);
  const deleteAgentConfirmHandler = (event) => {
    event.preventDefault();

    const init = {
      method: "DELETE",
    };

    fetch(`http://localhost:8080/api/agent/${agentId}`, init)
      .then((response) => {
        if (response.status === 204) {
          getAgents();
        } else if (response.status === 404) {
          Promise.reject(`Agent ID ${agentId} not found`);
        } else {
          Promise.reject("Something unexpected went wrong");
        }
      })
      .catch((error) => console.log(error));
    setDeleteMsg(agentId + " has been deleted!");
    setDefaultBtn("", "");
  };

  return (
    <div>
      <div className="grid-container">
        <header>
          <div className="item1">
            <div className="flex-container">
              <Link to="/register">Register</Link>
              <Link to="/">
                <LogoSvg />
              </Link>
              <Link to="/login">Login</Link>
            </div>
            <h1>Delete Agent</h1>
          </div>
        </header>
        <div>
          <main>
            <div className="flex-container pop">
              <p>
                <label htmlFor="3" className="open">
                  Confirm Delete
                </label>
              </p>
              <input type="checkbox" id="3"></input>
              <div className="modal">
                <div className="modal__inner">
                  <div className="flex-container">
                    <div className="confirm-msg">{deleteMsg}</div>
                    <button
                      className="deleteBtn--1"
                      onClick={deleteAgentConfirmHandler}
                    >
                      {defaultBtn.deleteBtn}
                    </button>
                    <button onClick={cancelClickHandler} className="deleteBtn">
                      {defaultBtn.cancelBtn}
                    </button>
                    <label htmlFor="3">Exit</label>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <section>
            <div className="item2">
              {findAgent().map((agent) => {
                return (
                  <div key={agent.agentId}>
                    <div className="flex-container">
                      <div className="data">
                        <p>{agent.agentId}</p>
                        <p className="field">First name</p>
                        <p>{agent.firstName}</p>
                        <p className="field">Middle name</p>
                        <p>{agent.middleName}</p>
                        <p className="field">Last name</p>
                        <p>{agent.lastName}</p>
                        <p className="field">Date of birth</p>
                        <p>{agent.dob}</p>
                        <p className="field">Height (inches)</p>
                        <p>{agent.heightInInches}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <nav>
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
                <Link to="/register" className="btn">
                  <i>Register</i>
                </Link>
                <Link to="/login" className="btn">
                  <i>Login</i>
                </Link>
              </div>
            </div>
          </nav>
          <footer>
            <div className="item4">
              <p>&copy; Field Agent 2021</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default DeleteAgent;
