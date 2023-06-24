// Header.js
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../media/images/logo.png';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      <ListItem button >
        <ListItemText primary="Menu Item 1" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Menu Item 2" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Menu Item 3" />
      </ListItem>
    </List>
  );

  return (
    <AppBar elevation={0} style={{ backgroundColor: 'transparent' }}>
      <Toolbar>
        <Typography color={'primary'} variant="h5" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="logo" style={{ height: '60px',}} /> {/* adjust the height as needed */}
          BEACH VOLLEY HALLES GENEVA
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box display="flex" gap={8}>
            <Button color="primary"><Typography color={'primary'} variant="h5" sx={{ flexGrow: 1 }}> The project </Typography></Button>
            <Button color="primary"><Typography color={'primary'} variant="h5" sx={{ flexGrow: 1 }}> News and events </Typography></Button>
            <Button color="primary"><Typography color={'primary'} variant="h5" sx={{ flexGrow: 1 }}> Become a member </Typography></Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
