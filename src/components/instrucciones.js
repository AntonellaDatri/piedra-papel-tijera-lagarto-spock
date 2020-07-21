import React from 'react';
import Navbar from './navbar'
import { Link, useHistory } from 'react-router-dom';
import InstuccionImage from '../images/RPSLS.png'
import ArrowLeftShort from '../images/Arrow-left-short.svg'


function Instucciones(props) {
  const {onClick} = props
  const texto = ()=>{
    return(
      <h4>Instrucciones</h4>
  )
  }

  return (
    <div >
        <Navbar text={texto()}/>
      <div className="instruccion-content container">
        <p className="fuente-contenido"> El juego es una expansión del juego Piedra, Papel, Tijera. Cada jugador elige una variable y la revela al mismo tiempo. El ganador es el que derrota a los demás. En un empate, el proceso se repite hasta que se encuentra un ganador.</p>
        <div className="image-instruccion-position">
         <img className="image-instruccion" src={InstuccionImage} alt="Instruccionees del juego"></img>
        </div>
        <div className="reglas fuente-contenido">
          <ul>
              <li>Tijeras corta papel</li>
              <li>Cubiertas de papel Rock</li>
              <li>Roca aplasta a lagarto</li>
              <li>Roca aplasta a lagarto</li>
              <li>Veneno de lagarto Spock</li>
              <li>Spock rompe tijeras</li>
              <li>Tijeras decapitan lagarto</li>
              <li>Lagarto come papel</li>
              <li>El papel refuta a Spock</li>
              <li>Spock vaporiza roca</li>
              <li>(y como siempre lo ha hecho) Roca aplasta Tijeras</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Instucciones;