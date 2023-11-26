import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const YesNoSelector = ({ label, onChange, value }) => {
  const handleChange = (event) => {
    if (event.target) {
      onChange(event.target.value === true);
    }
  };

  return (
    <FormControl component="fieldset" fullWidth variant="outlined" margin="normal">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
        value={value ? true : false}
        onChange={handleChange}
        row
      >
        <FormControlLabel value= {true} control={<Radio />} label="Oui" />
        <FormControlLabel value={false} control={<Radio />} label="Non" />
      </RadioGroup>
    </FormControl>
  );
};

export default YesNoSelector;
