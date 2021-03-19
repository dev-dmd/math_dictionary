import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/footer';
import Dictionary from './components/dictionary_page/dictionary';
import Digit from './components/category_pages/Digit';
import Greek from './components/category_pages/Greek';
import Header from './components/header';

function App() {
  return (
    <>
      <div component="main" className="page">      
        <Header />
        <Router>
          <Switch>
            <Route exact path="/math_dictionary/">
              <Dictionary />
            </Route>
            <Route exact strict path="/math_dictionary/digit">
              <Digit />
            </Route>
            <Route exact strict path="/math_dictionary/greek">
              <Greek />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App;
