import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Grid, Typography, Container } from "@mui/material";
import FullHeightSection from './reusable_components/FullHeightSection';
import { useTranslation } from "react-i18next";

function ContactFormSection() {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/contact-form/', formData);
      if (response.status === 201) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("There was an error submitting the form", error);
      setIsSubmitted(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              {isSubmitted ? (
                <Typography color={'tertiary'} variant='h5'>{t("ContactFormSection.successMessage")}</Typography>
                ) : (
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField 
                    id="first-name" 
                    name="first_name"  // Make sure this matches your Django model field names
                    label={t("ContactFormSection.firstName")} 
                    variant="outlined" 
                    fullWidth 
                    onChange={handleChange}  
                    sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} 
                  />
                  <TextField 
                    id="last-name" 
                    name="last_name" 
                    label={t("ContactFormSection.lastName")} 
                    variant="outlined" 
                    fullWidth 
                    onChange={handleChange} 
                    sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} 
                  />
                  <TextField 
                    id="email" 
                    name="email"  
                    label={t("ContactFormSection.email")} 
                    variant="outlined" 
                    fullWidth 
                    onChange={handleChange}  
                    sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} 
                  />
                  <TextField 
                    id="whatsapp" 
                    name="phone_number"  
                    label={t("ContactFormSection.firstName")} 
                    variant="outlined"whatsapp
                    fullWidth 
                    onChange={handleChange}  
                    sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} 
                  />
                  <TextField id="message" name="message"  label={t("ContactFormSection.message")} variant="outlined" multiline rows={4} fullWidth 
                      onChange={handleChange} sx={{ mb: 2, borderRadius: '5px', fontFamily: "body1.fontFamily" }} />
                  <Button variant="contained" color="tertiary" type="submit">
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
