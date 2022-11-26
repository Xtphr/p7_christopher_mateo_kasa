/***************************************************************
 ****              Fonction page "Rental Ads"               ****
 **************************************************************/

import React from 'react'; //importation de react
import {useParams} from 'react-router-dom'; //importation de useParams
import Ads from '../../datas/ads.json'; //importation des datas
import Collapse from '../../components/Collapse/Collapse'; //importation du composant collapse (dropdown)
import Slideshow from '../../components/Slideshow/Slideshow'; //importation du composant slideshow (carrousel)
import Rating from '../../components/Rating/Rating'; //importation du composant rating
import Error from '../../pages/Error/Error'; //importation de la page erreur 404


export default function RentalAds(){ //fonction principale pour l'affichage de Rental Ads
    const {id} = useParams();
    const adContent = Ads.find((ad) => ad.id === id);
    const {title, location, tags, host, rating, description, equipments} = adContent || {}; //sinon erreur undefined

    return ( adContent ? 
        <main>
            <Slideshow />
            <div className='ads-header'>
                <div className='ads-header__rental'>
                    <h1 className='rental__title'>{title}</h1>
                    <h2 className='rental__location'>{location}</h2>
                    <div className='rental__tags'>
                        {tags.map((tag) =>{
                            return(
                                <p key={`${tag}`} className='tag'>
                                    {tag}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className='ads-header__host'>
                    <div className='host__profile'>
                        <p className='host__name'>{host.name}</p>
                        <img className='host__pic' src={host.picture} alt='hébergeur {host.name}'/>
                    </div>
                    
                    <div className='host__rating'>
                        <Rating rate={rating} />
                    </div>
                </div>
            </div>
            <div className='ads-body'>
                <Collapse className='ads-body__item' label='Description'content={<span className='ads-body__item-details'>{`${description}`}</span>}/>
                <Collapse className='ads-body__item' label='Équipements'content={
                    <ul className='ads-body__item-details'>
                        {equipments.map((equipment) =>{
                            return <li key={`${equipment}`}>{equipment}</li>
                        })}
                    </ul>
                }/>
            </div>
        </main> : <Error />
    );
}