import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography, useTheme, Container, Grid, Card, CardContent } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';

const About = () => {
  const theme = useTheme();

  const stats = [
    { icon: <RestaurantIcon />, value: '500+', label: 'Dishes Served Daily' },
    { icon: <PeopleIcon />, value: '10K+', label: 'Happy Customers' },
    { icon: <EmojiEventsIcon />, value: '15+', label: 'Awards Won' },
    { icon: <FavoriteIcon />, value: '4.8', label: 'Average Rating' },
  ];

  return (
    <Layout>
      <Box sx={{ bgcolor: theme.palette.background.default }}>
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.white,
            py: { xs: 6, md: 8 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
              About My Restaurant
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Serving delicious food with passion since 2010
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    boxShadow: theme.shadows[3],
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.text.white,
                      mb: 2,
                      '& svg': { fontSize: '2rem' },
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 300, md: '100%' },
                  minHeight: 400,
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[4],
                  backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom fontWeight={600} color="primary.main">
                Our Story
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, textAlign: 'justify' }}>
                Founded in 2010, My Restaurant began with a simple vision: to bring authentic, 
                delicious food to our community. What started as a small family-owned establishment 
                has grown into a beloved dining destination known for quality, freshness, and 
                exceptional service.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, textAlign: 'justify' }}>
                Every dish we serve is crafted with carefully selected ingredients and prepared 
                with passion by our experienced chefs. We believe that great food brings people 
                together, and we're honored to be part of your dining experiences, celebrations, 
                and everyday moments.
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              bgcolor: theme.palette.background.paper,
              borderRadius: theme.shape.borderRadius,
              p: { xs: 3, md: 5 },
              boxShadow: theme.shadows[3],
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight={600} color="primary.main" textAlign="center" mb={4}>
              Our Mission & Values
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', bgcolor: theme.palette.background.elevated, boxShadow: 'none' }} >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{ fontSize: '3rem', mb: 2 }}>🌟</Box>
                    <Typography variant="h6" gutterBottom fontWeight={600}>Quality First</Typography>
                    <Typography variant="body2" color="text.secondary">We source only the freshest ingredients and never compromise on quality. Your satisfaction is our top priority.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', bgcolor: theme.palette.background.elevated, boxShadow: 'none' }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{ fontSize: '3rem', mb: 2 }}>❤️</Box>
                    <Typography variant="h6" gutterBottom fontWeight={600}>Made with Love</Typography>
                    <Typography variant="body2" color="text.secondary">Every dish is prepared with care and attention to detail, ensuring each bite is a memorable experience.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%', bgcolor: theme.palette.background.elevated, boxShadow: 'none' }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{ fontSize: '3rem', mb: 2 }}>🌱</Box>
                    <Typography variant="h6" gutterBottom fontWeight={600}>Sustainability</Typography>
                    <Typography variant="body2" color="text.secondary">We're committed to sustainable practices, from sourcing local ingredients to eco-friendly packaging.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default About;