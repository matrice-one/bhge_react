import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import bannerImage from "../media/images/banner_image.png";
import PresentationSection from "./PresentationSection";
import MembershipSection from "./MembershipSection";
import { Box } from "@mui/material";
import FeaturesSection from "./FeaturesSection";
import GallerySection from "./GallerySection";
import ContactFormSection from "./ContactFormSection";
import Footer from "./Footer";
import Supports from "./Supports";
import AboutUsPage from "./AboutUsPage";
import SchoolBanner from "./SchoolBanner";

const HomePage = () => {
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // This will make the div take the full height of the viewport
        }}
      >
        <Box
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity by changing the alpha value (0.5 in this case)
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Header />
          <Banner />
          <div style={{ flex: 0.5 }}></div>
        </Box>
      </Box>
      <SchoolBanner />
      <PresentationSection />
      <Supports />
      <FeaturesSection />

      <MembershipSection />
      <GallerySection />

      <AboutUsPage />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default HomePage;
