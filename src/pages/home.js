import React from 'react';
import { Link } from 'react-router-dom';

//

function Home() {

  return (
      <div className="background-container">
        <div className="container ">
          <div className="titulo" >
            <p className="title-style" font-size="60px" >Piedra Papel Tijera Lagarto Spock</p>
          </div>
          <div className="home-btn">
              <Link  to ="/play"> 
              <button type="button" className="btn btn-dark">Jugar</button>
            </Link>
            <Link  to ="/instrucciones"> 
              <button type="button" className="btn btn-outline-light">Como jugar</button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Home;