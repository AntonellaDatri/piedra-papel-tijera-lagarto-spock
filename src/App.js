import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/home.js';
import Play from './pages/play.js';
import Instrucciones from'./components/instrucciones'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/play" component={Play} />
        <Route path="/instrucciones" component={Instrucciones} />
        <Route  path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
