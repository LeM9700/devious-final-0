import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import "../sass/ColorPicker.scss"
import ColorPicker from '../inputs/ColorPicker';
import FileInput from '../inputs/FileInput';
import MultiSelector from '../inputs/MultiSelector';
import Selector from '../inputs/Selector';
import YesNoSelector from '../inputs/YesNoSelector';
import DateSelector from '../inputs/DateSelector';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MultiSelector1 from '../inputs/MultiSelector1';

const QuizzWeb = () => {

    const [answersWeb,setAnswersWeb] = useState({

        objectifSite:"",
        pageAInclure : [],
        descriptionPages :"",
        fonctionnaliteInclure : [],
        designPref : "",
        hasLogo : false,
        fileLogo : null,
        typePhoto : "",
        typePolice : "",
        hasSocialNetwork : false,
        socialNetwork : [{ nomReseau : '', lienIntegrer : "", nomUser :""}]
})


const updateAnswerWeb = (key, value) => {
    setAnswersWeb((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  const handleChange = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersWeb((prevAnswers) => ({ ...prevAnswers, hasLogo: value }));
    console.log(answersWeb.hasLogo)
  };

  const handleChange1 = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersWeb((prevAnswers) => ({ ...prevAnswers, hasSocialNetwork: value }));
    console.log(answersWeb.hasSocialNetwork)
  };

  

  const handleAjouterReseau = () => {
    setAnswersWeb([...answersWeb.socialNetwork,{ nomReseau : '', lienIntegrer : "", nomUser :""}]);
  };
  
  const submitQuizz = () => {
    console.log('Réponses du quizz:', answersWeb);
    // Ajoutez ici la logique pour envoyer les réponses à votre backend, par exemple.
  };

  const socialNetworks = ["Instagram", "Tiktok", "Youtube", "Facebook", "X - Twitter", "Snapchat","Pinterest","Spotify" ]

//logo
  const objectifPrincipal = [
    'Présenter une entreprise',
    ' Vendre des produits en ligne',
    'Fournir des services en ligne',
    'Partager des informations ou du contenu éducatif',
    'Créer une communauté en ligne',
    ' Générer des leads ou prospects',
    'Collecter des inscriptions ou abonnements',
    'Présenter un portfolio ou des réalisations',
    'Promouvoir un événement ou une initiative',
    'Proposer un blog ou des articles',
    'Fournir un support client en ligne',
    'Faciliter les réservations ou les rendez-vous',
    'Mettre en avant des partenariats',
    'Offrir une expérience immersive ou interactive',
    
  ];
  const pages = [
    'Page d\'accueil',
    'À propos de nous',
    'Nos services',
    'Nos produits',
    'Blog',
    'Contact',
    'Portfolio ou réalisations',
    'Témoignages ou avis clients',
    'Galerie d\'images',
    'FAQ (Foire aux questions)',
    'Pages dédiées aux équipes ou collaborateurs',
    'Page de tarifs ou de prix',
    'Page de témoignages clients',
    'Page d\'inscription ou d\'abonnement',
    'Page de connexion ou d\'espace client',
    'Page d\'événements ou calendrier',
    'Page de carrière ou offres d\'emploi',
    'Page de ressources ou téléchargements',
    'Page de partenaires ou affiliations',
    'Page de politique de confidentialité',
    'Page de conditions d\'utilisation',
    'Page de mentions légales',
    'Page de plan du site',
    'Page d\'actualités ou mises à jour',
    'Page de médias ou presse',
    'Page de dons ou collectes de fonds',
    'Page de témoignages ou études de cas',
    'Page de services clients ou support',
    'Page d\'inscription à la newsletter',
    'Page de promotions ou offres spéciales',
    'Page de témoignages vidéo',
    'Page de géolocalisation ou succursales',
    'Page de comparaison de produits ou services',
    'Page de politique de retour ou remboursement',
    'Page de conditions de livraison',
    'Page de formation ou tutoriels',
    'Page de documentation technique',
    'Page de témoignages sociaux (intégration de médias sociaux)',
    'Page de contact pour les médias ou les relations publiques',
    'Page de statistiques ou rapports',
    'Page d\'accessibilité',
  ];
  
  // Utilisation du tableau "pages" dans votre application React
  
  const fonctionnalites = [
    'Formulaire de contact',
    'Système de commentaires',
    'Panier d\'achat',
    'Système de paiement en ligne',
    'Page de connexion utilisateur',
    'Système de gestion de contenu (CMS)',
    'Intégration de médias sociaux',
    'Galerie d\'images ou de vidéos',
    'Blog avec fonctionnalités avancées',
    'Module de réservation en ligne',
    'Système de suivi des commandes',
    'Fonctionnalités de partage sur les réseaux sociaux',
    'Système de recherche avancée',
    'Système de filtrage de produits ou services',
    'Zone membres avec contenu exclusif',
    'Système de newsletter ou bulletin d\'information',
    'Fonctionnalités de témoignages clients',
    'Intégration de cartes ou de localisation',
    'Formulaires d\'inscription ou d\'adhésion',
    'Outils de personnalisation pour les utilisateurs',
    'Système de recommandation de produits',
    'Fonctionnalités de chat en direct',
    'Intégration de vidéos en direct',
    'Système de notation ou d\'évaluation',
    'Fonctionnalités de recherche par mots-clés',
    'Flux d\'actualités ou de mises à jour en temps réel',
    'Outils de suivi de performance du site',
    'Système de gestion des rendez-vous en ligne',
    'Fonctionnalités de comparaison de produits ou services',
    'Système de gestion des retours ou remboursements',
    'Outils d\'analyse de données',
    'Intégration de jeux ou d\'activités interactives',
    'Fonctionnalités de personnalisation du site',
    'Système de blog avec commentaires et partages',
    'Outils de gestion des médias (images, vidéos, etc.)',
    'Système de support client en direct',
    'Fonctionnalités de gestion des abonnements',
    'Système de partage de fichiers',
    'Outils de gestion des événements en ligne',
  ];
  
  // Utilisation du tableau "fonctionnalites" dans votre application React
  const fontsArray = [
    'Aucune préférence',
    'Arial',
    'Times New Roman',
    'Helvetica',
    'Calibri',
    'Garamond',
    'Verdana',
    'Courier New',
    'Comic Sans MS',
    'Georgia',
    'Impact',
    'Tahoma',
    'Palatino',
    'Century Gothic',
    'Futura',
    'Baskerville',
    'Lato',
    'Roboto',
    'Open Sans',
    'Montserrat',
    'Raleway',
    'Ubuntu',
    'Quicksand',
    'Source Sans Pro',
    'Playfair Display',
    'Crimson Text',
    'Merriweather',
    'Amatic SC',
    'Lobster',
    'Pacifico',
    'Dancing Script',
    'Indie Flower',
    'Poppins',
    'Noto Sans',
    'Droid Sans',
    'Oswald',
    'Comfortaa',
    'Yanone Kaffeesatz',
    'Archivo Black',
    'Exo',
    'Josefin Sans',
    'Orbitron',
    'Alegreya',
    'Inconsolata',
    'Vollkorn',
    'Nunito Sans',
    'Barlow',
    'Titillium Web',
    'Cormorant Garamond',
    'Cinzel',
    'Roboto Condensed',
    'Fira Sans',
    'Karla',
    'Jura',
    'Dosis',
    'Old Standard TT',
    'Asap',
    'Cormorant',
    'Source Code Pro',
    'Anonymous Pro',
    'Monaco',
    'Not Courier Sans',
    'Hack',
    'Fantasque Sans Mono',
    'PT Mono',
    'Courier Prime',
    'Courier Code',
    'Consolas',
    'Monospace',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Proxima Nova',
    'Avenir',
    'Museo Sans',
    'Franklin Gothic',
    'Trade Gothic',
    'Gill Sans',
    'Frutiger',
    'Optima',
    'Myriad Pro',
    'Rockwell',
    'Clarendon',
    'Cooper Black',
    'Brush Script',
    'Mistral',
    'Edwardian Script',
    'Lucida Handwriting',
    'Snell Roundhand',
    'Bickham Script',
    'Script MT Bold',
    'Lobster Two',
    'Great Vibes',
    'Allura',
    'Reenie Beanie',
    'Sacramento',
    'Alex Brush',
  ].filter((value, index, self) => self.indexOf(value) === index);
    

  const optionsSecteursActivite = ((e) =>
  e.map((secteur) => ({
    value: secteur,
    label: secteur
  })))

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>

            <h2> Section Web </h2>


            <Selector
        label="Quel est l'objectif principal de votre site web ? "
        options={optionsSecteursActivite(objectifPrincipal)}
        onChange={(e) => updateAnswerWeb('objectifSite', e.target.value)}
        value={answersWeb.objectifSite}
      />


  <br/>
  <br/>
         <MultiSelector
          label="Quelles pages souhaitez-vous inclure sur votre site web ? "
          maxSelection = {3}
          options={optionsSecteursActivite(pages)}
          onChange={(e) => {const updated = [...answersWeb.pageAInclure];
            if (updated.length < 4) {
                updated.push(e);
              updateAnswerWeb('pageAInclure', updated);
            }
        }}
          value={[]}
        />
      
  <br/>
  <br/>

<TextField
        label="Quel type de contenu souhaitez-vous afficher sur chaque page selectionné , faites une briève description ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerWeb('descriptionPages', e.target.value)}
      />
         <br/>

         <br/>
         <MultiSelector
          label="Quelles fonctionnalités spécifiques souhaitez-vous intégrer sur votre site ?  "
          maxSelection = {3}
          options={optionsSecteursActivite(fonctionnalites)}
          onChange={(e) => {const updated = [...answersWeb.fonctionnaliteInclure];
            if (updated.length < 4) {
                updated.push(e);
              updateAnswerWeb('fonctionnaliteInclure', updated);
            }
        }}
          value={[]}
        />
      
  <br/>
  
  <br/>

<TextField
        label="Avez-vous des préférences en termes de design ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerWeb('designPref', e.target.value)}
      />
         <br/>
         <br/>
 
 <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Disposez-vous déjà d'un logo ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label='Avez-vous un slogan que vous souhaitez inclure dans le logo ?'
    name='Avez-vous un slogan que vous souhaitez inclure dans le logo ?'
    value={answersWeb.hasLogo.toString()} // Convertir le booléen en chaîne
    onChange={handleChange}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersWeb.hasLogo  === true && (
       <FileInput
       label=""
       onChange={(file) => updateAnswerWeb('fileLogo', file)}
     />
      )}


<Selector
        label=" Avez-vous des préférences pour les polices de caractères à utiliser ?"
        options={optionsSecteursActivite(fontsArray)}
        onChange={(e) => updateAnswerWeb('typePolice', e.target.value)}
        value={answersWeb.typePolice}
      />

<br/>
 
 <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Souhaitez-vous intégrer des liens vers vos profils de réseaux sociaux sur le site ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label='Souhaitez-vous intégrer des liens vers vos profils de réseaux sociaux sur le site ?'
    name='Souhaitez-vous intégrer des liens vers vos profils de réseaux sociaux sur le site ?'
    value={answersWeb.hasSocialNetwork.toString()} // Convertir le booléen en chaîne
    onChange={handleChange1}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersWeb.hasSocialNetwork === true && answersWeb.socialNetwork.map((socialNetwork,index) =>
        <div>
        

        <Selector
        label=" Avez-vous des préférences pour les polices de caractères à utiliser ?"
        options={optionsSecteursActivite(socialNetworks)}
        onChange={(e) => {const updated = [...answersWeb.socialNetwork]
            updated[index].nomReseau = e.target.value;
            updateAnswerWeb('socialNetwork.nomReseau',updated)}}
        value={answersWeb.socialNetwork.nomReseau}
      />
    


<TextField
             label="Veuillez renseigner le lien de redirection"
             style={{width : "100%"}}    
             id="outlined-textarea-flexible"
             multiline
             maxRows={15}
        margin="normal"
             onChange={(e) => {const updated = [...answersWeb.socialNetwork]
                updated[index].lienIntegrer = e.target.value;
                updateAnswerWeb('socialNetwork.lienIntegrer',updated)}}
           />



<TextField
             label="Veuillez renseigner votre nom d'utilisateur "
             style={{width : "100%"}}    
             id="outlined-textarea-flexible"
             multiline
             maxRows={15}
        margin="normal"
             onChange={(e) => {const updated = [...answersWeb.socialNetwork]
                updated[index].nomUser = e.target.value;
                updateAnswerWeb('socialNetwork.nomUser',updated)}}
           />
                 <br/>
    <Button  variant="contained" color="primary" onClick={handleAjouterReseau}>Ajouter un reseau social</Button>
           </div>
       
      )}

 
    <br/><br/>


  <Button variant="contained" color="primary" onClick={submitQuizz}>
        Soumettre
      </Button>
     
 
        </div>
    );
};

export default QuizzWeb;