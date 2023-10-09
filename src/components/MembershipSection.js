// Banner.js
import React from "react";
import { Typography, } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import FormModal from "./FormModal";
import FullHeightSection from './reusable_components/FullHeightSection';
import { useTranslation } from "react-i18next";


function MembershipSection() {
  const { t } = useTranslation();
  const sections = [
    { title: t("MembershipSection.freeMembership"), subtitle:t("MembershipSection.freeMembershipsubtitle"), description: t("MembershipSection.freeMembershipDescription"), buttonText: t("MembershipSection.crowdfundingMembershipButton")},
    { title: t("MembershipSection.crowdfundingMembership"), subtitle:t("MembershipSection.crowdfundingMembershipsubtitle"), description: t("MembershipSection.crowdfundingDescription"), buttonText: t("MembershipSection.crowdfundingMembershipsButton")},
  ];
    
  return (
    <Box id="membershipsection" p={4} bgcolor={"secondary.main"}>
     <Container maxWidth="lg">
      <FullHeightSection>
          <Typography color={"primary.main"} variant="h3" gutterBottom>
            {t("MembershipSection.becomeAMember")}
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
                <Box paddingTop={'1em'}>
                <FormModal buttonText= {section.buttonText} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </FullHeightSection>
      </Container>
    </Box>
  );
}
    


export default MembershipSection;