/***************************************************************
 ****                  Logique de Routing                   ****
 **************************************************************/

import React from 'react'; //importation de react
import {Routes, Route} from 'react-router-dom'; //importation du routeur react
import Home from './pages/Home/Home'; //importation de la page d'accueil
import About from './pages/About/About'; //importation de la page à propos
import RentalAds from './pages/RentalAds/RentalAds'; //importation de la page annonce
import Error from './pages/Error/Error'; //importation de la page 404
import Header from './components/Header/Header'; //importation du composant header
import Footer from './components/Footer/Footer'; //importation du composant footer

// Fonction du React Routing
function Routing(){
    return(
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/RentalAds/:id' element={<RentalAds />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Routing; //exportation de la logique de routing