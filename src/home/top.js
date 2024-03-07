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
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HelpIcon from '@mui/icons-material/Help';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {Link} from 'react-router-dom'
const drawerWidth = 240;

export default function ClippedDrawer() {
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
           
              <Link to='/home'>
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
            <Link to='/appointment'>
              <ListItem key='Appointment' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    { <BookOnlineIcon  />}
                  </ListItemIcon>
                  <ListItemText primary='Appointment'/>
                </ListItemButton>
              </ListItem> </Link>
          </List>
          <List>
            <Link to='/feedback'>
              <ListItem key='Feedback' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<FeedbackIcon/> }
                  </ListItemIcon>
                  <ListItemText primary='Feedback'/>
                </ListItemButton>
              </ListItem></Link>
          </List>
          <List>
            <Link to='/aboutus'>
              <ListItem key='AboutUS' disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {<InfoIcon />}
                  </ListItemIcon>
                  <ListItemText primary='AboutUS' />
                </ListItemButton>
              </ListItem></Link>
          </List>
          <Divider />
          <List><Link to='/profile'>
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
          </List>
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
