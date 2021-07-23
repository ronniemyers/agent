import React from "react";
import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import AuthContext from '../AuthContext';

const DEFAULT_BUTTON = {
  deleteBtn: "Delete",
  cancelBtn: "Cancel",
};

function DeleteAgent() {
  const auth = useContext(AuthContext);
  const { id } = useParams();
  let agentData = {};
  const [agents, setAgents] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState("Are you sure?");
  const [defaultBtn, setDefaultBtn] = useState(DEFAULT_BUTTON);

  const deleteAgentConfirmHandler = (event) => {
    event.preventDefault();

    const init = {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${auth.user.token}`
      }
    };

    fetch(`http://localhost:8080/api/agent/${id}`, init)
      .then((response) => {
        if (response.status === 204) {
          return response.json;
        } else if (response.status === 404) {
          Promise.reject(`Agent ID ${id} not found`);
        } else {
          Promise.reject("Something unexpected went wrong");
        }
      })
      .catch((error) => console.log(error));
    setDeleteMsg(`${id} has been deleted!`);
    setDefaultBtn("", "");
  };

  return (
    <div>
      <div className="grid-container">
        <header>
          <div className="item1">
            <Header />
            <h1>Delete Agent {id}</h1>
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
                    <Link to="/agents" className="deleteBtn">
                      {defaultBtn.cancelBtn}
                    </Link>
                    <label className="exit" htmlFor="3">
                      Exit
                    </label>
                  </div>
                </div>
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

export default DeleteAgent;
