import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../utils/Header";
import NavBar from "../utils/NavBar";
import AuthContext from "../../AuthContext.js";
import MapAgent from "../utils/MapAgent";

const DEFAULT_BUTTON = {
  deleteBtn: "Delete",
  cancelBtn: "Cancel",
};

function DeleteAgent() {
  const auth = useContext(AuthContext);
  const { id } = useParams();
  const [agents, setAgents] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState("Are you sure?");
  const [defaultBtn, setDefaultBtn] = useState(DEFAULT_BUTTON);
  const [errors] = useState([]);

  useEffect(() => {
    const init = {
      headers: {
        Authorization: `Bearer ${auth.user.token}`,
      },
    };

    fetch(`http://localhost:8080/api/agent/${id}`, init)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(`Received 400 Agent ID: ${id}`);
      })
      .then((data) => {
        setAgents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, auth.user.token]);

  const deleteAgentConfirmHandler = () => {
    const init = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth.user.token}`,
      },
    };

    fetch(`http://localhost:8080/api/agent/${id}`, init)
      .then((response) => {
        if (response.status === 204) {
          return response.json;
        } else if (response.status === 404) {
          Promise.reject(`Agent ID ${id} is not found`);
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
          <section>
            <MapAgent agents={agents} errors={errors} mapAll={null} />
          </section>
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
