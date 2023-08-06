import React from "react";
import { Typography, Button, Box, Grid, Container } from "@mui/material";
import imageSection1 from "../media/images/image_section_1.png";
import FullHeightSection from './reusable_components/FullHeightSection';


function PresentationSection() {


  return (
    <Box id="presentationsection" sx={{ bgcolor: "tertiary.main" }}>
      <FullHeightSection>
        <Container maxWidth="lg">
        <Grid container>
            <Grid item xs={12} md={8}>
              <Box sx={{ height: { xs: 200, md: "auto" } }}>
                <img src={imageSection1} alt="Section" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={4} bgcolor='tertiary.main' display="flex" flexDirection="column" justifyContent="center">
                <Typography color={"primary"} variant="h3" gutterBottom>
                                Our project
                </Typography>
                <Box pt={6}>
                <Typography color={"primary"} variant="body1" gutterBottom>
                                Our goal is to build a facility of upmost quality, keeping in mind both recreational and competitive players. It will feature a beach-like environment with professional-grade sand courts, just like those used in international tournaments.
                </Typography>
                <Box display="inline-block">
                  <Button variant="contained" color="primary"  onClick={() => {
                  const section = document.getElementById("membershipsection");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}>               
                  Become a member
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
