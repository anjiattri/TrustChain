import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";

export default function ListItems(props) {
  function logout(e) {
    e.preventDefault();
    props.handleLogout();
  }
  const noUnderlineLink = {
    textDecoration: "none",
  };

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Link to="/government" style={noUnderlineLink}>
          <ListItemText primary="Volunteers" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link to="/program" style={noUnderlineLink}>
          <ListItemText primary="Create Program" />
        </Link>
      </ListItemButton>
      <ListItemButton onClick={(e) => logout(e)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <Link to="/" style={noUnderlineLink}>
          <ListItemText primary="Logout" />
        </Link>{" "}
      </ListItemButton>
    </React.Fragment>
  );
}
