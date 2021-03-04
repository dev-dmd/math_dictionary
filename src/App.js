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
import Home from './dictionary/page/main_page';
import Category from './dictionary/page/category_page';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
    <Header />
      <h1>Accounts</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
      </Switch>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">Category Page</Link>
        </li>
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
