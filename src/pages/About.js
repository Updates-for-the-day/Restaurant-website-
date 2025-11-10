import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{ my: 15, textAlign: 'center', 
      "& h4": { fontWeight: 'bold', mb: 2 }, "& p": { textAlign: 'justify' },  mx: 'auto', width: { xs: '90%', md: '60%' },
       "@media(max-width:600px)": { mt: 0 } ,
        p: 2 }} >
        <Typography variant='h4'>
          Welcome to My Restaurant! 

        </Typography>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br/>
        <p>
          lorem100 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
          

      </Box>
        <h1>

        </h1>
    </Layout>
  )
}

export default About;