import React from 'react';
import {useState, useEffect} from 'react';
import Navbar from '../components/navbar'
import Resultados from '../components/resultados'

function Play (props){
    const [puntosJugador1, setPuntosJugador1] = useState(0)
    const [puntosJugador2, setPuntosJugador2] = useState(0)
    const [eleccionJ1, setEleccionJ1] = useState("")
    const [eleccionJ2, setEleccionJ2] = useState("")
    const [ganador, setGanador] = useState("")
    const [showResultados, setShowResultados] = useState(false)
    const opciones = ["Piedra","Papel","Tijeras","Lagarto","Spock"]
    // useEffect(() => {    
    //     }, [])

    const verificarGanador = (seleccionP1) =>{
        let seleccionP2 = random_item(opciones)
        if (seleccionP2 === seleccionP1){
            setGanador("EMPATE",seleccionP1)
        }else if (ganaJugador1(seleccionP1,seleccionP2)){
            setGanador("GANO JUADOR 1")
            setPuntosJugador1(puntosJugador1+1)
        }else { setGanador("GANO JUADOR 2"); setPuntosJugador2(puntosJugador2+1)}
        setEleccionJ1(seleccionP1)
        setEleccionJ2(seleccionP2)
        setShowResultados(true)
    } 

    const ganaJugador1 = (seleccionP1,seleccionP2) => {
        return (
        (seleccionP1 === "Tijeras" && (seleccionP2==="Papel" || seleccionP2==="Lagarto")) ||
        (seleccionP1 === "Papel" && (seleccionP2==="Piedra" || seleccionP2==="Spock"))    ||
        (seleccionP1 === "Piedra" && (seleccionP2==="Lagarto" || seleccionP2==="tijera")) ||
        (seleccionP1 === "Lagarto" && (seleccionP2==="Spock" || seleccionP2==="Papel"))   ||
        (seleccionP1 === "Spock" && (seleccionP2==="Tijeras" || seleccionP2==="Piedra")))
    }

    const resetear = () =>{
        setGanador("")
        setEleccionJ1("")
        setEleccionJ2("")
        setShowResultados(false)
        console.log(eleccionJ1 + " " + eleccionJ2 + " " + ganador + " " + showResultados)
    }


    return (
        <div>
            <div>
                <Navbar puntosJ1={puntosJugador1} puntosJ2={puntosJugador2}/>
            </div>
            <div className="container">
                <div>
                    <h1>Elige una opcion</h1>
                </div>
                <div>
                    {opciones.map (content => (
                            <div>
                                <button type="button" className="btn btn-outline-success" onClick={()=>verificarGanador(content)}>{content}</button>
                            </div> 
                        ))}
                </div>
                <div>
                    {showResultados && <Resultados ganador={ganador} eleccionJ1={eleccionJ1} eleccionJ2={eleccionJ2} onClick={()=>resetear()}/>}
                </div>
            </div>
                
        </div>
    ); 
}

function random_item(items){
    return items[Math.floor(Math.random()*items.length)];   
}

export default Play;