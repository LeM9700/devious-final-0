import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';
import '../sass/Prices.scss'
 // Assurez-vous d'ajuster le chemin du fichier de style

const Prices = () => {
  // Liste des formules tarifaires
  const tarifs = [
    {
      id: 0,
      titre: "Pack Identité Visuel",
      description: 'Le point de départ idéal pour créer une identité visuelle forte. Obtenez une charte graphique simplifiée et une stratégie marketing numérique, le tout à un prix accessible.',
      prix: '99.99€',
      
    },


    {
      id: 1,
      titre: "Pack Web Starter",
      description: 'Faites une première impression mémorable avec le Pack Impact Pro. Logo, carte de visite, flyer, et même 1 mois d\'abonnement inclus pour un impact maximal.',
      prix: '129.99€',
    },

    {
      id: 2,
      titre: "La Complète",
      description: 'Lancez-vous sur le web avec le Pack Web Starter. Une maquette de site web simple, accompagnée d\'1 mois d\'abonnement gratuit pour donner vie à votre présence en ligne',
      prix: '249.99€',
    },



     
    // ... Ajoutez les autres formules tarifaires ici
  ];


  const handleButtonClick = (linkto) => {
    window.location.href = linkto;
  };

  return (
    <div className="tarif-container">
      {tarifs.map((tarif) => (
        <Card key={tarif.id} className="tarif-card"  >
          <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
              {tarif.titre}
            </Typography>
            <br/> <br/> <br/> <br/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', flex: 1, width: '100%' }}>
            <Typography variant="h5" color="primary" gutterBottom style={{ textAlign: 'center' }}>
              {tarif.prix}
            </Typography>
            <div >
            <br/>
              <br/>   <br/> <br/>
             
                  <Button onClick={() => handleButtonClick(`/nos-produits#${tarif.id + 1}`)} variant="contained" color="primary" size='small' sx={{ display: 'block', margin: '15px auto', borderRadius: '0 0 8px 8px' , '&:hover': { variant: "outlined" }}}>
                    DITES M'EN PLUS !  
                  </Button>
        
                
                  <Button onClick={() => handleButtonClick("/transition-quizz")} variant="outlined" color="primary" size='large' sx={{ display: 'block', margin: '0 auto', '&:hover': { variant: "contained" }, borderRadius: '0 0 8px 8px' }}>
                    Commençons les choses sérieuses !
                  </Button>
                </div>
            </div>
            
           
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Prices;
