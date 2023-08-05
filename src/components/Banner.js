import React from "react";
import { Typography, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import FullHeightSection from './reusable_components/FullHeightSection';

function Banner() {
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
    <FullHeightSection>
      <Box mt={{ xs: 12, sm: 0, md: 0 }}>
        <Box padding={{ xs: 2, sm: 4, md: 8 }} pt={2} textAlign="left">
          <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="flex-start" 
            height="100%"
          >
            <Box pb={2}>
              <Typography color={"primary"} variant={variant} align="left">
                Your Indoor Beach Halle <br />
                coming soon to Geneva!
              </Typography>
            </Box>
            <Box pb={{ xs: 0, sm: 1, md: 2 }}></Box>
            <Button 
              component={Link}  
              sx={{ borderRadius: "16px" }} 
              to="/" 
              variant="contained" 
              color="primary"
            >
              How to participate
            </Button>
          </Box>
        </Box>
      </Box>
    </FullHeightSection>
  );
}

export default Banner;
