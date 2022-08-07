import React from "react";
import List from "@mui/material/List";
import Fork from "./Fork";
import Files from "./Files";
import "./index.css"
const Gist = ({ gist }) => {
  if (gist)
    return (
      <List
       className="gistBox"
      >
        <Files files={gist?.files} />

        <Fork id={gist?.id} />
      </List>
    );
};

export default Gist;
