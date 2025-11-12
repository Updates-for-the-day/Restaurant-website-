import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Button,
  IconButton,
  Chip,
  Skeleton,
  Snackbar,
  Alert,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MenuList } from "../data/data.js";

const Menu = () => {
  const theme = useTheme();
  const [favorites, setFavorites] = useState([]);
  const [imageLoading, setImageLoading] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const toggleFavorite = (menuId) => {
    setFavorites(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const handleAddToCart = (menuItem) => {
    setSnackbar({ open: true, message: `${menuItem.name} added to cart!` });
  };

  const handleImageLoad = (menuId) => {
    setImageLoading(prev => ({ ...prev, [menuId]: false }));
  };

  return (
    <Layout>
      <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh' }}>
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.white,
            py: { xs: 4, md: 6 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Our Menu
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
            Explore our delicious selection of dishes
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 2, sm: 3, md: 3 },
            p: { xs: 2, sm: 3, md: 4 },
            maxWidth: '1400px',
            mx: 'auto',
          }}
        >
          {MenuList.map((menu) => {
            const description = menu.Description ?? menu.description ?? "";
            const menuId = menu.id ?? menu.name;
            const isFavorite = favorites.includes(menuId);

            return (
              <Card
                key={menuId}
                sx={{
                  height: '100%',
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: theme.shadows[2],
                  borderRadius: theme.shape.borderRadius,
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: 'relative',
                  '&:hover': {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                  },
                  '&:hover .action-bar': {
                    transform: 'translateY(0)',
                    opacity: 1,
                  },
                  bgcolor: theme.palette.background.paper,
                }}
              >
                <CardActionArea
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <Box sx={{ position: 'relative', width: '100%' }}>
                    {imageLoading[menuId] !== false && (
                      <Skeleton 
                        variant="rectangular" 
                        width="100%" 
                        height={240}
                        animation="wave"
                      />
                    )}
                    <CardMedia
                      component="img"
                      image={menu.image}
                      alt={`${menu.name} - Delicious ${menu.name} served at our restaurant`}
                      // loading="lazy"s
                      onLoad={() => handleImageLoad(menuId)}
                      sx={{
                        height: 240,
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: imageLoading[menuId] === false ? 'block' : 'none',
                      }}
                    />
                    
                    <IconButton
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(menuId);
                      }}
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(4px)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 1)',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.2s',
                      }}
                      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      {isFavorite ? (
                        <FavoriteIcon sx={{ color: theme.palette.error.main }} />
                      ) : (
                        <FavoriteBorderIcon sx={{ color: theme.palette.text.secondary }} />
                      )}
                    </IconButton>

                    <Chip
                      label="Popular"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      justifyContent: "space-between",
                      p: 2,
                    }}
                  >
                    <Box>
                      <Typography 
                        variant="h6" 
                        component="h2" 
                        gutterBottom 
                        sx={{ color: theme.palette.text.primary, fontWeight: 600, mb: 1 }}
                      >
                        {menu.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                          mb: 2,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          minHeight: '40px',
                        }}
                      >
                        {description || "Delicious and freshly prepared dish"}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography 
                        variant="h6" 
                        fontWeight="bold" 
                        sx={{ color: theme.palette.primary.main }}
                      >
                        ₹{menu.price}
                      </Typography>
                      
                      <Button
                        variant="contained"
                        size="small"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart(menu);
                        }}
                        startIcon={<AddShoppingCartIcon />}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                      >
                        Add
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>

                <Box
                  className="action-bar"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.9)',
                    backdropFilter: 'blur(8px)',
                    p: 1.5,
                    transform: 'translateY(100%)',
                    opacity: 0,
                    transition: 'all 0.3s ease-in-out',
                    display: { xs: 'none', md: 'flex' },
                    gap: 1,
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => handleAddToCart(menu)}
                    sx={{
                      bgcolor: theme.palette.secondary.main,
                      color: theme.palette.secondary.contrastText,
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: theme.palette.secondary.dark,
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default Menu;