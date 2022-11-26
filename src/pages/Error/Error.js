/***************************************************************
 ****             Fonction page d'Erreur (404)              ****
 **************************************************************/

import React from 'react'; //importation de react
import {Link} from 'react-router-dom'; //importation de link pour ahref
import ErrorImg from '../../assets/404.png'; //importation code 404

export default function Error(){ //fonction principale pour l'affichage de l'Error
    return(
        <main className='error'>
            <div>
                <img src={ErrorImg} alt='Erreur 404' className='error__img'/>
            </div>
            <p className='error__txt'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`} className="error__link">Retourner sur la page d'accueil</Link>
        </main>
    );
}