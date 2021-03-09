import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignInPage from './components/auth/SignInPage';
import LogInPage from './components/auth/LogInPage';
import Pages from './pages';
import Header from './components/header';



function App() {
  const [showLog, setShowLog] = useState(false); 

  const handleLoginClick = ()=> {
    const showsLoginPage = window.location.href !== 'http://localhost:3000/math_dictionary/login' ||  window.location.href !== 'http://localhost:3000/math_dictionary/signin'
    setShowLog(showsLoginPage);
  };

  const handleHomeClick = ()=> {
    const showsHomePage = window.location.href === "http://localhost:3000/math_dictionary/";
    setShowLog(showsHomePage);
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
    { 
      showLog ? null : <Header handleLoginClick={handleLoginClick} />
    } 
      <Switch>
        <Route exact path="/">
          <Pages />
        </Route>
        <Route path="/signin">
          <SignInPage handleHomeClick={handleHomeClick} />
        </Route>
        <Route path="/login">
          <LogInPage handleHomeClick={handleHomeClick} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
