/***************************************************************
 ****            Fonction principale de l'app               ****
 **************************************************************/

import React from 'react'; //importation de react
import ReactDOM from 'react-dom/client'; //importation de react dom
import {BrowserRouter} from "react-router-dom"; //importation du routeur de react
import Routing from './components/Router/Router'; //importation de la logique de routing
import './styles/index.css' //importation de l'index css

const root = ReactDOM.createRoot(document.getElementById('root')); //création de la racine react

root.render( //méthode react du render à partir du noeud racine
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
