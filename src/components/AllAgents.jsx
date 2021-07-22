import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoSvg } from "./svg/LogoSvg";
import { EditSvg } from "./svg/EditSvg";
import { DeleteSvg } from "./svg/DeleteSvg";
import NavBar from "./NavBar";

// const DEFAULT_BUTTON = {
//   deleteBtn: "Delete",
//   cancelBtn: "Cancel",
// };

function AllAgents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/agent")
      .then((response) => response.json())
      .then((data) => setAgents(data))
      .catch((error) => console.log(error));
  }, []);

  // function findAgent() {
  //   const newAgents = [...agents];
  //   const removeAgent = newAgents.filter((a) => a.agentId === agentId);
  //   return removeAgent;
  // }

  return (
    <div>
      <div className="grid-container">
        <header>
          <div className="item1">
            <div className="flex-container">
              <Link to="/">
                <LogoSvg />
              </Link>
            </div>
            <p className="text-center username"> Username [citadelhell]</p>
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
                            <Link to={`/edit/${agent.agentId}`}>
                              <EditSvg />
                            </Link>
                            <Link to="/delete/:id">
                              <DeleteSvg />
                            </Link>
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
