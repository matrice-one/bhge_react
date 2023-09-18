import { Box, TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useForm, ValidationError } from '@formspree/react';
import FullHeightSection from './reusable_components/FullHeightSection';
import { useTranslation } from "react-i18next";

function ContactFormSection() {
  const [state, handleSubmit] = useForm("moqoqnpz"); // replace "moqoqnpz" with your form ID
  const { t } = useTranslation();
  return(
    <div id="contactussection">
    <Box p={4} bgcolor={"primary.main"}>
    
      <Container maxWidth="lg">
      <FullHeightSection bgcolor={"primary.main"}>
        <Grid id="contactsection" container spacing={0} bgcolor={"primary.main"}>
          <Grid item xs={12} sm={6}>
              <Typography variant='h3' gutterBottom >{t("ContactFormSection.contactUs")}</Typography>
              <Box pt={6}>
              <Typography variant='body1'>{t("ContactFormSection.description")}</Typography>
              {state.succeeded ? (
                <Typography color={'tertiary'} variant='h5'>{t("ContactFormSection.successMessage")}</Typography>
              ) : (
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField id="first-name" name="firstname" label={t("ContactFormSection.firstName")} variant="outlined" fullWidth 
                  sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} />
                  <TextField id="last-name" name="lasttname" label={t("ContactFormSection.lastName")} variant="outlined" fullWidth 
                  sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
                  <TextField id="email" name="email" type="email" label={t("ContactFormSection.email")} variant="outlined" fullWidth 
                  sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
                  <TextField id="whatsapp" name="phone" label={t("ContactFormSection.whatsapp")} variant="outlined" fullWidth 
                  sx={{ mb: 2, borderRadius: '5px', fontFamily:  "body1.fontFamily" }} />
                  <TextField id="message" name="message"  label={t("ContactFormSection.message")} variant="outlined" multiline rows={4} fullWidth 
                      sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  <Button variant="contained" color="tertiary" type="submit" disabled={state.submitting}>
                    <Typography color={"primary"}>{t("ContactFormSection.submit")}</Typography>
                  </Button>
                </form>
              )}
              </Box>
          </Grid>
        </Grid>
        </FullHeightSection>
      </Container>
    
    </Box>
    </div>

  );
}

export default ContactFormSection;
