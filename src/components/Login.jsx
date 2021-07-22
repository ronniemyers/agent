import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Error from "./Error";
import { LogoSvg } from "./svg/LogoSvg";
import NavBar from "./NavBar";

const DEFAULT_FORM_AGENT = {
  agentId: 0,
  username: "",
  password: "",
};

function Login() {
  // const history = useHistory();
  const [formAgent, setFormAgent] = useState(DEFAULT_FORM_AGENT);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const formInputOnChangeHandler = (event) => {
    const nextAgent = { ...formAgent };
    nextAgent[event.target.name] = event.target.value;
    setFormAgent(nextAgent);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //   history.push("/");
  };

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
            <h1>Login</h1>
          </div>
        </header>
        <div>
          <main>
            <div className="flex-container">
              <form onSubmit={formSubmitHandler}>
                <div className="form-agent">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    name="username"
                    value={formAgent.username}
                    onChange={formInputOnChangeHandler}
                  />
                </div>
                <div className="form-agent">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    value={formAgent.password}
                    onChange={formInputOnChangeHandler}
                  />
                </div>
                <div className="form-agent flex-container">
                  <input type="submit" value="Login"></input>
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

export default Login;
