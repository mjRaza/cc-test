import React from "react";
import { useSnackbar } from "notistack";

const useAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (msg, type) => {
    enqueueSnackbar(msg, { variant: type });
  };
};

export default useAlert;
