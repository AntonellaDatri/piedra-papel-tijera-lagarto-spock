import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Instrucciones from '../components/instrucciones';


function Home() {
  return (
    <>
        <h1>Piedra Papel Tijera Lagarto Spock</h1>
        <Link  to ="/play"> 
            <button type="button" className="btn btn-outline-success">Jugar</button>
        </Link>
        <Link  to ="/Instrucciones"> 
            <button type="button" className="btn btn-outline-primary">Como jugar</button>
        </Link>
    </>
  );
}

export default Home;