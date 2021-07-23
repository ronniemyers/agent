import { useState, useEffect, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Error from "./utils/Error";
import Header from "./utils/Header";
import NavBar from "./utils/NavBar";
import AuthContext from "../AuthContext.js";

const DEFAULT_FORM_AGENT = {
  agentId: 0,
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  heightInInches: 0,
  agencies: [],
  aliases: [],
};

function EditAgent() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { id } = useParams();
  const [errors, setErrors] = useState([]);
  const [formAgent, setFormAgent] = useState(DEFAULT_FORM_AGENT);

  useEffect(() => {
    const init = {
      headers: {
        Authorization: `Bearer ${auth.user.token}`,
      },
    };

    fetch(`http://localhost:8080/api/agent/${id}`, init)
      .then((response) => {
        if (response.status === 404) {
          return Promise.reject(`404 not found for agent ID: ${id}`);
        }
        return response.json();
      })
      .then((data) => {
        setFormAgent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, auth.user.token]);

  const editFormSubmitHandler = (event) => {
    event.preventDefault();
    const init = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.user.token}`,
      },
      body: JSON.stringify(formAgent),
    };

    fetch(`http://localhost:8080/api/agent/${id}`, init)
      .then((response) => {
        if (response.status === 204) {
          return null;
        } else if (response.status === 400) {
          return response.json();
        }
        return Promise.reject("Something unexpected went wrong");
      })
      .then((data) => {
        if (!data) {
          history.push("/agents");
        } else {
          setErrors(data);
        }
      })
      .catch((error) => console.log(error));
  };

  const formInputOnChangeHandler = (event) => {
    const nextAgent = { ...formAgent };
    nextAgent[event.target.name] = event.target.value;
    setFormAgent(nextAgent);
  };

  return (
    <div>
      <div className="grid-container">
        <header>
          <div className="item1">
            <Header />
            <h1>Edit Agent</h1>
          </div>
        </header>
        <div>
          <main>
            <div className="flex-container">
              <form onSubmit={editFormSubmitHandler}>
                <div className="form-agent">
                  <label htmlFor="firstName">First name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formAgent.firstName}
                    onChange={formInputOnChangeHandler}
                  />
                </div>
                <div className="form-agent">
                  <label htmlFor="middleName">Middle name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={formAgent.middleName}
                    onChange={formInputOnChangeHandler}
                  />
                </div>
                <div className="form-agent">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formAgent.lastName}
                    onChange={formInputOnChangeHandler}
                  />
                </div>
                <div className="form-agent">
                  <label htmlFor="dob">Date of birth</label>
                  <input
                    className="form-control"
                    type="date"
                    id="dob"
                    name="dob"
                    value={formAgent.dob}
                    onChange={formInputOnChangeHandler}
                  />
                </div>
                <div className="form-agent">
                  <label htmlFor="heightInInches">Height (inches)</label>
                  <input
                    className="form-control"
                    type="number"
                    id="heightInInches"
                    name="heightInInches"
                    value={formAgent.heightInInches}
                    onChange={formInputOnChangeHandler}
                    min="1"
                  />
                </div>
                <div className="form-agent flex-container">
                  <input type="submit" value="Submit"></input>
                  <Link to="/agents" className="cancel-btn">
                    <i>Cancel</i>
                  </Link>
                </div>
              </form>
            </div>
            <Error errors={errors} />
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

export default EditAgent;
