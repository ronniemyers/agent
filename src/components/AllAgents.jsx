import React from "react";
import { useState, useEffect, useContext } from "react";
import Header from "./utils/Header";
import NavBar from "./utils/NavBar";
import AuthContext from "../AuthContext.js";
import MapAgent from "./utils/MapAgent";
import RefreshToken from "./utils/RefreshToken";

function AllAgents() {
  const [agents, setAgents] = useState([]);
  const [errors] = useState([]);
  const auth = useContext(AuthContext);

  const getAgents = (token) => {
    const init = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch("http://localhost:8080/api/agent", init)
      .then((response) => response.json())
      .then((data) => setAgents(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAgents(auth.user.token);
  }, [auth.user.token]);

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
                <MapAgent agents={agents} errors={errors} mapAll={true} />
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
