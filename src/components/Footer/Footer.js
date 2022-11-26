/***************************************************************
 ****       Composant "Footer" pour toutes les pages        ****
 **************************************************************/

import React from 'react'; //importation de react
import Logo from '../../assets/logo-footer.png'; //importation du logo footer

export default function Footer(){ //fonction principale pour l'affichage du footer
    return(
        <footer>
            <div className='footer__logo'>
                <img src={Logo} alt="Kasa Logo footer"></img>
            </div>
            <p className='footer__text'>© 2022 Kasa. All rights reserved</p>
        </footer>
    );
}