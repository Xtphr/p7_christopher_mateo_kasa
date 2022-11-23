/***************************************************************
 ****                Fonction page d'Accueil                ****
 **************************************************************/


import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Ads from '../../datas/ads.json';
import Meta from '../../components/Meta/Meta';
import HomeBannerImg from '../../assets/home-banner.png';
import '../../styles/Home.css';
import '../../styles/Global.css'

export default function Home(){
    const [currImg] = useState(0);
    const metaTitle = "Kasa, plus de 500 annonces d'appartements en location !";
    const metaDescription = "Kasa est une plateforme web spécialisée dans la location d'appartements entre particuliers depuis près de 10 ans.";

    return(
        <div className='Home'>
            <Meta title={metaTitle} description={metaDescription} />
            <section className='home__banner'>
                <p>Chez vous, partout et ailleurs</p>
                <div className='home__cover'>
                    <img src={HomeBannerImg} alt='paysage mer et montagne'></img>
                </div>
            </section>
            <div className='cards'>
                {Ads.map((ad) => (
                    <Link to={`/RentalAds/${ad.id}`} className='ad__item' key={ad.id}>
                        <img src={ad.pictures[currImg]} alt='annonce de logement en location' className='ad__img'/>
                        <div className='ad__title'>
                            <h3>{ad.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}