import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Error from "./Error";
import Header from "./Header";
import NavBar from "./NavBar";
import AuthContext from "../AuthContext";

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

function AddAgent() {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const formInputOnChangeHandler = (event) => {
    const nextAgent = { ...formAgent };
    nextAgent[event.target.name] = event.target.value;
    setFormAgent(nextAgent);
  };

  const [formAgent, setFormAgent] = useState(DEFAULT_FORM_AGENT);
  const addFormSubmitHandler = (event) => {
    event.preventDefault();

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.user.token}`,
      },
      body: JSON.stringify(formAgent),
    };

    fetch("http://localhost:8080/api/agent", init)
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else if (response.status === 400) {
          return response.json();
        }
        return Promise.reject("Something unexpected went wrong");
      })
      .then((data) => {
        if (data.agentId) {
          history.push("/agents");
        } else {
          setErrors("Error: " + data + " ");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="grid-container">
        <header>
          <div className="item1">
            <Header />
            <h1>Add Agent</h1>
          </div>
        </header>
        <div>
          <main>
            <div className="flex-container">
              <form onSubmit={addFormSubmitHandler}>
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

export default AddAgent;
