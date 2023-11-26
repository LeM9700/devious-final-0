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
import QuizzWeb from './QuizzWEB';

const QuizzSMN = () => {

    const [answersSMN,setAnswersSMN] = useState({

        objectifExpostion:[],
        minAgeClient : '',
        maxAgeClient : '',
        personalityClient : '',
        habitudeClient : "",
        diffConcu : "",
        hasSite : false,
        urlSite : "",
        wantSite : false,
        wantOurService : false,
        pageAInclure : [],
        descriptionPages :"",
        fonctionnaliteInclure : [],
        designPref : "",
        hasLogo : false,
        fileLogo : null,
        typePhoto : "",
        typePolice : "",
        hisSocialNetwork : [],
        socialNetworkContenu : [],
        oftenPublicationSocial : '',
        keyWords :  "",
        hasBudgetAds : false,
        budgetAds :"",
        descriptionActionAds : "",
        hasBlog :false,
        subjectsBlog : "",
        oftenPublicationBlog : "",
        descriptionActionBlog : "",
        hasMailMarketing : false,
        hasListDiffusion : false,
        listDiffusionFile : null,
        indicatorsKPI : [],
        attente:""
})


const updateAnswerSMN = (key, value) => {
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  const handleChange = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, hasSite: value }));
    console.log(answersSMN.hasSite)
  };

  const handleChange1 = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, wantSite: value }));
    console.log(answersSMN.wantSite)
  };

  const handleChange2 = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, wantOurService: value }));
    console.log(answersSMN.wantOurService)
  };

  const handleChange3= (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, hasBudgetAds: value }));
    console.log(answersSMN.hasBudgetAds)
  };

  const handleChange4 = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, hasBlog: value }));
    console.log(answersSMN.hasBlog)
  };

  const handleChange5 = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, hasMailMarketing: value }));
    console.log(answersSMN.hasMailMarketing)
  };

  const handleChange6 = (event) => {
    
    const value = event.target.value === 'true'; // Convertir la chaîne en booléen
    setAnswersSMN((prevAnswers) => ({ ...prevAnswers, hasListDiffusion: value }));
    console.log(answersSMN.hasListDiffusion)
  };


  


  const submitQuizz = () => {
    console.log('Réponses du quizz:', answersSMN);
    // Ajoutez ici la logique pour envoyer les réponses à votre backend, par exemple.
  };

  const objectifsMarketing = [
    'Augmentation des ventes en ligne',
    'Notoriété de la marque',
    'Génération de leads',
    'Acquisition de nouveaux clients',
    'Fidélisation de la clientèle existante',
    'Promotion de produits ou services spécifiques',
    'Amélioration de la visibilité en ligne',
    'Croissance de la communauté en ligne',
    'Engagement sur les médias sociaux',
    'Promotion d\'événements spécifiques',
    'Collecte d\'avis ou témoignages clients',
    'Éducation des clients sur les produits ou services',
    'Lancement de nouveaux produits ou services',
    'Amélioration de la réputation en ligne',
    'Augmentation du trafic sur le site web',
    'Conversion des visiteurs en clients',
    'Promotion d\'offres spéciales ou codes promo',
    'Gestion de la réputation en ligne',
    'Mise en avant de valeurs d\'entreprise',
    'Amélioration de la présence sur les moteurs de recherche (SEO)',
    'Utilisation de publicités payantes (Google Ads, Facebook Ads, etc.)',
    'Suivi et analyse des performances marketing',
    'Amélioration de la communication avec les clients',
    'Gestion des relations publiques en ligne',
    'Mise en place de campagnes d\'e-mail marketing',
    'Création de contenu attractif',
    'Participation à des partenariats ou collaborations en ligne',
    'Présentation de contenus éducatifs ou informatifs',
    'Utilisation de l\'influence marketing',
    'Promotion de l\'engagement utilisateur',
    'Augmentation de l\'interaction sur les médias sociaux',
    'Gestion des crises en ligne',
    'Utilisation du marketing automation',
    'Mise en place de campagnes de remarketing',
    'Augmentation de la conversion sur le site web',
    'Utilisation de chatbots pour le support client en ligne',
    'Mise en avant d\'avis clients positifs',
    'Promotion de la participation à des événements en ligne',
  ];
  
  // Utilisation du tableau "objectifsMarketing" dans votre application React
  
  const typesContenuEntreprise = [
    'Actualités ou mises à jour de l\'entreprise',
    'Contenu promotionnel pour les produits ou services',
    'Contenu éducatif ou informatif lié à votre secteur d\'activité',
    'Conseils et astuces pour vos clients ou utilisateurs',
    'Contenu visuel attrayant, comme des images ou des infographies',
    'Vidéos, que ce soit des tutoriels, des présentations ou des vidéos promotionnelles',
    'Contenu généré par les utilisateurs (UGC) ou témoignages clients',
    'Contenu humoristique ou divertissant',
    'Annonces d\'événements ou de promotions spéciales',
    'Questions et sondages pour encourager l\'interaction',
    'Articles de blog ou liens vers du contenu long-forme',
    'Contenu lié aux coulisses de l\'entreprise ou à la culture d\'entreprise',
    'Annonces de partenariats ou collaborations',
    'Concours ou jeux pour encourager la participation',
    'Publications liées à des causes sociales ou des actions caritatives',
    'Célébrations d\'anniversaires ou de jalons de l\'entreprise',
    'Contenu saisonnier ou lié aux vacances',
    'Mises en avant d\'employés ou d\'équipes',
    'Contenu interactif, comme des sondages ou des quiz',
    'Avis ou retours clients positifs',
    'Contenu lifestyle ou inspirant',
    'Publications sur des tendances ou événements actuels',
    'Contenu créatif, tel que des œuvres d\'art, des designs, etc.',
    'Podcasts ou enregistrements audio',
    'Live streams ou sessions en direct',
  ];
  
  // Utilisation du tableau "typesContenuEntreprise" dans votre application React
  





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


  const indicateursPerformanceMarketing = [
    'Taux de conversion',
    'Taux d\'engagement sur les médias sociaux',
    'Nombre de leads générés',
    'Taux d\'ouverture des e-mails',
    'Taux de clics dans les e-mails',
    'Taux d\'abandon de panier (pour les sites e-commerce)',
    'Taux de rétention client',
    'Taux d\'acquisition client',
    'Coût par conversion',
    'Retour sur investissement (ROI)',
    'Taux de rebond sur le site web',
    'Positionnement dans les moteurs de recherche (SEO)',
    'Nombre de partages sur les réseaux sociaux',
    'Taux de croissance du trafic web',
    'Taux de conversion des publicités en ligne',
    'Nombre de mentions de la marque en ligne',
    'Taux de conversion sur les médias sociaux',
    'Taux de conversion des publicités payantes',
    'Taux de conversion des campagnes d\'e-mail marketing',
    'Taux de satisfaction client',
    'Taux d\'ouverture des publicités en ligne',
    'Taux de conversion des pages de destination',
    'Taux de réponse aux campagnes de marketing automation',
    'Taux d\'interaction avec les chatbots ou assistants virtuels',
    'Taux d\'inscription ou d\'abonnement aux newsletters',
    'Taux de participation aux concours ou jeux',
    'Taux de rétention sur les médias sociaux',
    'Taux de conversion des campagnes de remarketing',
    'Taux de réaction aux publications sur les médias sociaux',
    'Taux de conversion des promotions spéciales',
    'Taux de participation aux événements en ligne',
    'Taux de conversion des campagnes de sensibilisation',
  ];
  const numbers = Array.from({ length: 85 }, (_, index) => index + 16);
  // Utilisation du tableau "indicateursPerformanceMarketing" dans votre application React
   const socialNetwork = ["Instagram", "Tiktok", "Youtube", "Facebook", "X - Twitter", "Snapchat","Pinterest","Spotify" ]
   const often = ["Tous les jours","1 jour sur 2", "1 jour sur 3","Une fois par semaine","Une fois toute les 2 semaines","Un fois par mois"] 
   const waitResults = ["3-4 mois ","6 mois", "9 mois", "1 an"]
  const optionsSecteursActivite = ((e) =>
  e.map((secteur) => ({
    value: secteur,
    label: secteur
  })))

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>

            <h2> Section Stratégie Marketing Numérique</h2>


        
         <MultiSelector
          label="Quels sont les principaux objectifs de votre marketing digital ?  "
          maxSelection = {3}
          options={optionsSecteursActivite(objectifsMarketing)}
          onChange={(e) => {const updated = [...answersSMN.objectifExpostion];
            if (updated.length < 4) {
                updated.push(e);
              updateAnswerSMN('objectifExpostion', updated);
            }
        }}
          value={[]}
        />
      
  <br/>
  <br/>

  <Selector
        label="Âge Minimum "
        options={optionsSecteursActivite(numbers)}
        onChange={(e) => updateAnswerSMN('minAgeClient', e.target.value)}
        value={answersSMN.minAgeClient}
      />
