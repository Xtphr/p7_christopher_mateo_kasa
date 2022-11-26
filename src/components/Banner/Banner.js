/***************************************************************
 ****        Composant "Banner" pour Home + About           ****
 **************************************************************/

import React from 'react'; //importation de react
import HomeBanner from '../../assets/home-banner.png'; //importation image home
import AboutBanner from '../../assets/about-desk-banner.png'; //importation image about

export default function Banner({origin}){ //fonction principale pour l'affichage du banner
    const homeURL = document.location.pathname === '/';
    const bannerImg = homeURL ? HomeBanner : AboutBanner; //en fonction de la page demandée
    const bannerImgAlt = homeURL ? "paysage de mer et falaises" : "paysage de lac et montagnes";
    return(
        <section className={'banner '+origin}>
            <img className='banner__img' src={bannerImg} alt={bannerImgAlt} />
            {homeURL && <p className='banner__title'>Chez vous, partout et ailleurs</p>}
        </section>
    );
}