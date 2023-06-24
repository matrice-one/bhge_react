// Banner.js
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <Box padding={8} pt={2} textAlign="left" >
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" height="100%">
                <Box pb={2}>
                    <Typography color={'primary'} variant="h2" align="left">
                        Indoor Beach Volleyball <br></br>
                        coming soon to Geneva!
                    </Typography>
                </Box>
                <Box pb={2}>
                </Box>
                <Button component={Link}  sx={{ borderRadius: '16px' }} to="/" variant="contained" color="primary" size="large">
                <Typography color={'tertiary'} variant="h6" align="left">
                    How to participate
                    </Typography>
                    {/* How to participate */}
                </Button>
            </Box>
        </Box>
    );
}

export default Banner;
