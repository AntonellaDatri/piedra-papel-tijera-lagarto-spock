import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ArrowLeftShort from '../images/Arrow-left-short.svg'

function Navbar(props) {
    const {puntosJ1,puntosJ2} = props
  return (
    <>
        <nav class="navbar navbar-light bg-light">
            <div>
                <Link class="navbar-brand" to="/">
                    <img src={ArrowLeftShort} width="40" alt="cerrar"></img> 
                </Link>
            </div>
            <div>
                <h4>{puntosJ1}-{puntosJ2}</h4>
            </div>
        </nav>
    </>
  );
}

export default Navbar;