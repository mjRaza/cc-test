import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
