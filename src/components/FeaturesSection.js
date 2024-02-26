import { Box, Card, CardContent, Grid, Typography,Container } from "@mui/material";
import FullHeightSection from './reusable_components/FullHeightSection';
import { useTranslation } from "react-i18next";

function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    { title: t("FeaturesSection.features.playingAllYear"), description: t("FeaturesSection.featureDescriptions.playingAllYear")},
    { title:  t("FeaturesSection.features.healthAndFitness"), description:t("FeaturesSection.featureDescriptions.healthAndFitness") },
    { title:  t("FeaturesSection.features.skillDevelopment"), description: t("FeaturesSection.featureDescriptions.skillDevelopment") },
    { title:  t("FeaturesSection.features.eventsAndTournaments"), description: t("FeaturesSection.featureDescriptions.eventsAndTournaments") },
  ];

  return (
    <Box p={4} bgcolor={"primary.main"}>
      <Container maxWidth="lg">
        <FullHeightSection>
            <Typography variant="h2" color={"secondary.main"} gutterBottom>
              {t("FeaturesSection.title")}
            </Typography>
              <Grid container spacing={4} pt={6}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ height: "100%", border: "4px solid", borderColor: "tertiary.main", display: "grid", gridTemplateRows: "1fr 1fr" }}>
                      <Box sx={{ bgcolor:"primary.main", borderBottom: "2px solid", borderColor: "tertiary.main", pt:3, pb: 2, px: 2 }}>
                        <Typography variant="h5" color={"secondary.main"} gutterBottom >
                          {feature.title}
                        </Typography>
                      </Box>
                      <CardContent sx={{ bgcolor:"primary.main" }}>
                        <Typography variant="body1" color={"secondary.main"}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
              ))}
            </Grid>
          </FullHeightSection>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
