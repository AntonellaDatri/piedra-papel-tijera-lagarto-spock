import React,{useState} from 'react';
import Navbar from '../components/navbar'
import Resultados from '../components/resultados'
import Piedra from '../images/piedra.png'
import Papel from '../images/papel.png'
import Tijera from '../images/tijera.png'
import Lagarto from '../images/lagarto.png'
import Spock from '../images/spock.png'

function Play (props){
    const [puntosJugador1, setPuntosJugador1] = useState(0)
    const [puntosJugador2, setPuntosJugador2] = useState(0)
    const [eleccionJ1, setEleccionJ1] = useState(null)
    const [eleccionJ2, setEleccionJ2] = useState(null)
    const [ganador, setGanador] = useState("")
    const [showResultados, setShowResultados] = useState(false)
    const opciones = [  {tipo:"Piedra", image:Piedra},
                        {tipo:"Papel", image:Papel},
                        {tipo:"Tijeras", image:Tijera},
                        {tipo:"Lagarto", image:Lagarto},
                        {tipo:"Spock", image:Spock}]

    const verificarGanador = (seleccionP1) =>{
        let seleccionP2 = random_item(opciones)
        if (seleccionP2.tipo === seleccionP1.tipo){
            setGanador("EMPATE",seleccionP1)
        }else if (ganaJugador1(seleccionP1.tipo,seleccionP2.tipo)){
            setGanador("GANASTE!!")
            setPuntosJugador1(puntosJugador1+1)
        }else { setGanador("PERDISTE :c"); setPuntosJugador2(puntosJugador2+1)}
        setEleccionJ1(seleccionP1)
        setEleccionJ2(seleccionP2)
        setShowResultados(true)
    } 

    const ganaJugador1 = (seleccionP1,seleccionP2) => {
        return (
        (seleccionP1 === "Tijeras" && (seleccionP2==="Papel"   || seleccionP2==="Lagarto")) ||
        (seleccionP1 === "Papel"   && (seleccionP2==="Piedra"  || seleccionP2==="Spock"))   ||
        (seleccionP1 === "Piedra"  && (seleccionP2==="Lagarto" || seleccionP2==="Tijeras"))  ||
        (seleccionP1 === "Lagarto" && (seleccionP2==="Spock"   || seleccionP2==="Papel"))   ||
        (seleccionP1 === "Spock"   && (seleccionP2==="Tijeras" || seleccionP2==="Piedra")))
    }

    const resetear = () =>{
        setGanador("")
        setEleccionJ1("")
        setEleccionJ2("")
        setShowResultados(false)
        console.log(eleccionJ1 + " " + eleccionJ2 + " " + ganador + " " + showResultados)
    }

    const texto = () => {
        return(
            <h4>{puntosJugador1} - {puntosJugador2}</h4>
        )
    }

    return (
        <div className="background-container">
            <div>
                <Navbar text={texto()}/>
            </div>
            <div className="container">
                <div className="titulo" >
                    <p className="title-style" font-size="60px" >Piedra Papel Tijera Lagarto Spock</p>
                </div>
                <div>
                    <h2 className="fuente-contenido">Elige una opcion</h2>
                </div>
                <div className="row elecciones">
                    {opciones.map (content => (
                            <div key={content.tipo} className="eleccion">
                                <img src={content.image}  onClick={()=>verificarGanador(content)} width="100" alt={content.tipo}></img>
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