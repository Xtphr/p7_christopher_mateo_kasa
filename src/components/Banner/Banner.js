/***************************************************************
 ****        Composant "Banner" pour Home + About           ****
 **************************************************************/

import React from 'react';
import HomeBanner from '../../assets/home-banner.png';
import AboutBanner from '../../assets/about-desk-banner.png';

export default function Banner(){ //Fonction pour afficher la banière en fonction de la page demandée
    const homeURL = document.location.pathname === '/';
    const bannerImg = homeURL ? HomeBanner : AboutBanner;
    const bannerImgAlt = homeURL ? "paysage de mer et falaises" : "paysage de lac et montagnes";
    return(
        <section className='banner'>
            <img className='banner__img' src={bannerImg} alt={bannerImgAlt} />
            {homeURL && <p className='banner__title'>Chez vous, partout et ailleurs</p>}
        </section>
    );
}