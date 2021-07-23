import React from "react";
import { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Error from "./utils/Error";
import Header from "./utils/Header";
import AuthContext from "../AuthContext.js";
import NavBar from "./utils/NavBar";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const auth = useContext(AuthContext);
  const usernameOnChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordOnChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const authAttempt = {
      username,
      password,
    };

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authAttempt),
    };

    fetch("http://localhost:5000/authenticate", init)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          return null;
        }
        return Promise.reject("Something unexpected went wrong");
      })
      .then((data) => {
        if (data) {
          auth.login(data.jwt_token);
          auth.refresh();
          history.push("/");
        } else {
          setErrors(["Login failed, try again."]);
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
                    value={username}
                    onChange={usernameOnChangeHandler}
                  />
                </div>
                <div className="form-agent">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={passwordOnChangeHandler}
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
