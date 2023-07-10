import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import { useForm, ValidationError } from '@formspree/react';

function ContactFormSection() {
  const [state, handleSubmit] = useForm("moqoqnpz"); // replace "moqoqnpz" with your form ID

  return(
    <Grid id="contactsection" container spacing={0} bgcolor={"primary.main"}>
      <Grid item xs={12} sm={6}>
        <Box p={4}>
          <Typography variant='h3' gutterBottom >Contact Us</Typography>
          <Typography variant='body1'>Beach Center Geneva is an association of local beach volleyball lovers with a common goal. Don’t hesitate to get in touch!</Typography>
          {state.succeeded ? (
            <Typography color={'tertiary'} variant='h5'>Thanks for your message! We will get back to you as soon as possible.</Typography>
          ) : (
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField id="first-name" name="firstname" label="First Name" variant="outlined" fullWidth 
              sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} />
              <TextField id="last-name" name="lasttname" label="Last Name" variant="outlined" fullWidth 
              sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
              <TextField id="email" name="email" type="email" label="Email Address" variant="outlined" fullWidth 
              sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
              <TextField id="whatsapp" name="phone" label="WhatsApp Number (if you'd like to join the group)" variant="outlined" fullWidth 
              sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
              <TextField id="message" name="message"  label="Message" variant="outlined" multiline rows={4} fullWidth 
                  sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <Button variant="contained" color="tertiary" type="submit" disabled={state.submitting}>
                <Typography color={"primary"}>Submit</Typography>
              </Button>
            </form>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box p={4}>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactFormSection;
