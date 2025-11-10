import React from 'react';
import Layout from '../components/Layout/Layout';
import { Typography, Box, TableContainer, TableBody,TableRow,TableCell,TableHead, Paper, Table } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 15, ml: 10, "& h4": { fontWeight: "bold",mb:2 }}} >
        <Typography variant='h4'>
          Contact My Restaurant!
        </Typography>
        <p>
          You can reach us at Phone  : (123) 456-7890 or Email  :  srinischitha.n2004@gmail.com
        </p>
      </Box>
      <Box sx={{ my: 5, width:"600px", ml:10,"@media (max-width:600px)":{width:"300px"}}} > 
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white', fontSize: 18 }} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Address: 123 Foodie Lane, Flavor Town, FT 45678
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{color:'green',pt:1}}/>
                  Phone: (123) 456-7890
                </TableCell>
              </TableRow>
               <TableCell>
                <MailIcon sx={{color:'skyblue',pt:1}}/>
                  help@myrest.com
              </TableCell>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt:1}}/> Customer Support:1234567890(TollFree)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        </Layout>
  )
}

export default Contact;