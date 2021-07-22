import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import AuthContext from './AuthContext';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AddAgent from './components/AddAgent';
import AllAgents from './components/AllAgents';
import EditAgent from './components/EditAgent';
import DeleteAgent from './components/DeleteAgent';
import NotFound from './components/NotFound';

const TOKEN_KEY = 'user-api-token';

function App() {
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) {
      login(token);
    }

    setInitialized(true);
  }, []);

  const login = (token) => {
    console.log(token);
    localStorage.setItem(TOKEN_KEY, token);

    // {
    //   "iss": "dev10-users-api",
    //   "sub": "john@smith.com",
    //   "id": "983f1224-af4f-11eb-8368-0242ac110002",
    //   "roles": "ADMIN",
    //   "exp": 1620495306
    // }

    const tokenObj = jwt_decode(token);
    console.log(tokenObj);
    const { id, sub: username, roles: rolesString } = jwt_decode(token);
    const roles = rolesString.split(',');

    const user = {
      id,
      username,
      roles,
      token,
      hasRole(role) {
        return this.roles.includes(role);
      }
    };

    console.log(user);
    setUser(user);
    return user;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  };

  const auth = {
    user: user ? { ...user } : "Sam",
    login,
    logout
  };

  if (!initialized) {
    return null;
  }

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/agents">
            <AllAgents />
          </Route>
          <Route exact path="/add">
            <AddAgent />
          </Route>
          <Route exact path="/edit/:id">
            <EditAgent />
          </Route>
          <Route exact path="/delete/:id">
            <DeleteAgent />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;