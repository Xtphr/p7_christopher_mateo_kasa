/***************************************************************
 ****                Fonction page d'Accueil                ****
 **************************************************************/

import React from 'react'; //importation de react
import Banner from '../../components/Banner/Banner'; //importation du composant banner
import Card from '../../components/Card/Card'; //importation du composant card

export default function Home(){ //fonction principale pour l'affichage de la Home page
    return(
        <main>
            <Banner origin="home-page"/>
            <Card />
        </main>
    );
}