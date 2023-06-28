import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box py={3} bgcolor="tertiary.main" color="primary.main">
      <Typography variant="body1" align="center">
        © 2023 Web Design Julietta Saccardi & Web Development Neigeline Rivollat
      </Typography>
    </Box>
  );
}

export default Footer;
