/***************************************************************
 ****                Fonction page d'Accueil                ****
 **************************************************************/

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
//import Meta from '../../components/Meta/Meta';

export default function Home(){
    //const metaTitle = "Kasa, plus de 500 annonces d'appartements en location !";
    //const metaDescription = "Kasa est une plateforme web spécialisée dans la location d'appartements entre particuliers depuis près de 10 ans.";
    return(
        //<Meta title={metaTitle} description={metaDescription} />
        <main>
            <Banner />
            <Card />
        </main>
    );
}