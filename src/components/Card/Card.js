import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Ads from '../../datas/ads.json';

export default function Card (){
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