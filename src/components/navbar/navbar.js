import React from 'react';
import {FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import logo from '../../assets/logoblanco.png';
import {Link} from 'react-router-dom';
import {LANDING} from '../../routes';
import './navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar  bg-primary justify-content-center fixed-top  navbar-dark">
      <div className="container-navbar">
      <div className="row1 ">
      <Link className="mx-auto" to={LANDING}>
        <img src={logo} alt="logo" width="500" />
      </Link>
      </div>
      <div>

      <ul class="navbar-nav navbar-right ">
        <div className=" div-link ">
          
        <li class="nav-item ">
          <span class="nav-link text-capitalize">
            <FaMapMarkerAlt className="icon" />
            del sol 3 08790 Gelida - Barcelona
          </span>
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
      </div>
      </div>

    </nav>
  );
};
export default Navbar;
