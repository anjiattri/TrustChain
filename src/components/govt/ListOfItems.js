import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from "react-router-dom";

export default function ListItems(props){
    function logout(e) {
        e.preventDefault()
        props.handleLogout()
    }
    
    return (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <Link to="/volunteers">
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Volunterrs" />
    </ListItemButton>
    </Link>
    <ListItemButton onClick={(e)=> logout(e)}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="LogOut" />
    </ListItemButton>
  </React.Fragment>
);
    }
