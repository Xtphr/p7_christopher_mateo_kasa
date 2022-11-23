/***************************************************************
 ****              Page "À propos"             ****
 **************************************************************/

import React from 'react';
import Meta from '../../components/Meta/Meta';

export default function About(){
    const metaTitle= "Kasa- À Propos";
    const metaDescription= "Découvrez les valeurs de Kasa, leader dans le marché de la location immobilière !"
    return(
        <div className='about'>
            <Meta title={metaTitle} description={metaDescription} />
        </div>
    )
}
