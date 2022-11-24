/***************************************************************
 ****            Error            ****
 **************************************************************/

import React from 'react';
import {Link} from 'react-router-dom';
import ErrorImg from '../../assets/404.png';

//import Meta from '../../components/Meta/Meta';
//const metaTitle= "Erreur 404";
//const metaDescription= "Cette page n'existe pas.";
//<Meta title={metaTitle} description={metaDescription} />

export default function Error(){
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