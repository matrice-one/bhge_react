import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import imageSection1 from '../media/images/image_section_1.png'

function PresentationSection() {
    return (
        <Box id="presentationsection" sx={{ bgcolor: 'tertiary.main' }}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box sx={{ height: { xs: 200, md: 'auto' } }}>
                        <img src={imageSection1} alt="Section" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box p={4} bgcolor='tertiary.main' display="flex" flexDirection="column" justifyContent="center">
                        <Typography color={'primary'} variant="h3" gutterBottom>
                            Our project
                        </Typography>
                        <Typography color={'primary'} variant="body1" gutterBottom>
                            Our goal is to build a facility of upmost quality, keeping in mind both recreational and competitive players. It will feature a beach-like environment with professional-grade sand courts, just like those used in international tournaments.
                        </Typography>
                        <Box display="inline-block">
                            <Button component={Link} to="/" variant="contained" color="primary">
                                Become a member
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PresentationSection;
