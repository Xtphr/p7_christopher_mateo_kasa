/***************************************************************
 ****            Header           ****
 **************************************************************/

 import React from "react";
 import Logo from "../../assets/logo-header.png";
 import {Link} from "react-router-dom";

 export default function Header(){
    return(
        <div className="header">
            <nav>
                <img className="header__logo" src={Logo} alt="Kasa Logo header"></img>
                <ul>
                    <li>
                        <Link to="/" className="items">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="items">
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
 }