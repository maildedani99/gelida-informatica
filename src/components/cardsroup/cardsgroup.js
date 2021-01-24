import React from 'react';
import './cardsgroup.css';
import { VENTA, SERVICIO, WEB} from '../../routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

const CardsGroup = () => {




    return (
        <div className="content_grid">
            <div className="grid">
              <Link to={VENTA}>
                <div className="card">
                  <h3>Venta y asesoría Informatica &rarr;</h3>
                  <p>
                    Necesitas un ordenador y no sabes que elegir, te ayudamos...
                  </p>
                </div>
              </Link>
              <Link to={SERVICIO}>
                <div className="card">
                  <h3>Servicio Tecnico General &rarr;</h3>
                  <p>
                    Solucion de averias, y si lo necesitas, nos desplazamos ...
                  </p>
                </div>
              </Link>
              <Link to={WEB}>
                <div className="card">
                  <h3>Creación páginas WEB &rarr;</h3>
                  <p>
                    Disponemos de un equipo de diseño y programación para lanzar
                    tu negocio...
                  </p>
                </div>
              </Link>
            </div>
          </div>
    )
}
export default CardsGroup;