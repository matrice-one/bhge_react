// Banner.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Box, Grid, } from '@mui/material';

function MembershipSection() {
    const sections = [
        { title: 'Crowdfunding membership', subtitle:'Support us as a member of honor', description: "If you’d like to take your support a step further, you can contribute to our crowdfunding campaign and become a member of honor. As a member of honor, you'll receive priority access to the facility, and discounts on certain services and events.", buttonText: 'Become a member of honor' },
        { title: 'Free membership', subtitle:'Support us with a free membership', description: 'This is a short description for section 2.', buttonText: 'Become a member for free' },
      ];
    
      return (
        <Box id="membershipsection" p={4} bgcolor={'secondary.main'}>
          <Typography color={'primary.main'} variant="h3" gutterBottom>
            Become a member
          </Typography>
          <Grid container spacing={20}>
            {sections.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Typography color={'primary.main'} variant="h5" gutterBottom>
                  {section.title}
                </Typography>
                <Typography color={'primary.main'} variant="h6" gutterBottom>
                  {section.subtitle}
                </Typography>
                <Typography color={'primary.main'} variant="body1" gutterBottom>
                  {section.description}
                </Typography>
                <Button variant="contained" color="primary">
                  {section.buttonText}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
    
//     return (
        
//         <Box p={4} bgcolor={'primary.main'}>
//             <Grid container spacing={4}>
//                 <Grid item xs={12} sm={12} md={6} >
//                     {/* <Card>
//                     <Box> */}
//                         <Typography variant='h3'>
//                             Bim
//                         </Typography>
//                         <Typography variant='body1'>
//                             Bim
//                         </Typography>
//                     </Grid>
//                     {/* </Box>
//                     </Card> */}
//                     {/* <Card>
                    

//                     </Card> */}
//                     {/* <Box> */}
//                     <Grid item xs={12} sm={12} md={6} >

//                         <Typography variant='h3'>
//                             Bam
//                         </Typography>
//                         <Typography variant='body1'>
//                             Bim
//                         </Typography>
//                         {/* </Grid> */}
//                     {/* </Box> */}
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }

export default MembershipSection