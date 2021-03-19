import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './components/dashboard';
import SignInPage from './components/auth/SignInPage';
import LogInPage from './components/auth/LogInPage';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact strict path="/">
          <App />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact strict path="/signin">
          <SignInPage />
        </Route>
        <Route exact strict path="/login">
          <LogInPage />
        </Route>
      </Switch>
    </Router>,
  document.getElementById('root')
);
