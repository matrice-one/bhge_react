import FullHeightSection from "./reusable_components/FullHeightSection"
import React from "react"
import { Box, Typography, useTheme,useMediaQuery, Container } from "@mui/material"
const HomePage = () => {
    const theme = useTheme();
    const matchesSmUp = useMediaQuery(theme.breakpoints.up("sm"));
    const matchesMdUp = useMediaQuery(theme.breakpoints.up("md"));
  
    let variant;
    if (matchesMdUp) {
      variant = "h2";
    } else if (matchesSmUp) {
      variant = "h3";
    } else {
      variant = "h4";
    }

    return (
      <div id="aboutussection">
        <Box p={4} bgcolor={"tertiary.main"}>
            <Container maxWidth="lg">
                <FullHeightSection bgcolor={"tertiary.main"}>  
                    <Typography color={"primary"} variant={variant} align="left">
                        About Us
                    </Typography>
                    <Typography color={"primary"} variant={'body1'} align="justify">
                        We are delighted to introduce you to the Geneva Beach Halles Association, an ambitious and innovative project created with the aim of promoting and developing various sand sports, particularly beach volleyball, beach soccer, and beach tennis, as well as sand fitness training for all athletes, in the canton of Greater Geneva and in French-speaking Switzerland.
                        <br></br><br></br>
                        Geneva Beach Halles was born from the initiative of a group of enthusiasts who, after years of trials and requests, decided to join forces to create an indoor sports center dedicated to these sports. The association aims to find a suitable location, whether in public spaces with the support of local authorities or in private spaces in industrial areas, to provide quality, sustainable, and year-round accessible infrastructure for players and athletes of all levels.
                        <br></br><br></br>
                        The project is guided by the slogan  &quot;By beachers - for beachers &quot;, emphasizing the passion and enthusiasm of practitioners and fans of these sports. The lack of appropriate facilities in the Geneva region and throughout the Lake Geneva arc has led an increasing number of players to rally to this cause, strongly supporting the realization of the sports center.
                        <br></br><br></br>
                        Geneva Beach Halles aims to be the reference for players and enthusiasts of beach volleyball, beach soccer, and beach tennis, offering quality, sustainable, and self-sufficient infrastructure as well as an academy dedicated to training new generations of local talent. Thanks to collaboration with cantonal associations, sports federations, and private supporters, the project is set to grow and become a symbol of excellence in French-speaking Switzerland and the Greater Geneva territory.
                        <br></br><br></br>
                        The creation of Geneva Beach Halles will bring significant benefits to the sports community and this region, increasing the number of practitioners, the quality of players, and attracting sports tourism. Moreover, the sports center will be able to host national and international level competitions, making Geneva a global reference for these sports.
                        <br></br><br></br>
                        In addition, the association aims to promote sand fitness training for all athletes, offering a unique and beneficial experience for physical fitness and health.
                        <br></br><br></br>
                        Join us and support the Geneva Beach Halles Association, contributing to creating a bright and dynamic future for beach volleyball, beach soccer, beach tennis, and sand fitness training in the Greater Geneva region and in French-speaking Switzerland! So, shall we  &quot;hit the sand &quot;?
                        <br></br><br></br>
                        <br></br><br></br>
                        Amandine, Adrien, Bryan, Carlotta, Dario, Ilaria, Neigeline, Vittorio 
                    </Typography>
                </FullHeightSection>
        </Container> 
        </Box>
        
      </div>
    )
}

export default HomePage 
