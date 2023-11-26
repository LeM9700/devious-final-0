import React, { Component, useState } from 'react';
import ClientSpace from './ClientSpace';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import '../sass/Login.scss'

const Login = (prop) => {
 

  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [connect ,setConnect] = useState("")
  const [isConnect, setIsConnect] = useState(prop)
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



 const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Vous pouvez implémenter ici la logique de connexion
    
    console.log(connect);

    // Exemple de validation simple (à personnaliser selon vos besoins)
    if (email === 'votre@email.com' && password === 'votreMotDePasse') {
      alert('Connexion réussie !'); // Affichez un message ou redirigez l'utilisateur
      setConnect(true)
      setIsConnect(true)  
     
      console.log(isConnect);
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  

    return (
<div>
        {connect? (<ClientSpace/>) : (<div className="login-container">
        <h2>Connexion</h2>
        <form>
          <div className="form-group">
            
            <TextField
          required
          id="outlined-required"
          label="E-mail"
          defaultValue=""
          onChange={(e) =>{setEmail(e.target.value)}}
        />
          </div>
          <div className="form-group">
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            onChange={(e) =>{setPassword(e.target.value)}}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </div>
          <Button type='submit'variant="contained" onClick = {handleLogin} endIcon={<SendIcon />}>
        Connexion
      </Button>
        </form>
      </div>)}
      </div>

      
    );
  
}

export default Login;
