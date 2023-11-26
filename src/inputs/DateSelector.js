import React from 'react';
import TextField from '@mui/material/TextField';

const DateSelector = ({ label, onChange, value }) => {
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    if (onChange) {
      onChange(selectedDate);
    }
  };

  return (
    <TextField
      id="date-selector"
      label={label}
      type="date"
      value={value}
      onChange={handleDateChange}
      fullWidth
      variant="outlined"
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DateSelector;
