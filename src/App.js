import React, { useState } from 'react';
import { Button, Switch, Paper, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import Prices from './components/Prices';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import QuizzPage from './components/QuizzPage';
import ClientSpace from './components/ClientSpace';
import QuizzIDV from './elementsQuizz/QuizzIDV';
import RedirectionQuizz from './pagesTransition/RedirectionQuizz';
import QuizzSMN from './elementsQuizz/QuizzSMN';
import QuizzWeb from './elementsQuizz/QuizzWEB';
import QuizzLCVF from './elementsQuizz/QuizzLCVF';
import ReactFullpage from '@fullpage/react-fullpage';
import QuizzPage1 from './components/QuizzPage1';
import QuizzPage2 from './components/QuizzPage2';



function App() {
  const [isConnect, setIsConnect] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isQuizz,setIsQuizz] = useState(false)

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const theme = createTheme({
    palette: {
      mode: isLightMode ? 'light' : 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${isLightMode ? 'light-mode' : ''}`}>
        <Router>
          <NavBar prop={isConnect} />
          <Container component="main" maxWidth="xl">
            <Paper elevation={4}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accueil" element={<Home />} />
                <Route path="/nos-produits" element={<Products />} />
                <Route path="/nos-tarifs" element={<Prices />} />
                <Route path="/à-propos" element={<About />} />
                <Route path="/contactez-nous" element={<Contact />} />
                <Route path="/se-connecter" element={<Login />} />
                <Route path="/tableau-de-bord" element={<ClientSpace />} />
                <Route path="/transition-quizz" element={<RedirectionQuizz/>} />
                <Route path="/quizz-pack-identite-visuelle" element={<QuizzPage />} />
                <Route path="/quizz-pack-web-starter" element={<QuizzPage1 />} />
                <Route path="/quizz-la-complete" element={<QuizzPage2 />} />
                <Route path="/quizz/logo-cv-flyer" element={<QuizzLCVF/>}/>
                <Route path="/quizz/strategie-marketing-numerique" element={<QuizzSMN />} />
                <Route path="/quizz/solution-web" element={<QuizzWeb />} />
                <Route path="/quizz/identite-visuelle" element={<QuizzIDV />} />
                
              </Routes>
            </Paper>
          </Container>
        </Router>


        <div className="toggle-button-container">
          <Switch
            checked={isLightMode}
            onChange={toggleMode}
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
        </div>

      
      </div>
    </ThemeProvider>
  );
}

export default App;

