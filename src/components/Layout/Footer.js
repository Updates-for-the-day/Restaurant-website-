import React from 'react';
import { Typography,Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{
        textAlign: 'center',
        bgcolor:'#1A1A19',
        color: 'white',
        p: 3,
        
      }}>
        <Box sx={{my:3, "& svg": { fontSize: "35px", cursor: "pointer", mr: 2, color: "white" },
         "& svg:hover": { color: "goldenrod", transform: "translateX(5px)", transition: "all 400ms", }
    }}>
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <YouTubeIcon />
        </Box>
        <Typography variant="h6"> 
            All Rights Reserved &copy; 2025 Resturant App.
        </Typography>
    </Box>
    </>
  );
};

export default Footer