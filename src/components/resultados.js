import React from 'react';
function Home(props) {
    const {ganador,eleccionJ1,eleccionJ2,onClick} = props
    return (
        <div className="background">
            <div>
                <div>
                    <h4 className="ganador">{ganador}</h4>
                </div>
                <div className="elecciones-container">
                    <div>
                        <img src={eleccionJ1.image} width="100" alt={eleccionJ1.tipo}></img>
                    </div>
                    <div>                        
                        <img src={eleccionJ2.image} width="100" alt={eleccionJ2.tipo}></img>
                    </div>
                </div>
                <div className="btn-position">
                    <button type="button" className="btn btn-outline-light btn-position" onClick={onClick}>Jugar otra vez</button>
                </div> 
            </div>
        </div>
    );
  }
  
  export default Home;

