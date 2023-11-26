import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';

const MultiSelector1 = ({ label, options, onChange, value, maxSelection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [infoPrincipal, setInfoPrincipal] = useState([]);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleRemoveChip = (chipValue) => {
    const updated = infoPrincipal.filter((val) => val !== chipValue);
    setInfoPrincipal(updated);
    if (onChange) {
      onChange(updated);
    }
  };

  const handleChange = (event) => {
    const selectedValues = event.target.value;
    const updated = [...infoPrincipal];

    if (updated.length < maxSelection) {
      updated.push(selectedValues);
      setInfoPrincipal(updated);
      if (onChange) {
        onChange(updated);
      }
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
            value={infoPrincipal}
            onChange={handleChange}
            label={label}
            open={isMenuOpen}
            onClose={handleMenuClose}
            onOpen={handleMenuOpen}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 8 }}>
          {infoPrincipal.map((val) => (
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

export default MultiSelector1;
