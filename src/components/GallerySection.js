import { Grid, } from "@mui/material";
import imageGallery1 from "../media/images/gallerie_picture_1.png";
import imageGallery2 from "../media/images/gallerie_picture_2.png";
import imageGallery3 from "../media/images/happy_dar.jpeg";
import imageGallery4 from "../media/images/gallerie_picture_4.png";
import FullHeightSection from './reusable_components/FullHeightSection';

function GallerySection() {
  return (
    <FullHeightSection bgcolor={"black"}>
        <Grid container spacing={0} bgcolor={"black"}>
          <Grid item xs={6} md={3}>
            <img src={imageGallery1} alt="Section" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={imageGallery2} alt="Section" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={imageGallery3} alt="Section" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={6} md={3}>
            <img src={imageGallery4} alt="Section" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Grid>
        </Grid>
      </FullHeightSection>
  );
}

export default GallerySection;