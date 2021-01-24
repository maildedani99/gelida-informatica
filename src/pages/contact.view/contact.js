import React from "react";
import styles from './contact.module.css';
import { useHistory } from "react-router-dom";
import { LANDING } from "../../routes.js";

const Contact = () => {
  const history = useHistory();

  const goToLanding = () => {
    history.push(LANDING);
  };

  return (
    <>
    <div class="form-group w-75 mx-auto">
      <input
        type="text"
        class="form-control mt-2"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Nombre"
      />
      <input
        type="email"
        class="form-control mt-2"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Email"
      />
      <input
        type="telf"
        class="form-control mt-2"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Telf"
      />
      <textarea class="form-control mt-2"  placeholder="Escribenos aqui..." id="exampleTextarea" rows="3"></textarea>
    </div>
    </>
  );
};
export default Contact;
