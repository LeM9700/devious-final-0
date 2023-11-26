import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileInput = ({ label, onChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel htmlFor="file-input">{label}</InputLabel>
      <Input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        fullWidth
        style={{ display: 'none' }} // Hide the default file input
      />
      <label htmlFor="file-input">
        <IconButton component="span">
          <CloudUploadIcon />
        </IconButton>
        <span style={{ marginLeft: 8 }}>Télécharger un fichier</span>
      </label>
    </FormControl>
  );
};

export default FileInput;
