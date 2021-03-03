import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Child from '../src/child/Child';
import Header from '../src/header';
import Footer from '../src/footer';

function App() {
  return (
    <Router>
    <div>
    <Header />
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/:id" children={<Child />} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
