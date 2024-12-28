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
import cern_logo from "../media/logos/CERN.png";
import satigny_logo from "../media/logos/satigny.png";
import viry_logo from "../media/logos/viry.png";
import prevessin_logo from "../media/logos/prevessin.png";
import { useTranslation } from "react-i18next";

// Add more imports as needed

function Supports() {
    const { t } = useTranslation();
  
  return (
    <Box p={4} bgcolor={"quaternary.main"} textAlign="center">
      <Container maxWidth="lg">
        <FullHeightSection>
          <Typography variant="h4" color={"tertiary.main"} gutterBottom>
          {t("Supports.title")}
          </Typography>
          <Box>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://www.ge.ch/">
                <img
                  src={geneva_canton_logo}
                  alt="logo canton de genève"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                    width: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://www.svrge.ch/">
                <img
                  src={svrg_logo}
                  alt="swiss volley region genève logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://www.beachcentergeneve.ch/">
                <img
                  src={franchise_beach_volley_logo}
                  alt="beach volley club vernier logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://vbcgeneve.ch/">
                <img
                  src={vbc_etoile_geneve_logo}
                  alt="vbc etoile Genève logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://www.pepsvolley.ch/">
                <img
                  src={peps_beach_volley_logo}
                  alt="peps beach volley logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://volleygenevesud.ch/">
                <img
                  src={volley_geneve_sud_geneve_logo}
                  alt="volley jeunesse genève sud logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://chenoisvolley.ch/adultes/">
                <img
                  src={snvb_logo}
                  alt="snvb logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://volleyball-club.web.cern.ch/">
                <img
                  src={cern_logo}
                  alt="cern logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="http://www.volleyprevessin.fr/">
                <img
                  src={prevessin_logo}
                  alt="prevessin logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://www.satigny-volleyball.ch/">
                <img
                  src={satigny_logo}
                  alt="satigny logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <a href="https://leagues.teamlinkt.com/viryvolleyball/LeClub">
                <img
                  src={viry_logo}
                  alt="viry logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    height: "auto",
                  }}
                />
                </a>
              </Grid>
            </Grid>
          </Box>
        </FullHeightSection>
      </Container>
    </Box>
  );
}

export default Supports;
