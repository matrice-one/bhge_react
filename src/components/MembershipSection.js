// Banner.js
import React from "react";
import { Typography, } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import FormModal from "./FormModal";
import FullHeightSection from './reusable_components/FullHeightSection';


function MembershipSection() {
  const sections = [
    { title: "Crowdfunding membership", subtitle:"Support us as a member of honor", description: "If you’d like to take your support a step further, you can contribute to our crowdfunding campaign and become a member of honor. As a member of honor, you'll receive priority access to the facility, and discounts on certain services and events.", buttonText: "Become a member of honor" },
    { title: "Free membership", subtitle:"Support us with a free membership", description: "You can also show your interest in our project and join our growing community by signing up for a free membership. As a member, you'll receive updates on our progress, invitations to special events, and the satisfaction of contributing to the future of indoor beach volleyball.", buttonText: "Become a member for free" },
  ];
    
  return (
    <Box id="membershipsection" p={4} bgcolor={"secondary.main"}>
     <Container maxWidth="lg">
      <FullHeightSection>
          <Typography color={"primary.main"} variant="h3" gutterBottom>
                Become a member
          </Typography>
          <Grid container spacing={20} pt={6}>
            {sections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Typography color={"primary.main"} variant="h5" gutterBottom>
                  {section.title}
                </Typography>
                <Typography color={"primary.main"} variant="h6" gutterBottom>
                  {section.subtitle}
                </Typography>
                <Typography color={"primary.main"} variant="body1" gutterBottom align="justify">
                  {section.description}
                </Typography>
                <FormModal buttonText= {section.buttonText} />
              </Grid>
            ))}
          </Grid>
        </FullHeightSection>
      </Container>
    </Box>
  );
}
    


export default MembershipSection;