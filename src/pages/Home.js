import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpg';
import { Box, Typography, Button, useTheme, Container, Stack } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Home = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { md: 'fixed' },
          height: { xs: '70vh', sm: '80vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              textAlign: 'center',
              color: theme.palette.text.white,
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: { xs: 2, sm: 3 },
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                animation: 'fadeInUp 0.8s ease-out',
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(30px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              Food Website
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: { xs: 3, sm: 4 },
                fontWeight: 400,
                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Best food waiting for your belly
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 4 }}
              justifyContent="center"
              alignItems="center"
              sx={{
                mb: 4,
                animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StarIcon sx={{ color: theme.palette.secondary.main }} />
                <Typography variant="body1" fontWeight={600}>
                  4.8/5 Rating
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DeliveryDiningIcon sx={{ color: theme.palette.secondary.main }} />
                <Typography variant="body1" fontWeight={600}>
                  30 Min Delivery
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{
                animation: 'fadeInUp 0.8s ease-out 0.6s backwards',
              }}
            >
              <Button
                component={Link}
                to="/menu"
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.text.white,
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  '&:hover': {
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
              >
                ORDER NOW
              </Button>
              <Button
                component={Link}
                to="/menu"
                variant="outlined"
                size="large"
                startIcon={<RestaurantMenuIcon />}
                sx={{
                  borderColor: theme.palette.text.white,
                  color: theme.palette.text.white,
                  borderWidth: '2px',
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  '&:hover': {
                    borderWidth: '2px',
                    borderColor: theme.palette.secondary.main,
                    bgcolor: 'rgba(255, 215, 0, 0.1)',
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                VIEW MENU
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          sx={{ mb: 6, color: theme.palette.text.primary }}
        >
          Why Choose Us?
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
        >
          {[
            { icon: <RestaurantIcon fontSize="large" color="primary" />, title: 'Quality Food', description: 'Fresh ingredients and authentic recipes' },
            { icon: <DeliveryDiningIcon fontSize="large" color="primary" />, title: 'Fast Delivery', description: 'Hot meals delivered to your doorstep' },
            { icon: <ThumbUpIcon fontSize="large" color="primary" />, title: 'Best Service', description: 'Customer satisfaction is our priority' },
          ].map((feature, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                textAlign: 'center',
                p: 4,
                bgcolor: theme.palette.background.paper,
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[2],
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: theme.shadows[6],
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box sx={{ mb: 2, color: theme.palette.primary.main }}>{feature.icon}</Box>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};

export default Home;