import React from 'react';
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
import Dashboard from './components/dashboard';
import VideoModal from './components/video_modal';

function App() {
  // Video Modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Header handleOpen={handleOpen} />
          <Pages />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/login">
          <LogInPage />
        </Route>
      </Switch>
      <VideoModal onClose={handleClose} open={open} />
    </Router>
  )
}

export default App;
