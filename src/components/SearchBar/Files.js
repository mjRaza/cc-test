import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { List } from "@mui/material";

const Files = ({ files }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Files" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.values(files)?.length ? (
            Object.values(files).map((file, index) => {
              return (
                <div key={index}>
                  <a href={file.raw_url} target="_blank">
                    {file.filename}
                  </a>
                </div>
              );
            })
          ) : (
            <>No file available.</>
          )}
        </List>
      </Collapse>
    </List>
  );
};

export default Files;
