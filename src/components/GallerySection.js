import { Box, Grid, Typography, Container } from "@mui/material";
import quentin_metral_1 from "../media/images/quentin_metral_1.jpg";
import quentin_metral_2 from "../media/images/quentin_metral_2.jpg";

import FullHeightSection from "./reusable_components/FullHeightSection";

function GallerySection() {
  return (
    <Box p={4} bgcolor={"quaternary.main"}>
      <Container maxWidth="lg">
        <FullHeightSection bgcolor={"quaternary.main"}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                alignItems="left"
              >
                <img
                  src={quentin_metral_1}
                  alt="Quentin Metral action shot 1"
                  style={{
                    maxWidth: "80%", // Adjust width
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <img
                  src={quentin_metral_2}
                  alt="Quentin Metral action shot 2"
                  style={{
                    maxWidth: "80%", // Adjust width
                    height: "40%",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" color={"tertiary.main"} gutterBottom>
                Nos champions soutiennent le projet
              </Typography>
              <Box textAlign="left">
                <Typography variant="h5" color={"secondary.main"} gutterBottom>
                  &quot;Tous derrière le projet de BHGE!&quot;
                </Typography>
                <br></br>

                <Typography variant="body1" color="text.primary">
                  &quot;Une halle de beach à Genève permettrait de développer
                  non-seulement la relève du beach-volley de compétition mais
                  stimuler également l’activité physique pour tous, tout au long
                  de l’année. Soutenez ce projet ambitieux qui promet un impact
                  positif sur la communauté sportive locale!&quot;
                </Typography>
                <br></br>
                <Typography
                  variant="body1"
                  color={"secondary.main"}
                  fontWeight={"bold"}
                >
                  - Quentin Metral, joueur de beach-volley professionnel
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </FullHeightSection>
      </Container>
    </Box>
  );
}

export default GallerySection;
