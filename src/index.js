import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from './components/dashboard';
import SignInPage from './components/auth/SignInPage';
import LogInPage from './components/auth/LogInPage';
import Digit from './components/category_pages/Digit';
import Greek from './components/category_pages/Greek';
import Cardinals from './components/category_pages/Cardinals';

const MathDictionary = () => (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/digit" component={Digit} />
        <Route path="/greek" component={Greek} />
        <Route path="/cardinals" component={Cardinals} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/login" component={LogInPage} />
      </Switch>
    </Router>
);

render(<MathDictionary />, document.getElementById('root'));