<br/>
<Selector
        label="Âge Maximum "
        options={optionsSecteursActivite(numbers)}
        onChange={(e) => {if(e>answersSMN.minAgeClient){updateAnswerSMN('maxAgeClient', e.target.value)}}}
        value={answersSMN.maxAgeClient}
      />
<br/>

<Selector
        label="Personalité client "
        options={optionsSecteursActivite(targetAudienceOptions)}
        onChange={(e) => updateAnswerSMN('personalityClient', e.target.value)}
        value={answersSMN.personalityClient}
      />
<br/>
<Selector
        label="Habitude client "
        options={optionsSecteursActivite(purchasePreferencesOptions)}
        onChange={(e) => updateAnswerSMN('habitudeClient', e.target.value)}
        value={answersSMN.habitudeClient}
      />
<br/>


<TextField
        label="Quel est votre positionnement unique sur le marché ? Qu'est-ce qui vous distingue de la concurrence ? "
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerSMN('diffConcu', e.target.value)}
      />
         <br/>
         <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend"> Disposez-vous d'un site web ? </FormLabel>
  <RadioGroup  className='color-circle'
    aria-label="Disposez-vous d\'un site web ? "
    name=" Disposez-vous d'un site web ? "
    value={answersSMN.hasSite.toString()} // Convertir le booléen en chaîne
    onChange={handleChange}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersSMN.hasSite === true &&(
        <div>
        

       <TextField
             label="Veuillez renseigner votre url"
             style={{width : "100%"}}    
             id="outlined-textarea-flexible"
             multiline
             maxRows={15}
        margin="normal"
             onChange={(e) => {
                updateAnswerSMN('urlSite',e.target.value)}}
           />




           </div>
       
      )}


      {answersSMN.hasSite === false && (
        
        <div>
        <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
        <FormLabel component="legend"> Envisagez-vous d'en créer un ? </FormLabel>
        <RadioGroup  className='color-circle'
          aria-label="Envisagez-vous d'en créer un ? "
          name=" Envisagez-vous d'en créer un ?"
          value={answersSMN.wantSite.toString()} // Convertir le booléen en chaîne
          onChange={handleChange1}
          row
        >
          <FormControlLabel value="true" control={<Radio />} label="Oui" />
          <FormControlLabel value="false" control={<Radio />} label="Non" />
        </RadioGroup>
      </FormControl>
        <br/>
{answersSMN.wantSite === true && ( 
    
    <div>
    <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
    <FormLabel component="legend"> Nous pouvons nous en occuper pour vous ! Est-ce ça vous intéresse ? </FormLabel>
    <RadioGroup  className='color-circle'
      aria-label=" Nous pouvons nous en occuper pour vous ! Est-ce ça vous intéresse ? "
      name="  Nous pouvons nous en occuper pour vous ! Est-ce ça vous intéresse ? "
      value={answersSMN.wantOurService.toString()} // Convertir le booléen en chaîne
      onChange={handleChange2}
      row
    >
      <FormControlLabel value="true" control={<Radio />} label="Oui" />
      <FormControlLabel value="false" control={<Radio />} label="Non" />
    </RadioGroup>
  </FormControl>
  <br/>
</div>




    
    
    
    )}
{answersSMN.wantOurService === true &&( <QuizzWeb/>)}
        </div>
        )}
         <br/>
         <MultiSelector
          label="Sur quels réseaux sociaux votre public cible est-il le plus actif ?  "
          maxSelection = {3}
          options={optionsSecteursActivite(socialNetwork)}
          onChange={(e) => {const updated = [...answersSMN.hisSocialNetwork];
            if (updated.length < 4) {
                updated.push(e);
              updateAnswerSMN('hisSocialNetwork', updated);
            }
        }}
          value={[]}
        />
      
  <br/>
  <br/>
         <MultiSelector
          label="Quels types de contenu prévoyez-vous partager sur les réseaux sociaux ?  "
          maxSelection = {5}
          options={optionsSecteursActivite(typesContenuEntreprise)}
          onChange={(e) => {const updated = [...answersSMN.socialNetworkContenu];
            if (updated.length < 6) {
                updated.push(e);
              updateAnswerSMN('socialNetworkContenu', updated);
            }
        }}
          value={[]}
        />
  <br/>

  <Selector
        label=" Quelle fréquence de publication prévoyez-vous ? "
        options={optionsSecteursActivite(often)}
        onChange={(e) => updateAnswerSMN('oftenPublicationSocial', e.target.value)}
        value={answersSMN.oftenPublicationSocial}
      />
  
