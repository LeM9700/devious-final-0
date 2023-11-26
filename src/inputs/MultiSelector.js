import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';


const MultiSelector = ({ label, options, onChange, value, maxSelection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [adaptability, setAdaptability] = useState([]);
  
    const handleMenuOpen = () => {
      setIsMenuOpen(true);
    };
  
    const handleMenuClose = () => {
      setIsMenuOpen(false);
    };
  
    const handleChange = (event) => {
      const selectedValues = event.target.value;
      const updated = [...adaptability];
  
      // Filtrer les valeurs déjà sélectionnées
      const filteredValues = selectedValues.filter((val) => !updated.includes(val));
  
      if (updated.length + filteredValues.length <= maxSelection) {
        setAdaptability([...updated, ...filteredValues]);
      }
  
      if (onChange) {
        onChange([...updated, ...filteredValues]);
      }
    };
  
    const handleRemoveChip = (chipValue) => {
      const updated = adaptability.filter((val) => val !== chipValue);
      setAdaptability(updated);
      if (onChange) {
        onChange(updated);
      }
    };
  
    return (
      <div>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="custom-multi-selector-label">{label}</InputLabel>
          <Select
            labelId="custom-multi-selector-label"
            id="custom-multi-selector"
            multiple
            value={adaptability}
            onChange={handleChange}
            label={label}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onOpen={handleMenuOpen}
          >
            {options
              .filter((option) => !adaptability.includes(option.value))
              .map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 8 }}>
          {adaptability.map((val) => (
            <Chip
              key={val}
              label={val}
              style={{ margin: 2 }}
              onDelete={() => handleRemoveChip(val)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default MultiSelector;
  