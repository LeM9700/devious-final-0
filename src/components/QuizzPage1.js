import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import QuizzIDV from '../elementsQuizz/QuizzIDV';
import QuizzLCVF from '../elementsQuizz/QuizzLCVF';
import QuizzWeb from '../elementsQuizz/QuizzWEB';
import QuizzSMN from '../elementsQuizz/QuizzSMN';
import '../sass/Quizz.scss'
import { Button } from '@mui/material';



const QuizzPage1 = () => {

    const handleButtonClick = () => {
        window.location.href = "/transition-quizz";
      };
    return (

      <div>
        <ReactFullpage
          licenseKey={'gplv3-license'} // Ajoutez votre clé de licence FullPage.js ici
          scrollingSpeed={1000} // Ajustez la vitesse de défilement selon vos préférences
          autoScrolling = {true}
          navigation = {true}
          responsiveSlides={true}
          
          responsiveWidth={700}
          
          render={({ state, fullpageApi }) => {
            return (
                <div id='fullpage'>
                  
                <div className='section'><Button variant= "outlined"onClick={() => handleButtonClick()}>Retour à Accueil</Button><QuizzWeb/></div>
                <div className='section'><Button variant= "outlined"onClick={() => handleButtonClick()}>Retour à Accueil</Button><QuizzSMN/></div>
               
                
                </div>
            );
          }}
        />
      </div>
        
      );
    };
    

export default QuizzPage1;

