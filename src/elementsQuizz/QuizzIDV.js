import React, { useState } from 'react';
import ColorPicker from '../inputs/ColorPicker';
import FileInput from '../inputs/FileInput';
import MultiSelector from '../inputs/MultiSelector';
import Selector from '../inputs/Selector';
import YesNoSelector from '../inputs/YesNoSelector';
import DateSelector from '../inputs/DateSelector';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import "../sass/ColorPicker.scss"


const QuizzIDV = () => {
  // State pour stocker les réponses de l'utilisateur
  const [answersIDV, setAnswersIDV] = useState({
    projectName: '',
    projectSector: '',
    projectActivities: '',
    projectCreationDate: '',
    companyValues: '',
    companyVision: '',
    brandPersonality: '',
    brandColors: [],
    specificBrandColors: [],
    fontPreference: '',
    hasLogo: false,
    logoFile: null,
    logoElements: [],
    brandShapes: '',
    brandImages: [],
    communicationTone: '',
    graphicStyle: '',
    distinctiveness: '',
    adaptability: [],
    viewClient : '',
    minAgeClient : '',
    maxAgeClient : '',
    personalityClient : '',
    habitudeClient : ""
  });
  const [activeSection, setActiveSection] = useState(0);

  // Fonction pour passer à la section suivante
  const nextSection = () => {
    setActiveSection(activeSection + 1);
  };

  // Fonction pour passer à la section précédente
  const prevSection = () => {
    setActiveSection(activeSection - 1);
  };

  // Fonction pour mettre à jour les réponses de l'utilisateur
  const updateAnswer = (key, value) => {
    setAnswersIDV((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  const handleChange = (event) => {
    console.log(answersIDV.hasLogo)
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersIDV((prevAnswers) => ({ ...prevAnswers, hasLogo: value }));
    console.log(answersIDV.hasLogo)
  };

  const secteursActivite = [
    'Technologie',
    'Santé',
    'Éducation',
    'Finance',
    'Alimentation',
    'Mode',
    'Transport',
    'Tourisme',
    'Artisanat',
    'Culture',
    'Environnement',
    'Média',
    'Sport',
    'Immobilier',
    'Services',
    'Agriculture',
    'Automobile',
    'Aérospatiale',
    'Industrie',
    'Logistique',
    'Énergie',
    'Télécommunications',
    'Pharmaceutique',
    'Cosmétiques',
    'Marketing',
    'Publicité',
    'Architecture',
    'Ingénierie',
    'Consultance',
    'Événementiel',
    'Réseaux sociaux',
    'Jeux vidéo',
    'Commerce de détail',
    'Distribution',
    'Édition',
    'Recherche',
    'Biotechnologie',
    'Énergie renouvelable',
    'Audiovisuel',
    'Électronique',
    'Éducation physique',
    'Services publics',
    'Agroalimentaire',
    'Assurance',
    'Juridique',
    'Design',
    'Animation',
    'Développement durable',
    'Santé mentale',
    'Ressources humaines',
    'Formation professionnelle',
    'Tour opérateur',
    'Génie civil',
    'E-commerce',
    'Services financiers',
    'Études de marché',
    'Architecture d\'intérieur',
    'Services informatiques',
    'Cyber sécurité',
    'Animation 3D',
    'Intelligence artificielle',
    'Sécurité alimentaire',
    'Ingénierie logicielle',
    'Recyclage',
    'Gestion de projet',
    'Nanotechnologie',
    'Gestion des déchets',
    'Biologie marine',
    'Science des données',
    'Design graphique',
    'Études cinématographiques',
    'Études littéraires',
    'Recherche spatiale',
    'Télécommunication mobile',
    'Développement web',
    'Exploration minière',
    'Réalité virtuelle',
    'Assistance médicale',
    'Gestion de l\'eau',
    'Design industriel',
    'Hôtellerie',
    'Relations publiques',
    'Traduction et interprétation',
    'Gestion des ressources naturelles',
    'Intelligence émotionnelle',
    'Technologie de l\'information médicale'
  ];

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
  
  const styleLogo = [
    'Icône',
    'Texte',
    'Nom de l\'entreprise',
    'Initiales',
    'Slogan',
    'Forme géométrique',
    'Illustration',
    'Animaux',
    'Plantes',
    'Objets',
    'Personnage',
    'Symboles',
    'Mascotte',
    'Couleurs spécifiques',
    'Police spécifique',
    'Style moderne',
    'Style vintage',
    'Style minimaliste',
    'Style abstrait',
    'Style rétro',
    'Style classique',
    'Style ludique',
    'Style élégant',
    'Style industriel',
    'Style organique',
    'Style technologique',
    'Style artistique',
    'Style futuriste',
    'Style grunge',
    'Style urbain',
    'Style naturel',
    'Style ethnique',
    'Style cosmique',
    'Style scandinave',
    'Style artisanal',
    'Style typographique',
    'Style monogramme',
    'Style calligraphique',
    'Style 3D',
    'Style aquarelle',
    'Style linéaire',
    'Style cartoon',
    'Style pixel art',
    'Style cinématographique',
    'Style sportif',
    'Style éducatif',
    'Style médical',
    'Style alimentaire'
  ];

  const typeImage = [
    'Aucune préférence',
    'Images de produits',
    'Images d\'équipe',
    'Images de bureaux ou d\'emplacements',
    'Images de processus de fabrication',
    'Images de clients utilisant les produits/services',
    'Images de témoignages de clients',
    'Images de l\'équipe dirigeante',
    'Images de l\'environnement de travail',
    'Images de la culture d\'entreprise',
    'Images de l\'histoire de l\'entreprise',
    'Images de l\'événementiel',
    'Images promotionnelles',
    'Images de partenariats',
    'Images d\'activités caritatives ou sociales',
    'Images de l\'entreprise lors d\'événements',
    'Images de l\'équipe en action',
    'Images de formations ou de séminaires',
    'Images du processus de création/production',
    'Images de l\'expérience client',
    'Images de la chaîne logistique',
    'Images du service client en action',
    'Images de l\'innovation',
    'Images du processus de recherche et développement',
    'Images du service après-vente',
    'Images du support technique',
    'Images du processus de livraison',
    'Images de la satisfaction client',
    'Images du réseau de distribution',
    'Images du réseau de partenaires',
    'Images du réseau de fournisseurs',
    'Images de la qualité des produits/services',
    'Images du contrôle qualité',
    'Images du design',
    'Images de la personnalité de la marque',
    'Images de la diversité au sein de l\'entreprise',
    'Images de l\'engagement environnemental',
    'Images du parcours du client',
    'Images des coulisses de l\'entreprise',
    'Images du processus de conception',
    'Images du processus de test',
    'Images du processus de lancement',
    'Images du processus d\'amélioration continue',
    'Images du processus de gestion de projet',
    'Images du processus de collaboration en équipe',
    'Images du processus de veille concurrentielle',
  ];
  const styleTon = [
    'Aucune préférence',
    'Formel',
    'Décontracté',
    'Informatif',
    'Humoristique',
    'Professionnel',
    'Amical',
    'Accessible',
    'Sérieux',
    'Convivial',
    'Créatif',
    'Innovant',
    'Confiant',
    'Inspirant',
    'Positif',
    'Engageant',
    'Dynamique',
    'Sincère',
    'Direct',
    'Éducatif',
    'Collaboratif',
    'Authentique',
    'Moderne',
    'Traditionnel',
    'Respectueux',
    'Ouvert',
    'Transparent',
    'Enthousiaste',
    'Énergique',
    'Empathique',
    'Persuasif',
    'Original',
    'Distinctif',
    'Stimulant',
    'Émotionnel',
    'Éthique',
    'Responsable',
    'Réfléchi',
    'Orienté résultats',
    'Centré client',
    'Créateur de tendances',
    'Compétent',
    'Réactif',
    'Proactif',
    'Pragmatique',
    'Intègre',
    'Équilibré',
    'Informel',
    'Direct',
    'Collaboratif',
    'Motivant',
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

  const adaptabilityOptions = [
    'Aucune préférence',
    'Adaptabilité à l\'impression',
    'Adaptabilité au numérique',
    'Adaptabilité aux médias sociaux',
    'Adaptabilité aux supports en ligne',
    'Adaptabilité aux supports physiques',
    'Adaptabilité aux supports publicitaires',
    'Adaptabilité aux supports marketing',
    'Adaptabilité aux supports promotionnels',
    'Adaptabilité aux présentations',
    'Adaptabilité aux vêtements d\'entreprise',
    'Adaptabilité aux objets promotionnels',
    'Adaptabilité aux emballages',
    'Adaptabilité aux enseignes',
    'Adaptabilité aux véhicules de l\'entreprise',
    'Adaptabilité aux documents officiels',
    'Adaptabilité aux bannières',
    'Adaptabilité aux affiches',
    'Adaptabilité aux cartes de visite',
    'Adaptabilité aux brochures',
    'Adaptabilité aux newsletters',
    'Adaptabilité aux rapports annuels',
    'Adaptabilité aux e-mails',
    'Adaptabilité aux applications mobiles',
    'Adaptabilité aux sites web',
    'Adaptabilité aux blogs',
    'Adaptabilité aux présentations PowerPoint',
    'Adaptabilité aux vidéos',
    'Adaptabilité aux infographies',
    'Adaptabilité aux articles',
    'Adaptabilité aux podcasts',
    'Adaptabilité aux vidéos en direct',
    'Adaptabilité aux réunions virtuelles',
    'Adaptabilité aux webinaires',
    'Adaptabilité aux supports de formation',
    'Adaptabilité aux supports éducatifs',
    'Adaptabilité aux animations',
    'Adaptabilité aux GIF',
    'Adaptabilité aux supports interactifs',
    'Adaptabilité aux médias traditionnels',
    'Adaptabilité aux médias émergents',
    'Adaptabilité aux médias innovants',
    'Adaptabilité aux médias expérientiels',
    'Adaptabilité aux médias immersifs',
    'Adaptabilité aux médias collaboratifs',
    'Adaptabilité aux médias participatifs',
    'Adaptabilité aux médias personnalisés',
  ];

  const targetAudienceOptions = [
    'Aucune préférence',
    'Hommes',
    'Femmes',
    'Tous genres',
    'Familles',
    'Professionnels',
    'Étudiants',
    'Travailleurs indépendants',
    'Cadres',
    'Artisans',
    'Créatifs',
    'Entrepreneurs',
    'Amateurs de technologie',
    'Amateurs de mode',
    'Amateurs de sport',
    'Amateurs de musique',
    'Amateurs de cinéma',
    'Amateurs de livres',
    'Amateurs d\'art',
    'Amateurs de voyage',
    'Amateurs de gastronomie',
    'Amateurs de bien-être',
    'Amateurs de fitness',
    'Amateurs de jeux vidéo',
    'Amateurs de plein air',
    'Amateurs de bricolage',
    'Amateurs d\'artisanat',
    'Amateurs de luxe',
    'Amateurs de produits locaux',
    'Amateurs de produits durables',
    'Amateurs de produits écologiques',
    'Amateurs de produits éthiques',
    'Amateurs de produits innovants',
    'Amateurs de produits traditionnels',
    'Amateurs de produits de qualité',
    'Amateurs de produits abordables',
    'Amateurs de promotions',
    'Amateurs d\'exclusivité',
    'Amateurs de personnalisation',
    'Amateurs de diversité',
    'Amateurs d\'inclusion',
    'Amateurs de nouvelles tendances',
    'Amateurs de classiques intemporels',
    'Amateurs d\'expériences uniques',
    'Amateurs de service client exceptionnel',
    'Amateurs de marques engagées socialement',
    'Amateurs de marques transparentes',
    'Amateurs de marques authentiques',
    'Amateurs de marques ludiques',
    'Amateurs de marques sérieuses',
    'Amateurs de marques innovantes',
    'Amateurs de marques traditionnelles',
    'Amateurs de marques locales',
    'Amateurs de marques internationales',
    'Amateurs de marques établies',
    'Amateurs de marques émergentes',
    'Amateurs de marques de luxe',
    'Amateurs de marques abordables',
    'Amateurs de marques de qualité',
    'Amateurs de marques avant-gardistes',
    'Amateurs de marques classiques',
    'Amateurs de marques modernes',
    'Amateurs de marques minimalistes',
    'Amateurs de marques expressives',
    'Amateurs de marques sobres',
    'Amateurs de marques colorées',
    'Amateurs de marques monochromes',
  ];

  const purchasePreferencesOptions = [
    'Aucune préférence',
    'Achats en ligne',
    'Achats en magasin',
    'Achats impulsifs',
    'Achats réfléchis',
    'Recherche en ligne avant achat',
    'Comparaison de prix',
    'Utilisation de coupons de réduction',
    'Participation à des programmes de fidélité',
    'Achats fréquents',
    'Achats occasionnels',
    'Achats saisonniers',
    'Achats de produits de première nécessité',
    'Achats de produits de luxe',
    'Achats de produits durables',
    'Achats de produits locaux',
    'Achats de produits internationaux',
    'Achats de produits éthiques',
    'Achats de produits innovants',
    'Achats de produits traditionnels',
    'Achats de produits de marque',
    'Achats de produits génériques',
    'Préférence pour les marques établies',
    'Préférence pour les marques émergentes',
    'Préférence pour les promotions',
    'Préférence pour l\'exclusivité',
    'Préférence pour la personnalisation',
    'Préférence pour la diversité',
    'Préférence pour l\'inclusion',
    'Préférence pour les nouvelles tendances',
    'Préférence pour les classiques intemporels',
    'Préférence pour les expériences uniques',
    'Préférence pour un service client exceptionnel',
    'Préférence pour des marques engagées socialement',
    'Préférence pour des marques transparentes',
    'Préférence pour des marques authentiques',
    'Préférence pour des marques ludiques',
    'Préférence pour des marques sérieuses',
    'Préférence pour des marques innovantes',
    'Préférence pour des marques traditionnelles',
    'Préférence pour des marques locales',
    'Préférence pour des marques internationales',
    'Préférence pour des marques établies',
    'Préférence pour des marques émergentes',
    'Préférence pour des marques de luxe',
    'Préférence pour des marques abordables',
    'Préférence pour des marques de qualité',
    'Préférence pour des marques avant-gardistes',
    'Préférence pour des marques classiques',
    'Préférence pour des marques modernes',
    'Préférence pour des marques minimalistes',
    'Préférence pour des marques expressives',
    'Préférence pour des marques sobres',
    'Préférence pour des marques colorées',
    'Préférence pour des marques monochromes',
  ];

  const numbers = Array.from({ length: 85 }, (_, index) => index + 16);
  // Utilisation de la liste pour générer les options du sélecteur
  const optionsSecteursActivite = ((e) =>e.map((secteur) => ({
    value: secteur,
    label: secteur
  })))
  // Fonction pour soumettre le quizz (vous pouvez adapter cela selon vos besoins)
  const submitQuizz = () => {
    console.log('Réponses du quizz:', answersIDV);
    // Ajoutez ici la logique pour envoyer les réponses à votre backend, par exemple.
  };

  return (
    
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
  <h2> Section 0: Identité du projet </h2>
  <br/>
      <TextField style={{width : "100%"}}
        label="Quelle désignation avez-vous choisie pour votre activité ?"
        fullWidth
        variant="outlined"
        margin="normal"
        onChange={(e) => updateAnswer('projectName', e.target.value)}
      />
<br/>
      <Selector
        label="Quel est le secteur d'activité de votre projet ?"
        options={optionsSecteursActivite(secteursActivite)}
        onChange={(e) => updateAnswer('projectSector', e.target.value)}
        value={answersIDV.projectSector}
      />
<br/>
      <TextField
       style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        label="Quelle(s) est/sont l'activité(es) de votre projet ?"
        fullWidth
        variant="outlined"
        margin="normal"
        onChange={(e) => updateAnswer('projectActivities', e.target.value)}
      />

      <DateSelector
        label="Quelle est la date de création de votre projet ?"
        onChange={(value) => updateAnswer('projectCreationDate', value)}
        value={answersIDV.projectCreationDate}
      />
        <br/>
      <h2> Section 1: Vision et Valeurs de l'entreprise </h2>
  <br/>

  <TextField
   style={{width : "100%"}}
        label="Quelles sont les valeurs fondamentales de votre entreprise ?"
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswer('companyValues', e.target.value)}
      />
      <br/>
<TextField
 style={{width : "100%"}}
        label="Quelle est la vision que vous avez pour l'avenir de votre entreprise  ?"
        fullWidth
        variant="outlined"
        margin="normal"
        onChange={(e) => updateAnswer('companyVision', e.target.value)}
      />
         <br/>
         <TextField
        label=" Si votre marque était une personne, comment la décririez-vous ? "
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswer('brandPersonality', e.target.value)}
      />
         <br/>
      <h2> Section 2 : Estétique de l'entreprise </h2>
  <br/>
  
  <ColorPicker
        label="Quelles sont les couleurs préférées de votre entreprise ?"
        initialValue='ff0000'
        onChange={(color) => {
            const updatedColors = [...answersIDV.brandColors];
            if (updatedColors.length < 4) {
              updatedColors.push(color);
              updateAnswer('brandColors', updatedColors);}
        }}
      />
      <br/>
      <ColorPicker
        label="Y a-t-il des couleurs spécifiques que vous souhaitez associer à votre marque ?"
        initialValue='#ff0000'
        onChange={(color) => {
            const updatedColors = [...answersIDV.specificBrandColors];
            if (updatedColors.length < 4) {
              updatedColors.push(color);
              updateAnswer('specificBrandColors', updatedColors);
            }
        }}
      />

<br/>
    <Selector
        label="Avez-vous une préférence pour un style de police particulier ?"
        options={optionsSecteursActivite(fontsArray)}
        onChange={(e) => updateAnswer('fontPreference', e.target.value)}
        value={answersIDV.fontPreference}
      />
<br/>
    <div className='color-circle'>
      <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Disposez-vous déjà d'un logo ?</FormLabel>
  <br/>
  <RadioGroup className='color-circle'
    aria-label="Disposez-vous déjà d'un logo ?"
    name="Disposez-vous déjà d'un logo ?"
    value={answersIDV.hasLogo.toString()} // Convertir le booléen en chaîne
    onChange={handleChange}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>
</div>
<br/>
{answersIDV.hasLogo === true && (
        <FileInput
          label=""
          onChange={(file) => updateAnswer('logoFile', file)}
        />
      )}

      {answersIDV.hasLogo === false && (
        <MultiSelector
          label="Y a-t-il des éléments spécifiques que vous souhaitez inclure dans le logo ?"
          maxSelection = {3}
          options={optionsSecteursActivite(styleLogo)}
          onChange={(e) => {const updatedLogo = [...answersIDV.logoElements];
            if (updatedLogo.length < 4) {
                updatedLogo.push(e);
              updateAnswer('logoElements', updatedLogo);
            }
        }}
          value={[]}
        />
      )}
<br/>
<TextField
        label="Y a-t-il des formes ou des symboles spécifiques qui représentent bien votre entreprise ? "
         style={{width : "100%"}}
         id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswer('brandShapes', e.target.value)}
      />
      <br/>
      <MultiSelector
          label="Quel type d'images ou de photos souhaitez-vous associer à votre marque ?"
          maxSelection = {3}
          options={optionsSecteursActivite(typeImage)}
          onChange={(e) => {const updated = [...answersIDV.brandImages];
            if (updated.length < 4) {
                updated.push(e);
              updateAnswer('brandImages', updated);
            }
        }}
          value={[]}
        />
<br/>
    <Selector
        label="  Comment décririez-vous le ton de communication de votre entreprise ?"
        options={optionsSecteursActivite(styleTon)}
        onChange={(e) => updateAnswer('communicationTone', e.target.value)}
        value={answersIDV.communicationTone}
      />
<br/>

<br/>
    <Selector
        label="   Préférez-vous un style graphique particulier ?"
        options={optionsSecteursActivite(designStyleOptions)}
        onChange={(e) => updateAnswer('graphicStyle', e.target.value)}
        value={answersIDV.graphicStyle}
      />
<br/>
<br/>
<TextField
        label=" Comment votre identité visuelle se distinguera-t-elle de celle de vos concurrents ? "
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswer('distinctiveness', e.target.value)}
      />
      <br/>
      <br/>
      <MultiSelector
          label="Votre identité visuelle doit-elle être facilement adaptable à différents supports, lesquels ?"
          maxSelection = {5}
          options={optionsSecteursActivite(adaptabilityOptions)}
          onChange={(e) => {const updated = [...answersIDV.adaptability];
            if (updated.length < 6) {
                updated.push(e);
              updateAnswer('adaptability', updated);
            }
        }}
          value={[]}
        />
<br/>
<h2> Section 3 : Audience de l'entreprise </h2>
<br/>
<TextField
        label="Comment votre identité visuelle peut-elle attirer ou résonner avec votre public cible ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswer('viewClient', e.target.value)}
      />
      <br/>
      <br/>
    <Selector
        label="Âge Minimum "
        options={optionsSecteursActivite(numbers)}
        onChange={(e) => updateAnswer('minAgeClient', e.target.value)}
        value={answersIDV.minAgeClient}
      />
<br/>
<Selector
        label="Âge Maximum "
        options={optionsSecteursActivite(numbers)}
        onChange={(e) => {if(answersIDV.minAgeClient<e){updateAnswer('maxAgeClient', e.target.value)}}}
        value={answersIDV.maxAgeClient}
      />
<br/>

<Selector
        label="Personalité client "
        options={optionsSecteursActivite(targetAudienceOptions)}
        onChange={(e) => updateAnswer('personalityClient', e.target.value)}
        value={answersIDV.personalityClient}
      />
<br/>
<Selector
        label="Habitude client "
        options={optionsSecteursActivite(purchasePreferencesOptions)}
        onChange={(e) => updateAnswer('habitudeClient', e.target.value)}
        value={answersIDV.habitudeClient}
      />
<br/>




      {/* Bouton de soumission */}
      <Button variant="contained" color="primary" onClick={submitQuizz}>
        Soumettre
      </Button>
    </div>
  );
};

export default QuizzIDV;
