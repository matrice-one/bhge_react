import React from "react";
import { Box } from "@mui/material";
import FullHeightSection from "./reusable_components/FullHeightSection";

const SchoolBanner = () => {
  return (
    <div id="schoolbanner">
      <Box
        bgcolor={"quaternary.main"}
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: "url(/school_banner_black.svg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FullHeightSection></FullHeightSection>
      </Box>
    </div>
  );
};

export default SchoolBanner;
