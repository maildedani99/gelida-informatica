import React from 'react';
import { useHistory } from "react-router-dom";
import { CONTACT } from '../../routes';
import  './contact.css';


const ContactButton = () => {
    const history = useHistory();
    const goToContact = () => {
        history.push(CONTACT);
      };

    return(
        <button className="btn dispay-3 btn-danger btn-lg font2rem w-25  mt-auto fixed-bottom mx-auto mb-5"
        onClick={goToContact}
      >
        CONTACTO
      </button>
    )
}
export default ContactButton;