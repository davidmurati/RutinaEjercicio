import { useState, useEffect  } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Ejercicio1 from "./component/Ejercicio1/Ejercicio1";


function App() {
  
  return (
    <div className="container">
    <Router>
     <Switch>
        <Route exact path="/">
          <Ejercicio1 />
        </Route>
     </Switch>
     </Router>
    </div>
  )
}

export default App