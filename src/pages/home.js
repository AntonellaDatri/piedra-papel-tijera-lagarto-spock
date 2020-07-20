import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Instrucciones from '../components/instrucciones';

//

function Home() {

  return (
      <div className="background-container">
        <div className="container ">
          <h1>Piedra Papel Tijera Lagarto Spock</h1>
          <Link  to ="/play"> 
            <button type="button" className="btn btn-outline-success">Jugar</button>
          </Link>
          <Link  to ="/instrucciones"> 
            <button type="button" className="btn btn-outline-primary">Como jugar</button>
          </Link>
        </div>
      </div>
  );
}

export default Home;