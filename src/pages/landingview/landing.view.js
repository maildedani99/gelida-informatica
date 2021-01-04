import React from 'react';
import Card from '../../components/card/card';
import './landing.css';
import styles from './landing.module.css';
import star from '../../assets/star.png';
import chat from '../../assets/chat.png';
import settings from '../../assets/settings.png';
import big2 from '../../assets/big2.png';
import { useHistory } from 'react-router-dom';
import { CONTACT } from '../../routes';


const Landing = () => {

    const history = useHistory();

    const goToContact = () => {
        history.push(CONTACT);
    }

    return (
    <div className="mt10">
            <div className={styles.__container}>
                <div className={styles.__main}>
                <div className={styles.__paragraf_div}>
                    <p className={styles.__paragraf}>Gelida Informatica es un servicio tecnologico integral que tiene como objetivo ayudar, escuchar y solventar los problemas cotidianos relacionados con la informatica, electronica y telecomunicaciones.</p>
                        <p className={styles.__paragraf} > Asesoramos, diseñamos, reparamos... nos gusta nuestro trabajo y por eso estamos aqui! acercate, estaremos encantados de ayudarte.</p>
                        {/* <Link to="/contact"> */}
                        <button className="btn dispay-3 btn-danger btn-lg font2rem w-25  mt-5" onClick={goToContact}>CONTACTO</button>
                        {/* </Link> */} 
                    </div>
                 <div className={styles.__info_div}>
                        <div className={styles.__icons_row}>
                            <Card img={chat} title="Asesoría Informatica" content="Necesitas un ordenador y no sabes que elegir, no te preocupes, hemos llegado para ayudarte, te informamos de los mas apropiado para ti y tu bolsillo." />
                            <Card img={star} title="Diseño, Multimedia Imagen y Sonido" content="Hacemos paginas web, entornos videomapping, digitalsignage... todo lo que se te pueda ocurrir, nosotros le damos vida."/>
                            <Card img={big2} title="Servicio Tecnico" content="Reparamos ordenadores, servidores, notebooks, analizamos y repasamos tu equipo para dejartelo al 100%" />
                            <Card img={settings} title="Nuevas Tecnologias" content="Instalamos y mantenemos redes, servidores, redes wifi, sistemas de satelite y hasta TDT!"/>
                        </div>
                        
            </div>
            </div>
                </div>
                </div>
    )
}

export default Landing;