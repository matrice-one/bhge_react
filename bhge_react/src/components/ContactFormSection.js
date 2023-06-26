import { Box, Card, CardContent, TextField, Button, Grid, Typography, useTheme } from '@mui/material';

function ContactFormSection() {
    const theme = useTheme();

    return(
    <Grid container spacing={0} bgcolor={'primary.main'}>
        <Grid item xs={12} sm={6}>
            <Box p={4}>
                <Typography variant='h2' gutterBottom >Contact Us</Typography>
                <Typography variant='body1'>Beach Center Geneva is an association of local beach volleyball lovers with a common goal. Don’t hesitate to get in touch!</Typography>
                <form noValidate autoComplete="off">
                    <TextField fullWidth margin="normal" label="First Name" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Last Name" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Email" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Phone Number" variant="outlined" />
                    <TextField fullWidth margin="normal" label="Message" variant="outlined" multiline rows={4} />
                    <Button variant="contained" color="tertiary" type="submit">
                       <Typography color={'primary'}>Submit </Typography> 
                    </Button>
                </form>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Box p={4}>
            </Box>
        </Grid>
            
        </Grid>
)
}

export default ContactFormSection
