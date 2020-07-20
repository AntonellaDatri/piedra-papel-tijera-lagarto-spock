import React from 'react';
import Navbar from './navbar'

function Instucciones() {
  return (
    <>
        <Navbar/>
        <div>
        <p> El juego es una expansión del juego Piedra, Papel, Tijera. Cada jugador elige una variable y la revela al mismo tiempo. El ganador es el que derrota a los demás. En un empate, el proceso se repite hasta que se encuentra un ganador.</p>
        <p> Casi siempre, todos los niños elegirán a Spock al mismo tiempo y lo atarán una y otra vez.</p>
        <p>Tijeras corta papel</p>
        <p>Cubiertas de papel Rock</p>
        <p>Roca aplasta a lagarto</p>
        <p>Roca aplasta a lagarto</p>
        <p>Veneno de lagarto Spock</p>
        <p>Spock rompe tijeras</p>
        <p>Tijeras decapitan lagarto</p>
        <p>Lagarto come papel</p>
        <p>El papel refuta a Spock</p>
        <p>Spock vaporiza roca</p>
        <p>(y como siempre lo ha hecho) Roca aplasta Tijeras</p>
        </div>
    </>
  );
}

export default Instucciones;