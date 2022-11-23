/***************************************************************
 ****            Error            ****
 **************************************************************/

import React from 'react';
import {Link} from 'react-router-dom';
import Meta from '../../components/Meta/Meta';
import '../../styles/Global.css';

export default function Error(){
    const metaTitle= "Erreur 404";
    const metaDescription= "Cette page n'existe pas.";
    return(
        <div className='error'>
            <Meta title={metaTitle} description={metaDescription} />
            <div>
                <img src="../../assets/404.png" alt="erreur 404" />
            </div>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`} className="error__home">Retourner sur la page d'accueil</Link>
        </div>
    );
}