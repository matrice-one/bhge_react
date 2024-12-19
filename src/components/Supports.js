import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import FullHeightSection from "./reusable_components/FullHeightSection";
// Import logos
import geneva_canton_logo from "../media/logos/geneva_canton.png";
import svrg_logo from "../media/logos/swiss_volley_region_geneve.png";
import franchise_beach_volley_logo from "../media/logos/franchise.png";
import vbc_etoile_geneve_logo from "../media/logos/VBC_Etoile_Geneve.jpeg";
import peps_beach_volley_logo from "../media/logos/PEPS_HQ.png";
import volley_geneve_sud_geneve_logo from "../media/logos/volley_jeunesse_geneve_sud.png";
import snvb_logo from "../media/logos/SNVB.png";

// Add more imports as needed

function Supports() {
  return (
    <Box p={4} bgcolor={"quaternary.main"} textAlign="center">
      <Container maxWidth="lg">
        <FullHeightSection>
          <Typography variant="h4" color={"tertiary.main"} gutterBottom>
            Ils nous soutiennent
          </Typography>
          <Box>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={geneva_canton_logo}
                  alt="logo canton de genève"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    height: "auto",
                    width: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={svrg_logo}
                  alt="swiss volley region genève logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={franchise_beach_volley_logo}
                  alt="beach volley franchise logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={vbc_etoile_geneve_logo}
                  alt="vbc etoile Genève logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={peps_beach_volley_logo}
                  alt="peps beach volley logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={volley_geneve_sud_geneve_logo}
                  alt="volley jeunesse genève sud logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={snvb_logo}
                  alt="snvb logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    height: "auto",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </FullHeightSection>
      </Container>
    </Box>
  );
}

export default Supports;
