import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const RedirectionQuizz = () => {
  const handleButtonClick = (linkto) => {
    window.location.href = linkto;
  };
    return (
        <div className="transition-page">
          <h2>LA CREATION VA POUVOIR DEBUTER</h2>
          <br/>
          <p>
            Place au moment le plus attrayant d'un projet, la création ! Chez DEVIOUS DEV,
            nous aimons créer, encore plus si les demandes sont précises.<br/>
            Pour cela nous allons vous proposer de passer un formulaire pour nous puissons déterminer <br/>
            l'exactitude de votre demande. Ne vous en faites ceci n'est pas un test, et les informations<br/>
            récoltées ne seront utilisées que pour traîter nos services selon votre demande.<br/>
          Vous pourrez trouver <a>les conditions d'utilisations et la gestion des données pour chaque utilisateur </a><br/>
          Pour ce qui est de l'abonnement vous l'avez offert selon le pack que vous prenez. Aucun engagement si vous <br/> 
          voulez bénéfissier des mois offert avec nos formules <strong>PACK WEB STARTER</strong> et <strong>LA COMPLETE</strong>.<br/>
          Au moment de la création de votre compte juste avant paiement vous vous aurez la possibilité de vous engager le mois suivant la fin de votre offre <br/>
          En espérant avoir été clair pour que vous puissiez commencer à créer ! 
          </p>
          <br/><br/>
          <div className="service-options">
            
            <Button onClick={() => handleButtonClick("/quizz-pack-identite-visuelle")} variant="outlined" color="primary" size='large' sx={{ display: 'block', margin: '0 auto', '&:hover': { variant: "contained" }, borderRadius: '0 0 8px 8px' }}>
             PACK Identité Visuelle
                  </Button>
           <br/>
           <Button onClick={() => handleButtonClick("/quizz-pack-web-starter")} variant="outlined" color="primary" size='large' sx={{ display: 'block', margin: '0 auto', '&:hover': { variant: "contained" }, borderRadius: '0 0 8px 8px' }}>
             PACK Web Starter
                  </Button>
           <br/>
           <Button onClick={() => handleButtonClick("/quizz-la-complete")} variant="outlined" color="primary" size='large' sx={{ display: 'block', margin: '0 auto', '&:hover': { variant: "contained" }, borderRadius: '0 0 8px 8px' }}>
             La Complète
                  </Button>
           <br/>
            
      
          </div>
        </div>
      );
};

export default RedirectionQuizz;