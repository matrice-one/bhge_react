import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import FullHeightSection from "./reusable_components/FullHeightSection";
import { useTranslation } from "react-i18next";

function PresentationSection() {
  const { t } = useTranslation();

  return (
    <Box id="presentationsection" sx={{ bgcolor: "secondary.main" }}>
      <Container maxWidth="lg">
        <FullHeightSection>
          <Typography color={"tertiary.main"} variant="h2">
            {t("PresentationSection.ourProject")}
          </Typography>
          <Container maxWidth="lg">
            <Box
              p={4}
              bgcolor="secondary.main"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box pt={6}>
                <Typography
                  color={"primary"}
                  variant="body1"
                  align="justify"
                  gutterBottom
                >
                  {t("PresentationSection.projectDescription")}
                </Typography>
                <Box mt={2} justifyContent={"center"}>
                  <a href="./brochure_bhge.pdf" download>
                    <Button variant="contained" color="tertiary">
                      {t("BannerSection.downloadMessage")}
                    </Button>
                  </a>
                </Box>
              </Box>
            </Box>
          </Container>
        </FullHeightSection>
      </Container>
    </Box>
  );
}

export default PresentationSection;
