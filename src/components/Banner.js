import React from "react";
import { Typography, Button, Box, useTheme, useMediaQuery, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
// import FormModal from "./FormModal";

function Banner() {
  const { t } = useTranslation();
  const theme = useTheme();
  const matchesSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMdUp = useMediaQuery(theme.breakpoints.up("md"));

  let variant;
  if (matchesMdUp) {
    variant = "h2";
  } else if (matchesSmUp) {
    variant = "h2";
  } else {
    variant = "h3";
  }
  return (
    <Container maxWidth="lg">
      <Box mt={{ xs: 12, sm: 0, md: 0 }}>
        <Box pt={2} textAlign="left" >
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" height="100%">
            <Box pb={2}>
              <Typography color={"white"} variant={variant} align="left">
                {t("BannerSection.teasingMessagePart1")}<br></br>{t("BannerSection.teasingMessagePart2")}
              </Typography>
            </Box>
            <Box pb={{ xs: 0, sm: 1, md: 2 }}>
            </Box>
            <Button  sx={{ borderRadius: "16px" }} variant="contained" color="tertiary" onClick={() => {
                  const section = document.getElementById("membershipsection");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                  {t("BannerSection.participateMessage")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>

  );
}

export default Banner;
