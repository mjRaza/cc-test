import React, { useState } from 'react';

import { InputAdornment,TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from '../../../utils/debounce';

const DebounceField = ({ value: outerValue, onUpdate }) => {
  const [fieldValue, setFieldValue] = useState(outerValue);

  const handleChange = ({ target: { value } }) => {
    setFieldValue(value);
    debounce(() => {
      onUpdate(value);
    }, 1000);
  };

  return (
    <TextField
      value={fieldValue ?? outerValue}
      size="small"
      variant="outlined"
      onChange={handleChange}
      placeholder="Search..."
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DebounceField;
