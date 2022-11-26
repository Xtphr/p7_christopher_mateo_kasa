/***************************************************************
 ****           Composant "Card" pour Home page             ****
 **************************************************************/

import React, {useState} from 'react'; //importation de react et du hook useState
import {Link} from 'react-router-dom'; //importation du link pour ahref
import Ads from '../../datas/ads.json'; //importation des datas

export default function Card (){ //fonction principale pour l'affichage des cards
    const [currImg] = useState(0);
    return(
        <section className='gallery'>
            {Ads.map((ad) => (
                <Link to={`/RentalAds/${ad.id}`} className='ad__item' key={ad.id}>
                    <img src={ad.pictures[currImg]} alt='annonce de logement en location' className='ad__img'/>
                    <h3 className='ad__title'>{ad.title}</h3>
                </Link>
            ))}
        </section>
    );
}