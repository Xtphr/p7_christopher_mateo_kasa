/***************************************************************
 ****       Composant "Header" pour toutes les pages        ****
 **************************************************************/

import React from "react"; //importation de react
import Logo from "../../assets/logo-header.png"; //importation du logo header
import {Link} from "react-router-dom"; //importation du link pour ahref

export default function Header(){ //fonction principale pour l'affichage du header
    return(
        <header>
            <nav>
                <img className="header__logo" src={Logo} alt="Kasa Logo header"></img>
                <ul>
                    <li>
                        <Link to="/" className="header__menu">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="header__menu">
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}