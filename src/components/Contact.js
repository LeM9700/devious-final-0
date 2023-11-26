import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import '../sass/Contact.scss'
import ColorPicker from '../inputs/ColorPicker';
import Selector from '../inputs/Selector';



const Contact = () => {

    const [nomComplet, setNomComplet] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const handleSend = () =>{
    
        const demandeComplexe = { nomComplet,mail,message}
        console.log(demandeComplexe);
    }

    

    return (
        <div className="contact-page">
        <div className="contact-section">
          <h1> Contactez-nous pour une Solution Web Complexe</h1>
          <p>
            Vous cherchez à développer une Solution Web Complex pour votre entreprise ? Nous sommes là pour vous aider ! Veuillez nous contacter pour discuter de vos besoins, de vos idées et de votre vision. Notre équipe d'experts est prête à transformer votre vision en réalité numérique.
          </p>
        </div>
        <div className="contact-section">
          <h1> Moyens de Contact</h1>
          <div className="contact-info">
            <p>Site Web : <a href="https://www.deviousdev.com" rel="noopener">www.deviousdev.com</a></p>
            <p>Téléphone : +33 12 45 79 22</p>
            <p>Email : <a href="mailto:contact@deviousdev.com" rel="noopener">contact@deviousdev.com</a></p>
          </div>
        </div>
        <div className="contact-section">
          <h1>Formulaire de Contact</h1>
          <form className="contact-form">
            <div className="input-group">
           
              <TextField
          required
          id="outlined-required"
          label="Nom Complet"
          defaultValue=""
          onChange={(e) =>{setNomComplet(e.target.value)}}
        />
            </div>
            <div className="input-group">
            
            <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          onChange={(e) =>{setMail(e.target.value)}}
        />
            </div>
            <div className="input-group">
            <TextField
          required
          id="outlined-textarea-flexible"
          multiline
          maxRows={20}
          label="Demande web complexe"
          defaultValue=""
          onChange={(e) =>{setMessage(e.target.value)}}
          helperText="N'hésitez pas à organiser votre demande et d'entrer dans les détails"
          
        />
            </div>
            <br/>
            <ColorPicker/>
            <br/>
           

            <br/>
           <Fab variant="extended" onClick={handleSend} color="primary">
            <ForwardToInboxIcon sx={{ mr: 1 }} />
                Envoyer
                </Fab>
          </form>
        </div>
      </div>
    );
};

export default Contact;