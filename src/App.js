import './App.css';
import Landing from './pages/landingview/landing.view';
import Contact from './pages/contact.view/contact';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LANDING, CONTACT } from './routes';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path={LANDING}>
          <Landing />
          </Route>
          <Route exact path={CONTACT}>
           <Contact />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
