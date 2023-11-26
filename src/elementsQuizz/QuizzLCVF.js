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

const QuizzLCVF = () => {

    const [answersLogo,setAnswersLogo] = useState({

        hasSlogan : false,
        slogan:"",
        withSlogan:false,
        logoStyle : "",
        exemplesLogo :"",
        elementLogo : "",
})

const [answersCV,setAnswersCV] = useState({

    infoPrincipal:[],
    cvStyle : "",
    cvFormat :"",
    hasQrCode : false,
    typeRedirection:"",
    redirectionInfo : ""
})

const [answersFlyer,setAnswersFlyer] = useState({

    objectifPrincipal:"",
    styleGlobal : "",
    infoPrincipal :[],
    LikeLogoCV : false,
    styleFlyer : "",
    colorsFlyer : [],
    formatFlyer : "",
    hasImgParticulier : false,
    imgFile : [null],
    prefSupp : "",
    addSlogan : "",
    hasQrCode : false,
    typeRedirection:"",
    redirectionInfo : "",
    contrainte :""
})

const updateAnswerLogo = (key, value) => {
    setAnswersLogo((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };
const updateAnswerCV = (key, value) => {
    setAnswersCV((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };
const updateAnswerFlyer = (key, value) => {
    setAnswersFlyer((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };
  const handleChange = (event) => {
    console.log(answersLogo.hasSlogan)
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersLogo((prevAnswers) => ({ ...prevAnswers, hasSlogan: value }));
    console.log(answersLogo.hasSlogan)
  };
  const handleChange1 = (event) => {
    console.log(answersLogo.withSlogan)
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersLogo((prevAnswers) => ({ ...prevAnswers, withSlogan: value }));
    console.log(answersLogo.withSlogan)
  };
  const handleChange2 = (event) => {
    console.log(answersCV.hasQrCode)
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersCV((prevAnswers) => ({ ...prevAnswers, hasQrCode: value }));
    console.log(answersLogo.withSlogan)
  };
  const handleChange3 = (event) => {
    console.log(answersFlyer.LikeLogoCV)
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersFlyer((prevAnswers) => ({ ...prevAnswers, LikeLogoCV: value }));
    console.log(answersFlyer.LikeLogoCV)
  };

  const handleChange4 = (event) => {
    console.log(answersFlyer.hasImgParticulier)
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersFlyer((prevAnswers) => ({ ...prevAnswers, hasImgParticulier: value }));
    console.log(answersFlyer.hasImgParticulier)
  };
  const handleChange5 = (event) => {
    console.log(answersFlyer.hasQrCode)
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersFlyer((prevAnswers) => ({ ...prevAnswers, hasQrCode: value }));
    console.log(answersFlyer.hasQrCode)
  };
//logo
  const infoPrincipal = [
    'Nom',
    'Prénom',
    'Titre professionnel',
    'Fonction',
    'Nom de l\'entreprise',
    'Logo de l\'entreprise',
    'Adresse professionnelle',
    'Numéro de téléphone professionnel',
    'Adresse e-mail professionnelle',
    'Site web professionnel',
    'Liens vers les profils sociaux professionnels',
    'Numéro de fax (si applicable)',
    'Adresse personnelle (si nécessaire)',
    'Numéro de téléphone personnel (si nécessaire)',
    'Adresse e-mail personnelle (si nécessaire)',
    'Photo du titulaire de la carte (si souhaité)',
    'Slogan professionnel ou phrase d\'accroche',
    'QR code renvoyant vers des informations supplémentaires',
    'Diplômes ou certifications professionnelles',
    'Récompenses ou distinctions professionnelles',
    'Langues parlées',
    'Références professionnelles (si applicable)',
    'Domaines d\'expertise ou compétences clés',
    'Informations de contact d\'urgence (si nécessaire)',
    'Informations de rappel pour le titulaire de la carte (par exemple, anniversaire)',
    'Informations sur les services ou produits offerts',
    'Codes de réduction ou offres spéciales (si applicable)',
    'Mentions légales ou avertissements (si nécessaire)',
    'Devise personnelle ou professionnelle (si souhaité)',
    'Call-to-action (incitation à prendre contact)',
    'Coordonnées pour la correspondance postale (si nécessaire)',
    'Horaires d\'ouverture (si applicable)',
    'Messages de réseautage social (par exemple, LinkedIn, Twitter)'
  ];
  const elementStyleLogo = ["logo textuel","logo symbolique","une combinaison des deux ! "]
//carte de visite
  const shapes = [
    'Forme rectangulaire',
    'Forme carrée',
    'Forme arrondie',
    'Forme ovale',
    'Forme hexagonale',
    'Forme triangulaire',
    'Forme personnalisée',
    'Aucune préférence'
  ];
  const elementStyleCV =["simple et professionnelle","quelque chose plus créatif"]

  const redirectionActions = [
    'Redirection vers une URL web',
    'Envoi d\'un message vers un numéro prédéfini',
    'Envoi d\'un e-mail vers une adresse e-mail prédéfinie',
    'Appel vers un numéro prédéfini',
    'Redirection vers une application spécifique',
    'Ouverture d\'une carte avec une adresse prédéfinie',
    'Redirection vers une page de contact',
    'Aucune redirection, juste une action locale'
  ];
//flyer
  const communicationObjectives = [
    'Promotion d\'un événement',
    'Présentation de produits',
    'Annonce d\'offres spéciales',
    'Communication d\'informations générales',
    'Invitation à une réunion ou un atelier',
    'Publicité pour une entreprise ou un service',
    'Annonce de nouveautés',
    'Promotion d\'une cause ou d\'une organisation caritative',
    'Campagne de sensibilisation',
    'Promotion d\'une application ou d\'un site web',
    'Annonce d\'ouverture ou de réouverture',
    'Invitation à participer à une enquête ou un concours',
    'Mise en avant de témoignages clients',
    'Promotion de réductions ou codes promo',
    'Annonce d\'un partenariat ou d\'une collaboration',
    'Communication d\'informations de contact',
    'Publicité pour des événements à venir',
    'Mise en avant de valeurs de l\'entreprise',
    'Promotion de services spécifiques',
    'Présentation d\'une équipe ou du personnel',
    'Annonce d\'horaires spéciaux',
    'Promotion de l\'image de marque',
    'Invitation à suivre sur les réseaux sociaux'
  ];

  const promotionalContentElements = [
    'Texte descriptif',
    'Images ou graphiques attrayants',
    'Offres spéciales ou promotions',
    'Coordonnées de contact (adresse, téléphone, e-mail)',
    'Liens vers le site web ou les réseaux sociaux',
    'Date, heure et lieu de l\'événement (le cas échéant)',
    'Présentation des produits ou services',
    'Témoignages de clients (le cas échéant)',
    'Codes QR pour des informations supplémentaires',
    'Informations sur les partenariats ou collaborations',
    'Appel à l\'action clair (incitation à l\'achat, participation, etc.)',
    'Informations sur les tarifs ou les prix',
    'Mentions légales ou conditions de l\'offre',
    'Mention de la durée limitée de l\'offre (si applicable)',
    'Informations sur les avantages ou caractéristiques spéciales',
    'Instructions pour participer à un événement',
    'Résumé des principaux services ou avantages'
  ];

  const designStyleOptions = [
    'Aucune préférence',
    'Minimaliste',
    'Vintage',
    'Moderne',
    'Classique',
    'Abstrait',
    'Réaliste',
    'Illustratif',
    'Typographique',
    'Géométrique',
    'Organique',
    'Futuriste',
    'Rétro',
    'Ludique',
    'Sobre',
    'Épuré',
    'Coloré',
    'Noir et blanc',
    'Grunge',
    'Métallique',
    'Technologique',
    'Art déco',
    'Art nouveau',
    'High-tech',
    'Urbain',
    'Naturel',
    'Industriel',
    'Élégant',
    'Sophistiqué',
    'Pop',
    'Street',
    'Bohème',
    'Traditionnel',
    'Contemporain',
    'Hipster',
    'Chic',
    'Branché',
  ];
  const communicationFormats = [
    'A5',
    'A4',
    'Format carré',
    'Format paysage',
    'Format portrait',
    'Flyer plié',
    'Flyer dépliant',
    'Flyer personnalisé',
    'Aucune préférence'
  ];

   

  const optionsSecteursActivite = ((e) =>
  e.map((secteur) => ({
    value: secteur,
    label: secteur
  })))

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>

            <h2> Section 0: Logo </h2>
  <br/>
 
 <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Avez-vous un slogan que vous souhaitez inclure dans le logo ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label='Avez-vous un slogan que vous souhaitez inclure dans le logo ?'
    name='Avez-vous un slogan que vous souhaitez inclure dans le logo ?'
    value={answersLogo.hasSlogan.toString()} // Convertir le booléen en chaîne
    onChange={handleChange}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersLogo.hasSlogan  === true && (
       <TextField
       label="Faites nous part de votre génie marketing ! "
       style={{width : "100%"}}
       id="outlined-textarea-flexible"
       multiline
       maxRows={15}
       margin="normal"
       onChange={(e) => updateAnswerLogo('slogan', e.target.value)}
     />
      )}

      {answersLogo.hasSlogan === false && (
       
      <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
      <FormLabel component="legend">Voulez-vous inclure un slogan dans le logo  ?</FormLabel>
      <RadioGroup  className='color-circle'
        aria-label='Voulez-vous inclure un slogan dans le logo  ?'
        name='Voulez-vous inclure un slogan dans le logo  ?'
        value={answersLogo.withSlogan.toString()} // Convertir le booléen en chaîne
        onChange={handleChange1}
        row
      >
        <FormControlLabel value="true" control={<Radio />} label="Oui" />
        <FormControlLabel value="false" control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl>

      )}
<br/>

<Selector
        label="Préférez-vous un logo textuel, un logo symbolique, ou une combinaison des deux ?"
        options={optionsSecteursActivite(elementStyleLogo)}
        onChange={(e) => updateAnswerLogo('logoStyle', e.target.value)}
        value={answersLogo.logoStyle}
      />
<br/>

<TextField
        label="Des exemples de logos que vous aimez peuvent-ils aider à définir le style que vous recherchez ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerLogo('exemplesLogo', e.target.value)}
      />
         <br/>
         <TextField
        label="Y a-t-il des éléments spécifiques que vous souhaitez voir dans le logo ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerLogo('elementLogo', e.target.value)}
      />
         <br/>
         <h2> Section 1 : Carte de visite </h2>
  <br/>
  <MultiSelector1
          label="Quelles informations devez-vous inclure sur la carte de visite ?"
          maxSelection = {5}
          options={optionsSecteursActivite(infoPrincipal)}
          onChange={(e) => {const updated = [...answersCV.infoPrincipal];
            if (updated.length < 6) {
                updated.push(e);
              updateAnswerCV('infoPrincipal', updated);
            }
        }}
          value={[]}
        />
        <br/>

<Selector
        label="Préférez-vous une carte de visite simple et professionnelle ou quelque chose de plus créatif ? "
        options={optionsSecteursActivite(elementStyleCV)}
        onChange={(e) => updateAnswerCV('cvStyle', e.target.value)}
        value={answersCV.cvStyle}
      />
<br/>
<Selector
        label="Préférez-vous une carte de visite simple et professionnelle ou quelque chose de plus créatif ? "
        options={optionsSecteursActivite(shapes)}
        onChange={(e) => updateAnswerCV('cvFormat', e.target.value)}
        value={answersCV.cvFormat}
      />
<br/>


 <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Voulez-vous intégrer un Qr Code ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label='Voulez-vous intégrer un Qr Code ?'
    name='Voulez-vous intégrer un Qr Code ?'
    value={answersCV.hasQrCode.toString()} // Convertir le booléen en chaîne
    onChange={handleChange2}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersCV.hasQrCode === true && (
        <div>
        <Selector
         label="Quelle type de redirection ? "
         options={optionsSecteursActivite(redirectionActions)}
         onChange={(e) => updateAnswerCV('typeRedirection', e.target.value)}
         value={answersCV.typeRedirection}
       />
       <br/>

       <TextField
             label="Veuillez renseigner l'élément de redirection"
             style={{width : "100%"}}    
             id="outlined-textarea-flexible"
             multiline
             maxRows={15}
        margin="normal"
             onChange={(e) => updateAnswerCV('redirectionInfo', e.target.value)}
           />
           </div>
       
      )}
 
<br/>
      <h2> Section 1: Flyer </h2>
  <br/>
  <Selector
         label="Quel est l'objectif principal du flyer ?"
         options={optionsSecteursActivite(communicationObjectives)}
         onChange={(e) => updateAnswerFlyer('objectifPrincipal', e.target.value)}
         value={answersFlyer.objectifPrincipal}
       />
        <TextField
        label="Comment décririez-vous le style global que vous souhaitez pour ces éléments de communication ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerFlyer('styleGlobal', e.target.value)}
      />
         <br/>
         <MultiSelector
          label="Quelles informations clés devez-vous inclure dans le flyer ? "
          maxSelection = {5}
          options={optionsSecteursActivite(promotionalContentElements)}
          onChange={(e) => {const updated = [...answersFlyer.infoPrincipal];
            if (updated.length < 6) {
                updated.push(e);
              updateAnswerFlyer('infoPrincipal', updated);
            }
        }}
          value={[]}
        />
      
  <br/>
<FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Les couleurs et le style du flyer doivent-ils correspondre à l'identité visuelle établie avec le logo et la carte de visite ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label="Les couleurs et le style du flyer doivent-ils correspondre à l'identité visuelle établie avec le logo et la carte de visite ?"
    name="Les couleurs et le style du flyer doivent-ils correspondre à l'identité visuelle établie avec le logo et la carte de visite ?"
    value={answersFlyer.LikeLogoCV.toString()} // Convertir le booléen en chaîne
    onChange={handleChange3}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersFlyer.LikeLogoCV  === false && (
        <div>
        <Selector
         label="Quel style voulez-vous appliquer sur votre flyer ? "
         options={optionsSecteursActivite(designStyleOptions)}
         onChange={(e) => updateAnswerFlyer('styleFlyer', e.target.value)}
         value={answersFlyer.styleFlyer}
       />

        <ColorPicker
        label="Quelle(s) couleurs voulez-vous mettre en avant sur votre flyer ?"
        initialValue='#ff0000'
        onChange={(color) => {
            const updatedColors = [...answersFlyer.colorsFlyer];
            if (updatedColors.length < 4) {
              updatedColors.push(color);
              updateAnswerFlyer('colorsFlyer', updatedColors);
            }
        }}
      />
       </div>
 
      )}
  <br/>
  <Selector
         label="Quel format de flyer voulez-vou privilégier ?  "
         options={optionsSecteursActivite(communicationFormats)}
         onChange={(e) => updateAnswerFlyer('formatFlyer', e.target.value)}
         value={answersFlyer.formatFlyer}
       />

<br/>
  


<FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Avez-vous des images spécifiques que vous souhaitez inclure dans le flyer ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label="Avez-vous des images spécifiques que vous souhaitez inclure dans le flyer ?"
    name="Avez-vous des images spécifiques que vous souhaitez inclure dans le flyer ?"
    value={answersFlyer.hasImgParticulier.toString()} // Convertir le booléen en chaîne
    onChange={handleChange4}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>
<br/>


{answersFlyer.hasImgParticulier === true && (
       <FileInput
       label="Pouvez-vous nous fournir les images ?"
       onChange={(file) => updateAnswerFlyer('imgFile', file)}
     />
      )}

      {answersFlyer.hasImgParticulier  === false && (
         <TextField
         label="Avez-vous des préférences supplémentaires en termes d'esthétique visuelle ? "
         style={{width : "100%"}}  
         id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
         onChange={(e) => updateAnswerFlyer('prefSupp', e.target.value)}
       />

      )}
<br/>
<TextField
         label="Avez-vous des slogans ou des messages spécifiques à inclure dans le flyer ? "
         style={{width : "100%"}}
         id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
         onChange={(e) => updateAnswerFlyer('addSlogan', e.target.value)}
       />

<br/>

<FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Voulez-vous intégrer un Qr Code ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label='Voulez-vous intégrer un Qr Code ?'
    name='Voulez-vous intégrer un Qr Code ?'
    value={answersFlyer.hasQrCode.toString()} // Convertir le booléen en chaîne
    onChange={handleChange5}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>


{answersFlyer.hasQrCode === true && (
        <div>
        <Selector
         label="Quelle type de redirection ? "
         options={optionsSecteursActivite(redirectionActions)}
         onChange={(e) => updateAnswerFlyer('typeRedirection', e.target.value)}
         value={answersFlyer.typeRedirection}
       />
       <br/>

       <TextField
             label="Veuillez renseigner l'élément de redirection"
             style={{width : "100%"}}   
             id="outlined-textarea-flexible"
             multiline
             maxRows={15}
        margin="normal"
             onChange={(e) => updateAnswerFlyer('redirectionInfo', e.target.value)}
           />
           </div>
       
      )}

 
<br/>


        <TextField
             label="Y a-t-il des contraintes techniques ou des exigences spécifiques à prendre en compte pour l'impression ou l'utilisation en ligne de ces éléments ?"
             style={{width : "100%"}}
             id="outlined-textarea-flexible"
             multiline
             maxRows={15}
        margin="normal"
             onChange={(e) => updateAnswerFlyer('contrainte', e.target.value)}
           />
        </div>
    );
};

export default QuizzLCVF;