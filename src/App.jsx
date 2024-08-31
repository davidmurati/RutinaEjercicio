import { useState, useEffect  } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Ejercicio2 from "./component/Ejercicio2/Ejercicio2";
import Inicio from "./component/Inicio/Inicio";
import Contacto from "./component/Contacto/Contacto";


function App() {
  
  return (
    <div className="container">
    <Router>
     <Switch>
        <Route exact path="/">
          <Ejercicio2 />
        </Route>
        <Route exact path="/Ejercicio2">
          <Ejercicio2 />
        </Route>
        <Route exact path="/Contacto">
          <Contacto />
        </Route>
     </Switch>
     </Router>
    </div>
  )
}

export default App