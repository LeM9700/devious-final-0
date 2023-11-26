import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '../sass/Products.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Products = () => {
  const offers = [
    {
      id: 0,
      titre: "Pack Identité Visuelle",
      description: "Notre Pack Identité Visuelle est conçu pour vous aider à construire une présence de marque mémorable. Avec un logo unique, une carte de visite professionnelle et un flyer accrocheurs, cette offre est le point de départ idéal pour créer une identité visuelle forte. Vous bénéficiez d'une charte graphique simplifiée pour maintenir une cohérence visuelle. Choisissez cette offre pour vous démarquer de la concurrence et renforcer votre image de marque.",
      avantages: ["Logo percutant pour une identification instantanée", "Carte de visite élégante pour des rencontres professionnelles impactantes", "Flyer créatif pour promouvoir vos produits ou service", "Votre charte graphique simplifié fait pour s'améliorer visuellement"],
      possibilites: ["Extension de votre identité visuelle grâce à la charte graphique, pour une image de marque complète", "Création de supports marketing supplémentaires", "Création de supports visuels supplémentaires", "Évolution vers des campagnes publicitaires percutantes"],
      prix: '99.99€',
      image : require('../img/HeaderTitle (2).png')
    },
    {
      id: 1,
      titre: "Pack Web Starter",
      description: "Le Pack Web Starter est bien plus qu'une simple maquette de site web. C'est une solution complète pour établir le lancement de votre présence en ligne. Cette offre comprend une maquette de site web simple mais efficace, une stratégie marketing numérique adaptée à votre projet, un mois d'abonnement gratuit à notre suivi particulier, et un logo offert. Idéal pour ceux qui veulent démarrer leur aventure en ligne avec succès.",
      avantages: ["Maquette de site web pour une première impression impactante", "Stratégie marketing numérique pour atteindre votre public cible", "Logo offert pour une identité visuelle cohérente", "Offrant une réduction de 10% sur notre offre La Complète"],
      possibilites: ["Développement du site web complet", "Intégration de fonctionnalités avancées", "Expansion de la stratégie marketing"],
      prix: '129.99€',
      image : require('../img/HeaderTitle (3).png')
    },
    {
      id: 2,
      titre: "La Complète",
      description: "La Complète est une solution optimisée pour ceux qui visent l'excellence en ligne. Obtenez un site web professionnel, une stratégie marketing avancée, deux mois d'abonnement offerts, votre identité visuelle et élevez votre présence en ligne à un niveau supérieur. Choisissez cette offre pour une approche complète de votre présence numérique.",
      avantages: ["Bénéfissiez de tout les avantages du pack identité visuelle", "Site web professionnel pour refléter la crédibilité de votre entreprise", "Stratégie marketing avancée pour maximiser la visibilité", "Deux mois d'abonnement offerts pour un lancement en douceur"],
      possibilites: ["Optimisation continue du site web", "Campagnes marketing ciblées", "Exploration de nouvelles opportunités en ligne"],
      prix: '249.99€',
      image : require('../img/HeaderTitle (4).png')
    },
    {
      id: 3,
      titre: "Exposition Premium",
      description: "Notre service Exposé Premium offre une visibilité exceptionnelle en ligne. Avec un abonnement mensuel, vous bénéficiez d'un support SEO dédié, de conseils en marketing personnalisés, et d'un tableau de bord pour suivre vos progrès. Les comptes-rendus réguliers vous fournissent des informations clés pour renforcer votre leadership et optimiser votre stratégie.",
      avantages: ["Support SEO dédié pour une meilleure visibilité dans les moteurs de recherche", "Méthode de compte-rendu personnalisé qui vous aidera à y voir plus clair !", "Conseils en marketing personnalisés pour des campagnes efficaces", "Tableau de bord pour surveiller les performances en temps réel"],
      possibilites: ["Élaboration de stratégies marketing avancées", "Gestion complète de la présence en ligne", "Rapports détaillés pour une prise de décision éclairée"],
      prix: '19.99€/mois',
      image : require('../img/HeaderTitle (5).png')
    },
  ];

    const handleButtonClick = () => {
        window.location.href = "/";
      };
      const handleButtonClick1 = () => {
        window.location.href = "/nos-tarifs";
      };
      const handleButtonClick2 = () => {
        window.location.href = "/transition-quizz";
      };
  return (
    <ReactFullpage
      licenseKey={'gplv3-license'}
      scrollingSpeed={1000}
      autoScrolling={true}
      navigation={true}
      responsiveSlides={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {offers.map((offer) => (
              <div key={offer.id} className="section">
                
                
                <div className="container">
                  <div className="content">
                    <div className="left">
                    <Button variant= "outlined"onClick={() => handleButtonClick()}>Retour à Accueil</Button>
                    <br/><br/>
                    <Button margin="normal" variant= "outlined"onClick={() => handleButtonClick1()}>Retour aux Tarifs </Button>
                    <br/><br/><br/>
                      {/* Ajoutez l'élément img ici avec le chemin approprié */}
                      <img src={offer.image} alt={offer.titre} className="rounded-image" />
                      
                    </div>
                    <div className="right">
                      <h2>{offer.titre}</h2>
                      <p>{offer.description}</p>
                      <div className="advantages">
                        <h3>Avantages :</h3>
                        <ul>
                          {offer.avantages.map((avantage, index) => (
                            <li key={index}>{avantage}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="possibilities">
                        <h3>Possibilités en suite :</h3>
                        <ul>
                          {offer.possibilites.map((possibilite, index) => (
                            <li key={index}>{possibilite}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="offer-price">{offer.prix}</p>
                      <Button variant= "outlined"onClick={() => handleButtonClick2()}>PASSONS AUX CHOSES SERIEUSE !</Button>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Products;
