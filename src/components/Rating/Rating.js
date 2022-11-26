/***************************************************************
 ****       Composant "Rating" pour la page RentalAds       ****
 **************************************************************/

import React from 'react'; //importation de react
import fullStar from '../../assets/star-full.png'; //importation de l'étoile pleine
import emptyStar from '../../assets/star-empty.png'; //importation de l'étoile vide

export default function Rating(rate){ //fonction principale pour l'affichage du rating
    const range= [1, 2, 3, 4, 5];
    return range.map((rangeElem, key) =>
        rangeElem <= rate.rate ? (
            <img className='fullStar' src={fullStar} alt='étoilé' key={key}/>
        ) : (
            <img className='emptyStar' src={emptyStar} alt='pas étoilé' key={key}/>
        )
    );
}