import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link,Outlet} from 'react-router-dom'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
const drawerWidth = 140;
const navItems = ['Home', 'About', 'Contact', 'Login'];


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"  sx={{ backgroundColor: 'mediumpurple'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           DOC FINDER  <div id='icon'><HealthAndSafetyIcon/></div>
          </Typography>
          {/* <Link to='/home' className='a'>Home</Link> */}
      <Link to='/loginas' className='a'>Login</Link>
     <a href='#last'>About</a>
      <Outlet />
          {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white' }}>
                {item}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </AppBar>
      <nav> 
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography><div id='bbb'>
        <h1>Find your Doctor </h1>
        </div><div id='bba'>
        <h1> one step easier</h1>

        </div>
        <div id='ab'>We are providing an advanced ecosystem,<br></br> to provide an easy access to several doctors across the country....</div>
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;


