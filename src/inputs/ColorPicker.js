import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import "../sass/ColorPicker.scss"


const ColorPicker = ({ label, initialValue = ['#ff0000'], onChange }) => {
  const initialColors = Array.isArray(initialValue) ? initialValue : ['#ff0000'];

  const [selectedColor, setSelectedColor] = useState(initialColors);

  const handleColorChange = (index, color) => {
    const updatedColors = [...selectedColor];
    updatedColors[index] = color;
    setSelectedColor(updatedColors);
    if (onChange) {
      onChange(updatedColors);
    }
  };

  const addColor = () => {
    if (selectedColor.length < 3) {
      setSelectedColor([...selectedColor, '#ffffff']);
    }
  };

  const removeColor = (index) => {
    const updatedColors = [...selectedColor];
    updatedColors.splice(index, 1);
    setSelectedColor(updatedColors);
    if (onChange) {
      onChange(updatedColors);
    }
  };

  return (
    <div>
      <label>{label}</label>
      {selectedColor.map((color, index) => (
        <div className="color-circle" key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <TextField
            type="color"
            value={color}
            onChange={(event) => handleColorChange(index, event.target.value)}
            style={{ marginRight: 8 }}
          />
          <div
            className="color-circle"  // Ajout de la classe pour centrer
            style={{
              width: 20,
              height: 20,
              backgroundColor: color,
              marginRight: 8,
              border: '1px solid #ccc',
              borderRadius: 4,
            }}
          ></div>
          {selectedColor.length > 1 && (
            <IconButton onClick={() => removeColor(index)}>
              <DeleteIcon />
            </IconButton>
          )}
        </div>
      ))}
      {selectedColor.length < 3 && (
        <button type="button" onClick={addColor}>
          Ajouter une couleur
        </button>
      )}
    </div>
  );
};

export default ColorPicker;
