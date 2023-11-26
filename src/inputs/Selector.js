import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Selector = ({ label, options, onChange, value })  => {
  

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
    <InputLabel id="custom-selector-label">{label}</InputLabel>
    <Select
      labelId="custom-selector-label"
      id="custom-selector"
      value={value}
      onChange={onChange}
      label={label}
    >
      <MenuItem value="">{`Sélectionnez ${label.toLowerCase()}`}</MenuItem>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  );
};

export default Selector;
