import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup({
  keys,
  id,
  options,
  label,
  required,
  error,
  onChange
}) {
  return (
    
    <FormControl style={{width:'100%',marginTop:'10px'}}>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={id}
        onChange={(e) => onChange(keys, e)}
      >
        {options.map((opt) => (
          <FormControlLabel
            value={opt.key}
            key={opt.id}
            control={<Radio />}
            label={opt.label}
          />
        ))}
      </RadioGroup>
     {error && <h6 style={{color:'red',margin:'0px'}}>{error}</h6>}
    </FormControl>
  );
}
