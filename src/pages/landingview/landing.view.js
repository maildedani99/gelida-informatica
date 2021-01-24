import React from "react";
import Card from "../../components/card/card";
import "./landing.css";
import styles from "./landing.module.css";
import { useHistory } from "react-router-dom";
import { CONTACT, WEB, VENTA, HOME, SERVICIO } from "../../routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Web from "../webview/webview";
import Venta from "../ventaview/ventaview";
import Contact from "../contact.view/contact";
import Home from "../homeview/homview";
import Servicio from "../servicioview/servicioview";
import CardsGroup from "../../components/cardsroup/cardsgroup";
import ContactButton from "../../components/contact.button/contactButton";

const Landing = () => {
  const history = useHistory();

  const goToContact = () => {
    history.push(CONTACT);
  };

  return (
    <div className="mt10">
      <div className={styles.__container}>
        <div className={styles.__main}>
          <CardsGroup />
          <div className={styles.__paragraf_div}>
            <div className={styles.__paragraf}>
             
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path={HOME}>
                    <Home />
                  </Route>
                  <Route exact path={WEB}>
                    <Web />
                  </Route>
                  <Route exact path={VENTA}>
                    <Venta />
                  </Route>
                  <Route exact path={SERVICIO}>
                    <Servicio />
                  </Route>
                  <Route exact path={CONTACT}>
                    <Contact />
                  </Route>
            </div>
          </div>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default Landing;
