import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import bannerImage from "../media/images/vue_evaux.jpeg";
import PresentationSection from "./PresentationSection";
import MembershipSection from "./MembershipSection";
import { Box,} from "@mui/material";
import FeaturesSection from "./FeaturesSection";
import GallerySection from "./GallerySection";
import ContactFormSection from "./ContactFormSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Box 
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh" // This will make the div take the full height of the viewport
                    
        }}
      >
        <Box 
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity by changing the alpha value (0.5 in this case)
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start", // Aligns Header to the top
            alignItems: "flex-start",
          }}
        >
          <Header />
          <Banner />
        </Box>
      </Box>
      <PresentationSection />
      <FeaturesSection />
      <MembershipSection />
      <GallerySection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default HomePage;
