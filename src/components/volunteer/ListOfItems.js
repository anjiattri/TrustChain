import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";

// Define a CSS class to remove text decoration (underline)
const noUnderlineLink = {
  textDecoration: "none",
};

export default function ListItems(props) {
  function logout(e) {
    e.preventDefault();
    props.handleLogout();
  }

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Link to="/available" style={noUnderlineLink}>
          <ListItemText primary="Available Programs" />
        </Link>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Link to="/existing" style={noUnderlineLink}>
          <ListItemText primary="Existing Programs" />
        </Link>
      </ListItemButton>
      <ListItemButton onClick={(e) => logout(e)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <Link to="/" style={noUnderlineLink}>
          <ListItemText primary="Logout" />
        </Link>
      </ListItemButton>
    </React.Fragment>
  );
}
