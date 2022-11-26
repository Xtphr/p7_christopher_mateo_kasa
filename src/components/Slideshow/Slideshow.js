/***************************************************************
 ****        Composant "Slideshow" pour RentalAds           ****
 **************************************************************/

import React, {useState} from 'react'; //importation de react et du hook useState
import {useParams} from 'react-router-dom'; //importation de useParams
import Ads from '../../datas/ads.json'; //importation des datas
import arrowLeft from '../../assets/arrow-left.png'; //importation flèche gauche
import arrowRight from '../../assets/arrow-right.png'; //importation flèche droite

export default function Slideshow(){ //fonction principale pour l'affichage du slideshow
    const {id} = useParams();
    const {pictures} = Ads.find((ad) => ad.id === id);
    const [current, setCurrent] = useState(0);
    const slideToRight = () =>{
        setCurrent(current === pictures.length -1 ? 0 : current +1);
    }
    const slideToLeft = () =>{
        setCurrent(current === 0 ? pictures.length -1 : current -1);
    }
    return(
        <section className='carrousel'>
            {pictures.length > 1 &&(
                <img className='arrowLeft' src={arrowLeft} alt='flèche gauche' onClick={slideToLeft}/>
            )}
            {pictures.length > 1 &&(
                <img className='arrowRight' src={arrowRight} alt='flèche droite' onClick={slideToRight}/>
            )}
            {pictures.map((picture, index) =>{
                return(
                    <div key={index}>
                        {index === current &&(
                            <img className='carrousel__img' src={picture} alt={pictures.description}/>
                        )}
                        {index === current &&(
                            <span className='carrousel__img-nbr'>
                                {current +1}/{pictures.length}
                            </span>
                        )}
                    </div>
                );
            })}
        </section>
    );
}