import { Button as MuiButton } from "@mui/material";
import React from "react";
import { colors } from "../theme/colors";

const Button = ({ label, onClick }) => {
  return (
    <MuiButton onClick={onClick} variant="contained" style={{background:colors.primary}}>
      {label}
    </MuiButton>
  );
};

export default Button;
