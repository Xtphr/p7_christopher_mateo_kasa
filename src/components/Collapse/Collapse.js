/***************************************************************
 ****     Composant "Collapse" pour RentalAds + About       ****
 **************************************************************/

import React, {useState} from 'react'; //importation de react et du hook useState
import arrowTop from '../../assets/arrow-top.png'; //importation flèche haut
import arrowBottom from '../../assets/arrow-bottom.png'; //importation flèche bas

export default function Collapse (props){ //fonction principale pour l'affichage du collapse
    const [open, setOpen] = useState(false);
    const toggle =() =>{
        setOpen(!open);
    };
    return(
        <div className='dropdown'>
            <div className='dropdown__btn' onClick={toggle}>
                <div>
                    <p>{props.label}</p>
                </div>
                {open ? (
                    <img className='dropdown__arrow' src={arrowTop} alt='fleche haut'/>
                ) : (
                    <img className='dropdown__arrow' src={arrowBottom} alt='fleche bas'/>
                )}
            </div>
            {open && 
            <div className='dropdown__txt'>
                <div>{props.content}</div>
            </div>}
        </div>
    );
}