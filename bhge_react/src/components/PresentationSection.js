// PresentationSection.js
import React from 'react';
import { Typography, Button, Box,  } from '@mui/material';
import { Link } from 'react-router-dom';
import imageSection1 from '../media/images/image_section_1.png'


function PresentationSection() {
    return (

    <Box display="flex" sx={{height: 600}} flexDirection={{ xs: 'column', md: 'row' }} bgcolor={'tertiary'}>
        <Box flex="0 0 40%" height={{ xs: '200px', md: 'auto' }}>
            <img src={imageSection1} alt="Section" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box flex="0 0 60%" p={4} bgcolor='tertiary.main' display="flex" flexDirection="column" justifyContent="center">
            <Typography color={'primary'}  variant="h2" gutterBottom>
                Our project
            </Typography>
            <Typography color={'primary'}  variant="body1" gutterBottom>

            Our goal is to build a facility of upmost quality, keeping in mind both recreational and competitive players. It will feature a beach-like environment with professional-grade sand courts, just like those used in international tournaments. 

            </Typography>
            <Box display="inline-block">
            <Button component={Link} to="/" variant="contained" color="primary">
                Become a member
            </Button>
            </Box>
        </Box>
        </Box>
    )
    }
export default PresentationSection;