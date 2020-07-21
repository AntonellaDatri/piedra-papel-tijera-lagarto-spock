import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeftShort from '../images/Arrow-left-short.svg'

function Navbar(props) {
    const {text} = props
  return (
    <>
        <nav className="navbar-light bg-light navbar-position">
            <div>
                <Link className="navbar-brand" to="/">
                    <img src={ArrowLeftShort} width="40" alt="cerrar"></img> 
                </Link>
            </div>
            <div className="navar-title fuente-contenido">
                {text}
            </div>
        </nav>
    </>
  );
}

export default Navbar;