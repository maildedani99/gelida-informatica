import React from "react";
import Card from "../../components/card/card";
import "./landing.css";
import styles from "./landing.module.css";
import star from "../../assets/star.png";
import chat from "../../assets/chat.png";
import settings from "../../assets/settings.png";
import big2 from "../../assets/big2.png";
import { useHistory } from "react-router-dom";
import { CONTACT } from "../../routes";

const Landing = () => {
  const history = useHistory();

  const goToContact = () => {
    history.push(CONTACT);
  };

  return (
    <div className="mt10">
      <div className={styles.__container}>
        <div className={styles.__main}>
          <div className={styles.__paragraf_div}>
            <p className={styles.__paragraf}>
              Gelida Informatica es un servicio tecnologico integral que tiene
              como objetivo ayudar, escuchar y solventar los problemas
              cotidianos relacionados con la informatica, electronica y
              telecomunicaciones.
            </p>
            <p className={styles.__paragraf}>
              {" "}
              Asesoramos, diseñamos, reparamos... nos gusta nuestro trabajo y
              por eso estamos aqui! acercate, estaremos encantados de ayudarte.
            </p>
          </div>
          <div className="grid">
            <div  className="card">
              <h3>Venta y asesoría Informatica &rarr;</h3>
              <p>Necesitas un ordenador y no sabes que elegir, te ayudamos...</p>
            </div>

            <a className="card">
              <h3>Servicio Tecnico General &rarr;</h3>
              <p>Solucion de averias, y si lo necesitas, nos desplazamos ...</p>
            </a>

            <a className="card">
              <h3>Creación páginas WEB &rarr;</h3>
              <p>Disponemos de un equipo de diseño y programación para lanzar tu negocio...</p>
            </a>

        
          </div>
          <button
            className="btn dispay-3 btn-danger btn-lg font2rem w-25 mx-auto  mt-5"
            onClick={goToContact}
          >
            CONTACTO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
