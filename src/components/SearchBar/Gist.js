import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Fork from "./Fork";

const Gist = ({ gist }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  if (gist)
    return (
      <List
        style={{ padding: "7px", background: " #f7f7f9", borderRadius: "22px" ,marginBottom:'5px'}}
      >
        <>
          <>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Files" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.values(gist?.files)?.length ? (
                  Object.values(gist?.files).map((file, index) => {
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
          </>
          <Fork id={gist?.id} />
        </>
      </List>
    );
};

export default Gist;
