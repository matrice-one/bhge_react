import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FullHeightSection from './reusable_components/FullHeightSection';
// Import logos
import Support1 from '../media/logos/geneva_canton.png';
import Support2 from '../media/logos/swiss_volley_region_geneve.png';
import Support3 from '../media/logos/Ville_de_Geneve.jpg';
import Support4 from '../media/logos/VBC_Etoile_Geneve.jpeg';
import Support5 from '../media/logos/PEPS_HQ.png';
import Support6 from '../media/logos/volley_jeunesse_geneve_sud.png';

// Add more imports as needed

function Supports() {
  return (
    <Box p={4} bgcolor={"quaternary.main"} textAlign="center" style={{ maxHeight: '100vh'}}>
        <FullHeightSection>
            <Typography variant="h4" color={"tertiary.main"} gutterBottom>
            Ils nous soutiennent
            </Typography>
            <Box>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                <img src={Support1} alt="Club 1" style={{ maxWidth: '100%',  maxHeight: '200px', height: 'auto', width: 'auto'}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <img src={Support2} alt="Club 2" style={{ maxWidth: '100%', maxHeight: '200px',  height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <img src={Support3} alt="Club 3" style={{ maxWidth: '100%', maxHeight: '200px',  height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <img src={Support4} alt="Club 1" style={{ maxWidth: '100%', maxHeight: '200px',  height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <img src={Support5} alt="Club 2" style={{ maxWidth: '100%',  maxHeight: '200px', height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <img src={Support6} alt="Club 3" style={{ maxWidth: '100%', maxHeight: '200px', height: 'auto'  }} />
                </Grid>
            </Grid>
            </Box>
        
        </FullHeightSection>
      
    </Box>
  );
}

export default Supports;