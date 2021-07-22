import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

function AllAgents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/agent")
      .then((response) => response.json())
      .then((data) => setAgents(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="grid-container">
        <header>
          <div className="item1">
            <Header />
            <h1>All Agents</h1>
          </div>
        </header>
        <div>
          <main>
            <div className="item2">
              <div className="agent_grid">
                {agents.map((agent) => {
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
                          <div className="flex-container svgIcon">
                            <Link to={`/edit/${agent.agentId}`}>edit</Link>
                            <Link to={`/delete/${agent.agentId}`}>delete</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
          <nav>
            <NavBar />
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

export default AllAgents;
