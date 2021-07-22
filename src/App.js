import React from 'react';
import Agent from './components/AllAgents';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import DeleteAgent from './components/DeleteAgent';
import FormAgent from './components/FormAgent'; //temp
import Error from './components/Error';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import AllAgents from './components/AllAgents';
// import AddAgent from './components/AddAgent';
// import EditAgent from './components/EditAgent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/register">
          <Register/>
          </Route>
          <Route exact path="/login">
          <Login/>
          </Route>
          <Route exact path="/agents">
          <AllAgents/>
          </Route>
          <Route exact path="/add">
          <FormAgent/>
          </Route>
          <Route exact path="/edit/:id">
          <FormAgent/>
          </Route>
          {/* <Route exact path="/delete/:id">
          <DeleteAgent/>
          </Route> */}
          <Route path="*">
          <NotFound/>
          </Route>
      </Switch>
    </Router>
    
  );
}

export default App;