import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Dashboard from './components/dashboard';
import SignInPage from './components/auth/SignInPage';
import LogInPage from './components/auth/LogInPage';
import Digit from './components/category_pages/Digit';
import Greek from './components/category_pages/Greek';



const MathDictionary = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={App} />
        <Route path="/digit" component={Digit} />
        <Route path="/greek" component={Greek} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/login" component={LogInPage} />
    </Router>
);

render(<MathDictionary />, document.getElementById('root'));
