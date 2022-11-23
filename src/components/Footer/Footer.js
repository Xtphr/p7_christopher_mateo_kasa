/***************************************************************
 ****            Footer           ****
 **************************************************************/

import React from 'react';
import Logo from '../../assets/logo-footer.png';

export default function Footer(){
    return(
        <footer>
            <div className='footer__logo'>
                <img src={Logo} alt="Kasa Logo footer"></img>
            </div>
            <p className='footer__text'>© 2022 Kasa. All rights reserved</p>
        </footer>
    );
}