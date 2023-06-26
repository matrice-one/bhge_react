import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box py={3} bgcolor="tertiary.main" color="primary.main">
      <Typography variant="body1" align="center">
        © 2023 Web Deisgn; Julietta Saccardi & Web Development: Neigeline Rivollat
      </Typography>
      {/* <Typography variant="body2" align="center">
        <Link color="inherit" href="/privacy-policy">
          Privacy Policy
        </Link>
        {' | '}
        <Link color="inherit" href="/terms-of-service">
          Terms of Service
        </Link>
      </Typography> */}
    </Box>
  );
}

export default Footer;
