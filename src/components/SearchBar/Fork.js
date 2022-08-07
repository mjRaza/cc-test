import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Loader from "../../controls/Loader";
import { getGistDetails } from "../../utils/api";
import { Avatar } from "@mui/material";
const Fork = ({ id }) => {
  const [openFork, setOpenFork] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [forks, setForks] = React.useState([]);
  const handleForkClick = async () => {
    if (!openFork) {
      setLoading(true);

      const res = await getGistDetails(id);
      if (res?.forks?.length) {
        setForks(res.forks.slice(-3));
      }
      setLoading(false);
    }
    setOpenFork(!openFork);
  };
  return (
    <>
      <List>
        <ListItemButton onClick={handleForkClick}>
          <ListItemText primary="Forks" />
          {openFork ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openFork} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <span>
              {!forks.length ? (
                <span style={{ marginLeft: "40px", color: "red" }}>
                  No forks for this gist
                </span>
              ) : (
                forks.map((fork,i) => (
                  <div key={i}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt={fork.user.login}
                        src={fork.user.avatar_url}
                      />
                      <span
                        style={{ marginLeft: "5px" }}
                        href={fork.html_url}
                        target="_blank"
                      >
                        {fork.user.login}
                      </span>
                    </span>
                  </div>
                ))
              )}
            </span>
          </List>
        </Collapse>
      </List>
      {loading && <Loader />}
    </>
  );
};

export default Fork;
