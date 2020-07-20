import React from 'react';
import { Link, useHistory } from 'react-router-dom';


function Navbar(props) {
    const {puntosJ1,puntosJ2} =props
  return (
    <>
        <nav class="navbar navbar-light bg-light">
            <div>
                <Link class="navbar-brand" to="/">home</Link>
            </div>
            <div>
                <h4>{puntosJ1}-{puntosJ2}</h4>
            </div>
        </nav>
    </>
  );
}

export default Navbar;