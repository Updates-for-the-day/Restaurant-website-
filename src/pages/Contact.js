import React from 'react';
import Layout from '../components/Layout/Layout';
import { 
  Typography, 
  Box, 
  TableContainer, 
  TableBody, 
  TableRow, 
  TableCell, 
  TableHead, 
  Paper, 
  Table, 
  useTheme,
  Container,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: 'Address',
      content: '123 Foodie Lane, Flavor Town, FT 45678',
      color: theme.palette.primary.main,
    },
    {
      icon: <CallIcon />,
      title: 'Phone',
      content: '(123) 456-7890',
      color: theme.palette.success.main,
    },
    {
      icon: <MailIcon />,
      title: 'Email',
      content: 'help@myrest.com',
      color: theme.palette.info.main,
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Hours',
      content: 'Mon-Sun: 10:00 AM - 10:00 PM',
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Layout>
      <Box sx={{ bgcolor: theme.palette.background.default }}>
        {/* Hero Section */}
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
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              We'd love to hear from you! Reach out for reservations, inquiries, or feedback.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          {/* Quick Contact Info Cards */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: `${info.color}15`,
                        mb: 2,
                        '& svg': { 
                          fontSize: '2rem',
                          color: info.color,
                        },
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Detailed Contact Table */}
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h4" gutterBottom textAlign="center" fontWeight={600} mb={4}>
              Get in Touch
            </Typography>

            <TableContainer 
              component={Paper} 
              sx={{ 
                borderRadius: theme.shape.borderRadius, 
                boxShadow: theme.shadows[4],
                overflow: 'hidden',
              }}
            >
              <Table aria-label="contact information table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.text.white,
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        py: 3,
                      }}
                      align='center'
                    >
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ '&:hover': { bgcolor: theme.palette.background.elevated } }}>
                    <TableCell sx={{ py: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            bgcolor: `${theme.palette.primary.main}15`,
                            flexShrink: 0,
                          }}
                        >
                          <LocationOnIcon sx={{ color: theme.palette.primary.main }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary" fontSize="0.85rem">
                            Restaurant Address
                          </Typography>
                          <Typography variant="body1" fontWeight={500}>
                            123 Foodie Lane, Flavor Town, FT 45678
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:hover': { bgcolor: theme.palette.background.elevated } }}>
                    <TableCell sx={{ py: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            bgcolor: `${theme.palette.success.main}15`,
                            flexShrink: 0,
                          }}
                        >
                          <CallIcon sx={{ color: theme.palette.success.main }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary" fontSize="0.85rem">
                            Phone Number
                          </Typography>
                          <Typography variant="body1" fontWeight={500}>
                            (123) 456-7890
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:hover': { bgcolor: theme.palette.background.elevated } }}>
                    <TableCell sx={{ py: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            bgcolor: `${theme.palette.info.main}15`,
                            flexShrink: 0,
                          }}
                        >
                          <MailIcon sx={{ color: theme.palette.info.main }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary" fontSize="0.85rem">
                            Email Address
                          </Typography>
                          <Typography variant="body1" fontWeight={500}>
                            help@myrest.com
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:hover': { bgcolor: theme.palette.background.elevated } }}>
                    <TableCell sx={{ py: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            bgcolor: `${theme.palette.error.main}15`,
                            flexShrink: 0,
                          }}
                        >
                          <SupportAgentIcon sx={{ color: theme.palette.error.main }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary" fontSize="0.85rem">
                            Customer Support (Toll Free)
                          </Typography>
                          <Typography variant="body1" fontWeight={500}>
                            1234567890
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ '&:hover': { bgcolor: theme.palette.background.elevated } }}>
                    <TableCell sx={{ py: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            bgcolor: `${theme.palette.warning.main}15`,
                            flexShrink: 0,
                          }}
                        >
                          <AccessTimeIcon sx={{ color: theme.palette.warning.main }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary" fontSize="0.85rem">
                            Business Hours
                          </Typography>
                          <Typography variant="body1" fontWeight={500}>
                            Monday - Sunday: 10:00 AM - 10:00 PM
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Additional Info */}
          <Box
            sx={{
              mt: 8,
              p: 4,
              bgcolor: theme.palette.background.paper,
              borderRadius: theme.shape.borderRadius,
              textAlign: 'center',
              boxShadow: theme.shadows[2],
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Questions or Special Requests?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Feel free to reach out to us via phone or email. We're here to make your dining 
              experience exceptional. For reservations or catering inquiries, please call us directly.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Contact;