// Header.js
import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../media/images/logo.png";
import { animateScroll as scroll } from "react-scroll";

function useSmoothScroll() {
  return function (to) {
    const element = document.getElementById(to);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      scroll.scrollTo(top, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    }
  };
}

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const scrollTo = useSmoothScroll();

  const drawer = (
    <List>
    <ListItem button onClick={() => {scrollTo("presentationsection"); handleDrawerToggle();}}>
      <ListItemText primary="The project" />
    </ListItem>
    <ListItem button onClick={() => {scrollTo("membershipsection"); handleDrawerToggle();}}>
      <ListItemText primary="Become a member" />
    </ListItem>
    <ListItem button onClick={() => {scrollTo("contactsection"); handleDrawerToggle();}}>
      <ListItemText primary="Contact us" />
    </ListItem>
  </List>
  );

  return (
    <AppBar position="static" elevation={0} style={{ backgroundColor: "transparent" }}>
      <Toolbar>
        <Typography color={"primary"} variant="h5" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="logo" style={{ height: "60px",}} /> {/* adjust the height as needed */}
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
            <Button onClick={() => scrollTo("presentationsection")} smooth={true} color="primary"><Typography color={"primary"} variant="h5" sx={{ flexGrow: 1 }}> The project </Typography></Button>
            <Button onClick={() => scrollTo("membershipsection")} color="primary"><Typography color={"primary"} variant="h5" sx={{ flexGrow: 1 }}> Become a member </Typography></Button>
            <Button onClick={() => scrollTo("contactsection")} color="primary"><Typography color={"primary"} variant="h5" sx={{ flexGrow: 1 }}> Contact us </Typography></Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
