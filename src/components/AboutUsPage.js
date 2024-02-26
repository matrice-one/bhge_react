import FullHeightSection from "./reusable_components/FullHeightSection"
import React from "react"
import { Box, Typography, useTheme,useMediaQuery, Container } from "@mui/material"
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {t} = useTranslation();
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
        <Box p={4} bgcolor={"secondary.main"}>
            <Container maxWidth="lg">
                <FullHeightSection bgcolor={"secondary.main"}>  
                    <Typography color={"primary"} variant={variant} align="left" paddingBottom={2}>
                        {t("AboutUsSection.aboutUs")}
                    </Typography>
                    <Typography color={"primary"} variant={'body1'} align="justify">
                    {t("AboutUsSection.introduction")}
                        <br></br><br></br>
                        {t("AboutUsSection.projectDescription")} 
                        <br></br><br></br>
                        {t("AboutUsSection.projectGuidance")}
                        <br></br><br></br>
                        {t("AboutUsSection.projectAim")}
                        <br></br><br></br>
                        {t("AboutUsSection.projectCreation")}
                        <br></br><br></br>
                        {t("AboutUsSection.joinUs")}
                        <br></br><br></br>
                        <br></br><br></br>
                        {t("AboutUsSection.teamMembers")}
                    </Typography>
                </FullHeightSection>
        </Container> 
        </Box>
        
      </div>
    )
}

export default HomePage 
