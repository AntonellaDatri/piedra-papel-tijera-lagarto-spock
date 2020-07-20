import React from 'react';
function Home(props) {
    const {ganador,eleccionJ1,eleccionJ2,onClick} = props
    return (
        <div className="background">
            <div>
                <div>
                    <h4 className="ganador">{ganador}</h4>
                </div>
                <div className="elecciones">
                    <h4>{eleccionJ1}</h4>
                    <h4>{eleccionJ2}</h4>
                </div>
                <div className="btn-position">
                    <button type="button" className="btn btn-outline-light btn-position" onClick={onClick}>Jugar otra vez</button>
                </div> 
            </div>
        </div>
    );
  }
  
  export default Home;

