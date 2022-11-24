/***************************************************************
 ****              Page "À propos"             ****
 **************************************************************/

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
//import Meta from '../../components/Meta/Meta';
//const metaTitle= "Kasa- À Propos";
//const metaDescription= "Découvrez les valeurs de Kasa, leader dans le marché de la location immobilière !"
//<Meta title={metaTitle} description={metaDescription} />

export default function About(){
    return(
        <main className='about'>
            <Banner />
            <section>
                <div className='about__container'>
                    <Collapse className='about__item' label='Fiabilité' content={`Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`} />
                    <Collapse className='about__item' label='Respect' content={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`} />
                    <Collapse className='about__item' label='Service' content={`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`} />
                    <Collapse className='about__item' label='Sécurité' content={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`} />
                </div>
            </section>
        </main>
    );
}
