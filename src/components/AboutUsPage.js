import FullHeightSection from "./reusable_components/FullHeightSection";
import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import SamplePDF from "../media/documents/statut_club_bhge.pdf"; // Import your PDF file

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
            <Typography
              color={"tertiary.main"}
              variant={variant}
              align="left"
              paddingBottom={2}
            >
              {t("AboutUsSection.aboutUs")}
              <br></br>
              <br></br>
            </Typography>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <Typography color={"primary"} variant={"body1"} align="justify">
                  <div>
                    Créée en 2023, Beach Halle Genève est un{" "}
                    <b>club affilié à Swiss Volley Région Genève</b> dédié à la
                    promotion de la création d&apos;une structure couverte
                    permettant la pratique des sports de sable tels que le
                    beach-volley, le beach-soccer et le beach-tennis dans le
                    Grand Genève. Forte d&apos;une communauté de{" "}
                    <b>plus de 150 membres</b>, nous regroupons amateurs et
                    passionnés autour d&apos;une vision commune : offrir une
                    structure pour une pratique toute l&apos;année
                  </div>
                  <br></br>
                  <br></br>
                  <div>
                    En une année, nous avons...
                    <lu>
                      <li>
                        organisé une dizaine de <b>tournois licenciés</b>
                      </li>
                      <li>
                        organisé un <b>événement sportif festif</b> (nuit du
                        beach)
                      </li>
                      <li>
                        <b>fondé un club</b> actif et structuré
                      </li>
                      <br></br>
                      Enfin, nous travaillons déjà sur la{" "}
                      <b>création d’une académie</b> pour l’année prochaine afin
                      de former les futurs talents de ces sports. <br></br>Notre
                      objectif : bâtir une communauté inclusive et durable,
                      animée par l’esprit d’équipe et la passion
                    </lu>
                  </div>
                  <br></br>
                  <br></br>
                  <Button
                    variant="contained"
                    color="tertiary"
                    href={SamplePDF}
                    download
                  >
                    Télécharger nos status
                  </Button>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography color={"primary"} variant={"body1"} align="justify">
                  {t("AboutUsSection.projectDescription")}
                  <ul>
                    <li>
                      <b>Bryan Biderbost</b>, vice-président, instructeur au{" "}
                      <a
                        href="https://www.beachcentergeneve.ch"
                        style={{ color: theme.palette.tertiary.main }}
                      >
                        Beach Volley Club Vernier Genève (Parc des franchises)
                      </a>
                    </li>
                    <li>
                      <b>Neigeline Rivollat</b>, web design, ingénieure en
                      logiciel
                    </li>
                    <li>
                      <b>Cyril Branet</b>, communication, physiothérapeute
                    </li>
                    <li>
                      <b>Lara Silva</b>, réseaux sociaux, étudiante
                    </li>
                    <li>
                      <b>Jérôme Haldemann</b>, trésorier, finance
                    </li>
                    <li>
                      <b>Vittorio Sommadossi</b>, économiste, ingénieur en
                      management
                    </li>
                    <li>
                      <b>Ilaria Marchese</b>, sponsoring et collecte de fonds,
                      économiste
                    </li>
                    <li>
                      <b>Adrien Walthert</b>, sponsoring, data analyste
                    </li>
                    <li>
                      <b>Dario Santandrea</b>, président, management, ingénieur
                      en efficience énergétique
                    </li>
                  </ul>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color={"primary"} variant={"body1"} align="justify">
                  <br></br>
                  <br></br>
                  {t("AboutUsSection.projectCreation")}
                  <br></br>
                  <br></br>
                  {t("AboutUsSection.joinUs")}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  {t("AboutUsSection.teamMembers")}
                </Typography>
              </Grid>
            </Grid>
          </FullHeightSection>
        </Container>
      </Box>
    </div>
  );
};

export default AboutUsPage;
