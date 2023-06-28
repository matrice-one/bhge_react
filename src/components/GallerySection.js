import { Grid, } from "@mui/material";
import imageGallery1 from "../media/images/gallerie_picture_1.png";
import imageGallery2 from "../media/images/gallerie_picture_2.png";
import imageGallery3 from "../media/images/gallerie_picture_3.png";
import imageGallery4 from "../media/images/gallerie_picture_4.png";

function GallerySection() {
//   const features = [
//     { title: 'Playing all year long', description: 'A protected facility means enjoying beach volleyball anytime of the year, regardless of the weather conditions.' },
//     { title: 'Health & Fitness', description: 'Physical activity in the sand contributes to better cardiovascular fitness, improved muscle tone, and enhanced hand-eye coordination. All athletes can benefit!' },
//     { title: 'Skill Development', description: 'By working with existing programs and coaches, as well as introducing our own, we plan to offer camps, and classes players of all levels to improve their skills.' },
//     { title: 'Events & Tournaments', description: "From official beach volleyball tournaments to private events, we will provide a space for players of all levels to showcase their skills and enjoy high-energy games." },
//   ];


  return (
    // <Box p={4}>
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
    // </Box>

  );
}

export default GallerySection;