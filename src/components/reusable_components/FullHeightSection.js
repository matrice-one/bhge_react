import React from "react";
import { Box, } from "@mui/material";

// eslint-disable-next-line react/prop-types  
  function FullHeightSection({ children, bgcolor }) {
    return (
      <Box sx={{ 
        minHeight: ['auto', 'auto', '100vh'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centers children on the X-axis
        justifyContent: 'center', // Centers children on the Y-axis
        bgcolor: bgcolor || 'transparent'
    }}>
              {children}
      </Box>
    );
  }

  export default FullHeightSection;
  
