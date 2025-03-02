// Header.js
import * as React from "react";
import {Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../media/images/logo_blue.svg";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";

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

// eslint-disable-next-line react/prop-types
export default function Header({}) {
  const { t } = useTranslation();
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
      <ListItemText primary={t("Header.project")} />
    </ListItem>
    <ListItem button onClick={() => {scrollTo("membershipsection"); handleDrawerToggle();}}>
      <ListItemText primary={t("Header.becomeAMember")}/>
    </ListItem>
    <ListItem button onClick={() => {scrollTo("aboutussection"); handleDrawerToggle();}}>
      <ListItemText primary={t("Header.aboutUs")} />
    </ListItem>
    <ListItem button onClick={() => {scrollTo("contactussection"); handleDrawerToggle();}}>
      <ListItemText primary={t("Header.contactUs")}/>
    </ListItem>
    <ListItem button onClick={() => {scrollTo("contactussection"); handleDrawerToggle();}}>
      <ListItemText primary={t("Header.school")}/>
    </ListItem>

  </List>
  );

  return (
    <Container >
      <Toolbar disableGutters sx={{ justifyContent: 'start' }}> {/* disableGutters is the key to removing padding */}
          <Typography  style={{ marginTop: '1em' }} color="quaternary.main" variant="h5" sx={{ flexGrow: 1, margin: 0}}>
          <img src={Logo} alt="logo" style={{ height: "50px",}} /> 
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
            <Box display="flex" gap={3}>
              <Button onClick={() => scrollTo("presentationsection")} smooth={true} color="primary"><Typography color={"primary"} variant="h6" sx={{ flexGrow: 1 }}> {t("Header.project")} </Typography></Button>
              <Button onClick={() => scrollTo("membershipsection")} color="primary"><Typography color={"primary"} variant="h6" sx={{ flexGrow: 1 }}>{t("Header.becomeAMember")} </Typography></Button>
              <Button onClick={() => scrollTo("aboutussection")} color="primary"><Typography color={"primary"} variant="h6" sx={{ flexGrow: 1 }}>{t("Header.aboutUs")}</Typography></Button>
              <Button onClick={() => scrollTo("contactussection")} color="primary"><Typography color={"primary"} variant="h6" sx={{ flexGrow: 1 }}> {t("Header.contactUs")} </Typography></Button>
              <Button sx={{ backgroundColor: "tertiary.main" }}  onClick={() => window.open("https://your-link-here.com", "_blank")} color="secondary"><Typography color={"primary"} variant="h6" sx={{ flexGrow: 1 }}> {t("Header.school")} </Typography></Button>

            </Box>
          )}
        </Toolbar>
      {/* // </AppBar> */}
   </Container>
  
  );
}
