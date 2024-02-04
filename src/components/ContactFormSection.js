import { Box,Container } from "@mui/material";
import { } from '@formspree/react';
import FullHeightSection from './reusable_components/FullHeightSection';
import {  } from "react-i18next";

function ContactFormSection() {

  return(
    <div id="contactussection">
    <Box p={4} bgcolor={"primary.main"}>
    
      <Container maxWidth="lg">
        <FullHeightSection bgcolor={"primary.main"}>
          <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWDNy5I-B_juNFQEbNyqMqJkR6HpJY4TYPpLruDv0-t3bitA/viewform?embedded=true" style="width: 100vw; height: 100vh; border: none;" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>` }} />
        </FullHeightSection>
      </Container>
    
    </Box>
    </div>

  );
}

export default ContactFormSection;
