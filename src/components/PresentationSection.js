import React from "react";
import { Typography, Button, Box, Grid, Container } from "@mui/material";
import imageMidjourney from "../media/images/beach_halle_midjourney.png";
import FullHeightSection from './reusable_components/FullHeightSection';
import { useTranslation } from 'react-i18next';

function PresentationSection() {
  const { t } = useTranslation();

  return (
    <Box id="presentationsection" sx={{ bgcolor: "secondary.main" }}>
      <FullHeightSection>
      <Typography color={"primary"} variant="h2" gutterBottom>
                  {t("PresentationSection.ourProject")}
                </Typography>
        <Container maxWidth="lg">
        <Grid container>
            <Grid item xs={12} md={8} lg={4}>
              <Box sx={{ height: { xs: 200, md: "auto" } }}>
                <img src={imageMidjourney} alt="Section" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={8}>
              <Box p={4} bgcolor='secondary.main' display="flex" flexDirection="column" justifyContent="center">
                
                <Box pt={6}>
                <Typography color={"primary"} variant="body1" align="justify" gutterBottom>
                  {t("PresentationSection.projectDescription")}
                </Typography>
                <Box display="inline-block">
                  <Button sx={{ borderRadius: "16px" }} variant="contained" color="tertiary"  onClick={() => {
                  const section = document.getElementById("membershipsection");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}>               
                  {t("PresentationSection.becomeAMember")}
                  </Button>
                </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FullHeightSection>
    </Box>
  );
}

export default PresentationSection;
