import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneIcon from '@mui/icons-material/Phone';

const PhoneNumberInput = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <TextField
      label="Phone Number"
      value={value}
      onChange={handleInputChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PhoneIcon />
          </InputAdornment>
        ),
        inputMode: 'numeric',
        pattern: '[0-9]*',
      }}
      fullWidth
    />
  );
};

export default PhoneNumberInput;
