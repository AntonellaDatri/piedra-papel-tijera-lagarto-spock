import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ArrowLeftShort from '../images/Arrow-left-short.svg'

function Navbar(props) {
    const {text} = props
  return (
    <>
        <nav class="navbar-light bg-light navbar-position">
            <div>
                <Link class="navbar-brand" to="/">
                    <img src={ArrowLeftShort} width="40" alt="cerrar"></img> 
                </Link>
            </div>
            <div className="navar-title fuente-contenido">
                <h4>{text}</h4>
            </div>
        </nav>
    </>
  );
}

export default Navbar;