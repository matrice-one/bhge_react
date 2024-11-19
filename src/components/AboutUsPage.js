import FullHeightSection from "./reusable_components/FullHeightSection";
import React from "react";
import { Box, Typography, useTheme, useMediaQuery, Container, Grid, Button} from "@mui/material";
import { useTranslation } from "react-i18next";
import SamplePDF from '../media/documents/statut_club_bhge.pdf'; // Import your PDF file


const AboutUsPage = () => {
  const { t } = useTranslation();
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
            <Typography color={"tertiary.main"} variant={variant} align="left" paddingBottom={2}>
              {t("AboutUsSection.aboutUs")}
              <br></br><br></br>
            </Typography>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <Typography color={"primary"} variant={'body1'} align="justify">
                  {t("AboutUsSection.introduction")}
                  <br></br><br></br>
                  {t("AboutUsSection.projectAim")}
                  <br></br><br></br>
                  <Button variant="contained" color="tertiary" href={SamplePDF} download>
                    Télécharger nos status
                  </Button>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography color={"primary"} variant={'body1'} align="justify">
                {t("AboutUsSection.projectDescription")}
                  <ul dangerouslySetInnerHTML={{ __html: t("AboutUsSection.projectGuidance") }}></ul>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color={"primary"} variant={'body1'} align="justify">
                  <br></br><br></br>
                  {t("AboutUsSection.projectCreation")}
                  <br></br><br></br>
                  {t("AboutUsSection.joinUs")}
                  <br></br><br></br>
                  <br></br><br></br>
                  {t("AboutUsSection.teamMembers")}
                </Typography>
              </Grid>
            </Grid>
          </FullHeightSection>
        </Container>
      </Box>
    </div>
  );
}

export default AboutUsPage;