// Banner.js
import React from "react";
import { Typography, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";

function useSmoothScroll() {
  return function (to) {
    const element = document.getElementById(to);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      scroll.scrollTo(top, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    }
  };
}

function Banner() {
  const scrollTo = useSmoothScroll();

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
    <Box mt={{ xs: 12, sm: 0, md: 0 }}>
      <Box padding={{ xs: 2, sm: 4, md: 8 }} pt={2} textAlign="left" >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" height="100%">
          <Box pb={2}>
            <Typography color={"primary"} variant={variant} align="left">
                            Indoor Beach Volleyball <br></br>
                            coming soon to Geneva!
            </Typography>
          </Box>
          <Box pb={{ xs: 0, sm: 1, md: 2 }}>
          </Box>
          <Button onClick={() => scrollTo("membershipsection")} variant="contained" color="primary">
              How to participate
            </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
