import React,{useState} from 'react';
import { Box, Typography,AppBar, Toolbar,IconButton, Drawer } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';



const Header = () => {
  const [mobileOpen,setMobileOpen] = useState(false);
//hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
   
  };
  //menu drawer
const drawer = (
  <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography
     color="goldenrod"
     variant="h6"
     component="div"
     sx={{
      flexGrow: 1,
      my: 2,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 'bold',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center',
      whiteSpace: 'normal', // allow wrapping
      lineHeight: 1.2,
      fontSize: {
      xs: '1.1rem', // small screens
      sm: '1.5rem', // tablets
      md: '2rem',   // desktops
       },
      }}
     >   
       <FastfoodIcon
     sx={{
      fontSize: { xs: '22px', sm: '30px', md: '40px' },
      color: 'orange',
      flexShrink: 0,
     }}
      />
      MY RESTAURANT
    </Typography>


    <Divider sx={{ bgcolor: 'goldenrod', my: 1 }} />
    
      <ul className="mobile-navigation" style={{listStyle: 'none', padding: 0, margin: '16px 0'}} >
        <li>
          <Link to ={'/'}> Home </Link>
        </li>
        <li>
          <Link to ={'/menu'}> Menu </Link>
        </li>
        <li>
          <Link to ={'/about'}> About </Link>
        </li>
        <li>
          <Link to ={'/contact'}> Contact </Link>
        </li>
      </ul>
            
  </Box>
);

return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black", padding: { xs: "6px", sm: "10px" } }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"goldenrod"}
              variant="h4"
              sx={{
               flexGrow: 1,
               display: "flex",
               alignItems: "center",
               justifyContent: { xs: "center", sm: "flex-start" }, // center on phones
               gap: 1,
                 minWidth: 0, // important to allow children to shrink/wrap
              }}
              >
              <FastfoodIcon sx={{ fontSize: "40px", color: "orange" }} />
              MY RESTAURANT
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}>
              <ul
                className="navigation-menu"
                style={{ listStyleType: "none", display: "flex", gap: "30px", margin: 0, padding: 0 }}
              >
                <li>
                  <Link to={"/"}> Home </Link>
                </li>
                <li>
                  <Link to={"/menu"}> Menu </Link>
                </li>
                <li>
                  <Link to={"/about"}> About </Link>
                </li>
                <li>
                  <Link to={"/contact"}> Contact </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
          <Box sx={{ p : 1}}>

           <Toolbar />
          </Box>
       
      </Box>
    </>
  )
  
};

export default Header;
  