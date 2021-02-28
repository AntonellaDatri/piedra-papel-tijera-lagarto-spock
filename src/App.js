import React from 'react';
import {BrowserRouter,Switch,Route, HashRouter} from 'react-router-dom'
import Home from './pages/home.js';
import Play from './pages/play.js';
import Instrucciones from'./components/instrucciones'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL+"/"}>
        <Route exact path="/play" component={Play} />
        <Route exact path="/instrucciones" component={Instrucciones} />
        <Route exact path="/" component={Home} />
      </HashRouter>
    </div>
    
  );
}

export default App;
