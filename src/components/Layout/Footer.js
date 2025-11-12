import React from 'react';
import { Typography, Box, useTheme, IconButton, Container, Stack, Link as MuiLink } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://instagram.com', label: 'Visit our Instagram' },
    { icon: <TwitterIcon />, url: 'https://twitter.com', label: 'Follow us on Twitter' },
    { icon: <GitHubIcon />, url: 'https://github.com', label: 'Check our GitHub' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com', label: 'Subscribe to YouTube' },
  ];

  const footerLinks = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/menu' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.text.white,
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          sx={{ mb: 4 }}
        >
          {/* Brand Section */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '400px' }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              MY RESTAURANT
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Serving delicious food with passion since 2010. 
              Quality ingredients, authentic flavors, and exceptional service.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {footerLinks.map((link) => (
                <MuiLink
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: theme.palette.text.white,
                    textDecoration: 'none',
                    opacity: 0.9,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      opacity: 1,
                      color: theme.palette.secondary.main,
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  {link.text}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              123 Foodie Lane
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Flavor Town, FT 45678
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Email: help@myrest.com
            </Typography>
          </Box>
        </Stack>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mb: 4,
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              sx={{
                color: theme.palette.text.white,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  bgcolor: theme.palette.secondary.main,
                  color: theme.palette.text.primary,
                  transform: 'translateY(-5px) scale(1.1)',
                },
                '&:focus-visible': {
                  outline: `2px solid ${theme.palette.secondary.main}`,
                  outlineOffset: '2px',
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: '1px',
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            mb: 3,
          }}
        />

        {/* Copyright */}
        <Typography 
          variant="body2" 
          textAlign="center" 
          sx={{ 
            opacity: 0.8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            flexWrap: 'wrap',
          }}
        >
          <span>© {new Date().getFullYear()} My Restaurant. All Rights Reserved.</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Made with 
            <FavoriteIcon sx={{ fontSize: '1rem', color: theme.palette.error.light }} />
            for food lovers
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;