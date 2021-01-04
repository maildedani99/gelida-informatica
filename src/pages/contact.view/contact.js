import React from 'react';
import './contact.css';
import { useHistory } from 'react-router-dom';
import { LANDING } from '../../routes.js';

const Contact = () => {

    const history = useHistory();

    const goToLanding = () => {
        history.push(LANDING);
    }

    return (
      <div className="container">
    <div className="w-50 mx-auto h5  margin10">
      <div className="form-group form-dangerous mt-5">
        <label htmlFor="mane">Nombre</label>
        <input type="text" className="form-control" id="usr" /> 
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="password" className="form-control" id="pwd" />
      </div>
      <div className="form-group">
        <label htmlFor="text">Escribenos</label>
        <textarea className="form-control" name="text" id="" cols="30" rows="10" />
          </div>
          <div className="form-group justify-button">
                    <button className="  btn btn-xm btn-primary w-25 mx-auto mt-3" >Enviar</button>
              <button className="  btn btn-xm btn-danger w-25 mx-auto mt-3" onClick={goToLanding} >Cancelar</button>
                    
          </div>
    </div>
    </div>
  );
};
export default Contact;
