import "./App.css";
import Landing from "./pages/landingview/landing.view";
import Contact from "./pages/contact.view/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { LANDING, CONTACT, VENTA, SERVICIO, HOME, WEB } from "./routes";
import Venta from './pages/ventaview/ventaview';
import Servicio from './pages/servicioview/servicioview';
import Web from './pages/webview/webview';
import Home from './pages/homeview/homview';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Landing />
      </Router>
    </>
  );
}

export default App;
