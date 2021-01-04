import React from 'react';
import {FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import logo from '../../assets/logoblanco.png';
import {Link} from 'react-router-dom';
import {LANDING} from '../../routes';
import './navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-primary justify-content-center fixed-top  navbar-dark">
      <Link to={LANDING}>
        <a class="navbar-brand"><img src={logo} alt="logo" width="500" /></a>
      </Link>
      <ul class="navbar-nav navbar-right ">
        <div className=" div-link ">
          
        <li class="nav-item ">
          <a class="nav-link text-capitalize">
            <FaMapMarkerAlt className="icon" />
            del sol 3 08790 Gelida - Barcelona
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-capitalize">
            <FaPhone className="icon" />93 779 24 31
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-capitalize">
            <BsFillEnvelopeFill className="icon" />info@gelidainformatica.com
          </a>
        </li>
        </div>
        </ul>

    </nav>
  );
};
export default Navbar;
