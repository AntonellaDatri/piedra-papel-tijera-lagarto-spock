import React from 'react';
import Navbar from './navbar'
import { Link, useHistory } from 'react-router-dom';
import InstuccionImage from '../images/RPSLS.png'
import ArrowLeftShort from '../images/Arrow-left-short.svg'


function Instucciones() {
  const texto = ()=>{
    return(
      <h4>Instrucciones</h4>
  )
  }

  return (
    <div >
        <Navbar text={texto()}/>
      <div className="instruccion-content container">
        <p className="fuente-contenido"> El juego es una expansión del juego Piedra, Papel, Tijera. Cada jugador elige una variable y la revela al mismo tiempo. El ganador es el que derrota a su oponente. En un empate, el proceso se repite hasta que se encuentra el ganador.</p>
        <div className="image-instruccion-position">
         <img className="image-instruccion" src={InstuccionImage} alt="Instruccionees del juego"></img>
        </div>
        <div className="reglas fuente-contenido">
          <ul>
            <li>Tijera corta a Papel</li>
            <li>Papel tapa a Piedra</li>
            <li>Piedra aplasta a Lagarto</li>
            <li>Lagarto envenena a Spock</li>
            <li>Spock rompe a Tijera</li>
            <li>Tijera decapita a Lagarto</li>
            <li>Lagarto devora a Papel</li>
            <li>Papel desautoriza a Spock</li>
            <li>Spock vaporiza a Piedra</li>
            <li>y como siempre, Piedra aplasta a Tijera</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Instucciones;