Amination pour indiquer/expliquer brièvement SEO 

<TextField
        label="Quels mots-clés sont importants pour votre activité ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerSMN('keyWords', e.target.value)}
      />
         <br/>
         <br/>
 
 <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Envisagez-vous d'utiliser Google Ads ou d'autres plateformes publicitaires en ligne  ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label="Envisagez-vous d'utiliser Google Ads ou d'autres plateformes publicitaires en ligne "
    name="Envisagez-vous d'utiliser Google Ads ou d'autres plateformes publicitaires en ligne "
    value={answersSMN.hasBudgetAds.toString()} // Convertir le booléen en chaîne
    onChange={handleChange3}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersSMN.hasBudgetAds === true && (
<div>       
<TextField
        label="Quel est votre budget alloué au marketing digital ?"
        style={{width : "50%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={5}
        margin="normal"
        onChange={(e) => updateAnswerSMN('budgetAds', e.target.value)}
      />
      <br/>
      <TextField
        label=" Comment prévoyez-vous répartir ce budget entre les différentes activités marketing ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerSMN('descriptionActionAds', e.target.value)}
      />
      </div>
      
      )}


<FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Envisagez-vous de créer un blog ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label="Envisagez-vous de créer un blog ? "
    name="Envisagez-vous de créer un blog ? "
    value={answersSMN.hasBlog.toString()} // Convertir le booléen en chaîne
    onChange={handleChange4}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
{answersSMN.hasBlog === true && (
<div>       
<TextField
        label="Quels sujets ou thèmes liés ou pas à votre activité seront abordés ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerSMN('subjectsBlog', e.target.value)}
      />
     

      <br/>

      <Selector
        label=" Quelle fréquence de publication prévoyez-vous ? "
        options={optionsSecteursActivite(often)}
        onChange={(e) => updateAnswerSMN('oftenPublicationBlog', e.target.value)}
        value={answersSMN.oftenPublicationBlog}
      />

<br/>
      <TextField
        label=" Comment prévoyez-vous d'utiliser le contenu pour attirer et retenir votre public ?"
        style={{width : "100%"}}
        id="outlined-textarea-flexible"
        multiline
        maxRows={15}
        margin="normal"
        onChange={(e) => updateAnswerSMN('descriptionActionBlog', e.target.value)}
      />
      </div>
      
      )}

      
<FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Envisagez-vous des campagnes d'e-mails pour promouvoir des offres spéciales ou informer vos clients ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label="Envisagez-vous des campagnes d'e-mails pour promouvoir des offres spéciales ou informer vos clients ? "
    name="Envisagez-vous des campagnes d'e-mails pour promouvoir des offres spéciales ou informer vos clients ? "
    value={answersSMN.hasMailMarketing.toString()} // Convertir le booléen en chaîne
    onChange={handleChange5}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>
<FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
  <FormLabel component="legend">Avez-vous une liste de diffusion, à nous partager pour vous faciliter les opérations E-mail marketing ?</FormLabel>
  <RadioGroup  className='color-circle'
    aria-label="Avez-vous une liste de diffusion, à nous partager pour vous faciliter les opérations E-mail marketing ?"
    name="Avez-vous une liste de diffusion, à nous partager pour vous faciliter les opérations E-mail marketing ? "
    value={answersSMN.hasListDiffusion.toString()} // Convertir le booléen en chaîne
    onChange={handleChange6}
    row
  >
    <FormControlLabel value="true" control={<Radio />} label="Oui" />
    <FormControlLabel value="false" control={<Radio />} label="Non" />
  </RadioGroup>
</FormControl>

<br/>

{answersSMN.hasListDiffusion === true && (
        <FileInput
          label=""
          onChange={(file) => updateAnswerSMN('listDiffusionFile', file)}
        />
      )}


<br/>
         <MultiSelector
          label="Quels indicateurs de performance jugez-vous importants pour mesurer le succès de votre stratégie marketing ?   "
          maxSelection = {5}
          options={optionsSecteursActivite(indicateursPerformanceMarketing)}
          onChange={(e) => {const updated = [...answersSMN.indicatorsKPI];
            if (updated.length < 6) {
                updated.push(e);
              updateAnswerSMN('indicatorsKPI', updated);
            }
        }}
          value={[]}
        />
  <br/>
<Selector
        label=" Quels sont vos délais pour voir des résultats significatifs de votre stratégie marketing ?"
        options={optionsSecteursActivite(waitResults)}
        onChange={(e) => updateAnswerSMN('attente', e.target.value)}
        value={answersSMN.attente}
      />


 
    <br/><br/>


  <Button variant="contained" color="primary" onClick={submitQuizz}>
        Soumettre
      </Button>
     
 
        </div>
    );
};

export default QuizzSMN;