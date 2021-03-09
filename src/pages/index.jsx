import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Digit from '../components/category_pages/Digit';
import Greek from '../components/category_pages/Greek';
import DictionaryPage from '../components/dictionary_page';

function Pages() {
  return (
    <Router> 
      <Switch>
        <Route exact path="/math_dictionary">
          <DictionaryPage />
        </Route>
        <Route path="/math_dictionary/digit">
          <Digit />
        </Route>
        <Route path="/math_dictionary/greek">
          <Greek />
        </Route>
      </Switch>
    </Router>
  )
}

export default Pages;
