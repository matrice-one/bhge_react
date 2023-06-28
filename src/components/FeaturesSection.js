import { Box, Card, CardContent, Grid, Typography, useTheme } from '@mui/material';

function FeaturesSection() {
  const features = [
    { title: 'Playing all year long', description: 'A protected facility means enjoying beach volleyball anytime of the year, regardless of the weather conditions.' },
    { title: 'Health & Fitness', description: 'Physical activity in the sand contributes to better cardiovascular fitness, improved muscle tone, and enhanced hand-eye coordination. All athletes can benefit!' },
    { title: 'Skill Development', description: 'By working with existing programs and coaches, as well as introducing our own, we plan to offer camps, and classes players of all levels to improve their skills.' },
    { title: 'Events & Tournaments', description: "From official beach volleyball tournaments to private events, we will provide a space for players of all levels to showcase their skills and enjoy high-energy games." },
  ];

  return (
  <Box p={4} bgcolor={'primary.main'}>
      <Typography variant="h3" color={'secondary.main'} gutterBottom>
        Indoor beach volley means...
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', border: '4px solid', borderColor: 'secondary.main', display: 'grid', gridTemplateRows: '1fr 1fr' }}>
              <Box sx={{ bgcolor:'primary.main', borderBottom: '2px solid', borderColor: 'secondary.main', pt:3, pb: 2, px: 2 }}>
                <Typography variant="h5" color={'secondary.main'} gutterBottom >
                  {feature.title}
                </Typography>
              </Box>
              <CardContent sx={{ bgcolor:'primary.main' }}>
                <Typography variant="body1" color={'secondary.main'}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>



          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturesSection;
