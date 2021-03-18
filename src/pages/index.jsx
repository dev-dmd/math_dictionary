import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Digit from '../components/category_pages/Digit';
import Greek from '../components/category_pages/Greek';
import Dictionary from '../components/dictionary_page/dictionary';
import Footer from '../components/footer';

function Pages() {
  return (
    <Router>
      <div component="main" className="page">
        <Switch>
          <Route exact path="/math_dictionary/">
            <Dictionary />
          </Route>
          <Route exact path="/math_dictionary/digit">
            <Digit />
          </Route>
          <Route exact path="/math_dictionary/greek">
            <Greek />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default Pages;
