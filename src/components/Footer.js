import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <Box py={3} bgcolor="secondary.main" color="primary.main">
      <Typography variant="body1" align="center">
        {t("Footer.copyright")}
      </Typography>
    </Box>
  );
}

export default Footer;
