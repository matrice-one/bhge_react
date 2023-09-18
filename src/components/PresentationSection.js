import React from "react";
import { Typography, Button, Box, Grid, Container } from "@mui/material";
import imageMidjourney from "../media/images/beach_halle_midjourney.png";
import FullHeightSection from './reusable_components/FullHeightSection';
import { useTranslation } from 'react-i18next';

function PresentationSection() {
  const { t } = useTranslation();

  return (
    <Box id="presentationsection" sx={{ bgcolor: "tertiary.main" }}>
      <FullHeightSection>
        <Container maxWidth="lg">
        <Grid container>
            <Grid item xs={12} md={8}>
              <Box sx={{ height: { xs: 200, md: "auto" } }}>
                <img src={imageMidjourney} alt="Section" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={4} bgcolor='tertiary.main' display="flex" flexDirection="column" justifyContent="center">
                <Typography color={"primary"} variant="h3" gutterBottom>
                  {t("PresentationSection.ourProject")}
                </Typography>
                <Box pt={6}>
                <Typography color={"primary"} variant="body1" align="justify" gutterBottom>
                  {t("PresentationSection.projectDescription")}
                </Typography>
                <Box display="inline-block">
                  <Button variant="contained" color="primary"  onClick={() => {
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
