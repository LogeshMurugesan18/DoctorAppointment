import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VaccinesIcon from '@mui/icons-material/Vaccines';  
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {Link} from 'react-router-dom'
const drawerWidth = 240;

export default function Adminappdrawer() {
  return (
    <Box sx={{ display: 'flex',
  }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,background:'mediumpurple' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            DOC FINDER
          </Typography><div id='iconn'>
            < LocalHospitalIcon/></div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
           
              <Link to='/adminhome'>
              <ListItem key='Home' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    { <HomeIcon/>}
                  </ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <List>
            <Link to='/admindoc'>
              <ListItem key='Doctors' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    { <VaccinesIcon  />}
                  </ListItemIcon>
                  <ListItemText primary='Doctors'/>
                </ListItemButton>
              </ListItem> </Link>
          </List>
          <List>
            <Link to='/adminpatient'>
              <ListItem key='Patients' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<PersonOutlineIcon/> }
                  </ListItemIcon>
                  <ListItemText primary='Patient'/>
                </ListItemButton>
              </ListItem></Link>
          </List>
          <List>
            <Link to='/'>
              <ListItem key='Admin' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<SupportAgentIcon />}
                  </ListItemIcon>
                  <ListItemText primary='Admin' />
                </ListItemButton>
              </ListItem></Link>
          </List>
          <Divider />
          {/* <List><Link to='/profile'>
              <ListItem key='Profile' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary='Profile' />
                </ListItemButton>
              </ListItem></Link>
          </List>
          <List><Link to='/help'>
              <ListItem key= 'Help' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <HelpIcon />
                  </ListItemIcon>
                  <ListItemText primary= 'Help'/>
                </ListItemButton>
              </ListItem></Link>
          </List> */}
        </Box>
      </Drawer>
      <Box component="main">
        <Toolbar />
        <Typography paragraph>
          {/* <div id='ddd'>
         FIND YOUR DOCTOR</div> */}
        </Typography>
     
    
      </Box>
    </Box>
  );
}
