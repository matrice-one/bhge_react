import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box py={3} bgcolor="secondary.main" color="primary.main">
      <Typography variant="body1" align="center">
        {t("Footer.copyright")}
      </Typography>
      <Box mt={2} display="flex" justifyContent="center">
        <Select
          value={i18n.language}
          onChange={changeLanguage}
          variant="outlined"
          style={{ backgroundColor: "white" }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

export default Footer;