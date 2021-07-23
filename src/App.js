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

const TOKEN_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZXYxMC11c2Vycy1hcGkiLCJzdWIiOiJqb2huQHNtaXRoLmNvbSIsImlkIjoiOTgzZjEyMjQtYWY0Zi0xMWViLTgzNjgtMDI0MmFjMTEwMDAyIiwicm9sZXMiOiJBRE1JTiIsImV4cCI6MTYyNjk5NDc3MH0.aJm49OiDVFOTXoQreU1vH4PIUyOfeSWCvGowr767CrY";


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
    user: user ? { ...user } : null,
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
            {user ? (
              <AllAgents />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/add">
            {user ? (
              <AddAgent />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/edit/:id">
            {user ? (
              <EditAgent />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/delete/:id">
            {user ? (
              <DeleteAgent />
            ) : (
              <Redirect to="/login" />
            )}
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