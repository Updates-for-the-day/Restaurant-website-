import React, { useState } from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton, Drawer, Divider, Button, useTheme, Badge } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const cartItemCount = 4;

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  const isActive = (path) => location.pathname === path;

  const navigationLinks = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/menu' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 'bold',
          }}
        >
          <FastfoodIcon sx={{ fontSize: '28px', color: 'orange' }} />
          MY RESTAURANT
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle} 
          aria-label="Close menu"
          sx={{ color: theme.palette.text.primary }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: theme.palette.secondary.main }} />

      <Box sx={{ flexGrow: 1, py: 2 }}>
        {navigationLinks.map((item) => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              display: 'block',
              width: '100%',
              py: 2,
              px: 3,
              textAlign: 'left',
              color: isActive(item.path) ? theme.palette.secondary.main : theme.palette.text.primary,
              bgcolor: isActive(item.path) ? `${theme.palette.secondary.main}20` : 'transparent',
              borderLeft: isActive(item.path) ? `4px solid ${theme.palette.secondary.main}` : '4px solid transparent',
              fontWeight: isActive(item.path) ? 600 : 500,
              fontSize: '1.05rem',
              '&:hover': {
                bgcolor: `${theme.palette.secondary.main}15`,
                color: theme.palette.secondary.main,
                borderLeft: `4px solid ${theme.palette.secondary.main}`,
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {item.text}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="sticky">
        <Toolbar sx={{ py: { xs: 0.5, sm: 1 } }}>
          <IconButton
            color="inherit"
            aria-label="Open navigation menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            color={theme.palette.secondary.main}
            variant="h5"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: 1,
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <FastfoodIcon sx={{
              fontSize: { xs: "32px", sm: "40px" },
              color: 'orange',
            }} />
            MY RESTAURANT
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center', gap: 1 }}>
            {navigationLinks.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? theme.palette.secondary.main : theme.palette.text.white,
                  fontSize: '1rem',
                  fontWeight: isActive(item.path) ? 600 : 500,
                  px: 2,
                  py: 1,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isActive(item.path) ? '80%' : '0%',
                    height: '3px',
                    bgcolor: theme.palette.secondary.main,
                    transition: 'width 0.3s ease-in-out',
                    borderRadius: '2px 2px 0 0',
                  },
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    bgcolor: 'transparent',
                    '&::after': {
                      width: '80%',
                    },
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                {item.text}
              </Button>
            ))}
            <IconButton
              aria-label={`Shopping cart with ${cartItemCount} items`}
              color="inherit"
              sx={{ ml: 1 }}
            >
              <Badge badgeContent={cartItemCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;