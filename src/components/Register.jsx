import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../AuthContext";
import NavBar from "./NavBar";
import Error from "./Error";
import Header from "./Header";

function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  let isSuccess = false;

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

    fetch("http://localhost:5000/create_account", init)
      .then((response) => {
        if (response.status === 201) {
          isSuccess = true;
          return response.json();
        } else if (response.status === 400) {
          return response.json();
        }
        return Promise.reject("Something unexpected went wrong");
      })
      .then((data) => {
        if (isSuccess) {
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
                history.push("/");
              } else {
                history.push("/login");
              }
            })
            .catch((error) => console.log(error));
        } else {
          setErrors("Error: " + data.messages + " ");
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
            <h1>Register</h1>
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
                  <input type="submit" value="Register"></input>
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

export default Register;
