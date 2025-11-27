import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Tabs, Tab, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, Code, DesignServices, Cloud, Smartphone, Security, Analytics } from '@mui/icons-material';

// Using a placeholder image URL
const servicesHero = 'https://via.placeholder.com/800x500/0f0f1a/00bcd4?text=Our+Services';

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0, 10),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '500px',
    background: 'linear-gradient(180deg, rgba(0,188,212,0.1) 0%, rgba(0,0,0,0) 100%)',
    zIndex: -1,
  },
}));

const SectionTitle = styled(Typography)(() => ({
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: 0,
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
    borderRadius: '2px',
  },
}));

const ServiceCard = styled(Card)(() => ({
  height: '100%',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(0, 188, 212, 0.5)',
    '& .service-icon': {
      transform: 'scale(1.1) rotate(5deg)',
    },
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(15,15,26,0.1) 100%)',
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
  },
}));

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies to deliver exceptional user experiences and business results.',
    icon: <Code />,
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Performance Optimization',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
    icon: <Smartphone />,
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Enterprise Mobility',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and drive conversions through exceptional design thinking.',
    icon: <DesignServices />,
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'UI/UX Design',
      'Design Systems',
      'Usability Testing',
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to optimize performance, security, and cost-efficiency.',
    icon: <Cloud />,
    features: [
      'Cloud Migration',
      'AWS/Azure/GCP Services',
      'Serverless Architecture',
      'DevOps & CI/CD',
      'Cloud Security',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    icon: <Analytics />,
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Big Data Solutions',
      'Data Warehousing',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
    icon: <Security />,
    features: [
      'Security Audits',
      'Penetration Testing',
      'Data Protection',
      'Security Training',
      'Incident Response',
    ],
  },
];

const Services = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const filteredServices = tabValue === 0 
    ? services 
    : services.filter(service => 
        tabValue === 1 ? ['web-development', 'mobile-apps', 'ui-ux-design'].includes(service.id)
        : tabValue === 2 ? ['cloud-solutions', 'data-analytics', 'cybersecurity'].includes(service.id)
        : services
      );

  return (
    <Box>
      {/* Hero Section */}
      <ServicesSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: '40px',
                      height: '2px',
                      bgcolor: 'primary.main',
                      mr: 2,
                    }}
                  />
                  Our Services
                </Typography>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3 }}>
                  Transform Your Business with Our <Box component="span" sx={{ color: 'primary.main' }}>Expert Solutions</Box>
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
                  We deliver cutting-edge technology solutions tailored to your business needs, helping you stay ahead in the digital landscape.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowRight />}
                  sx={{
                    borderRadius: '8px',
                    py: 1.5,
                    px: 4,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 4px 14px rgba(0, 188, 212, 0.4)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(0, 188, 212, 0.5)',
                    },
                  }}
                >
                  Get a Free Consultation
                </Button>
              </motion.div>
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Box
                    component="img"
                    src={servicesHero}
                    alt="Services"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                      filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))',
                    }}
                  />
                </motion.div>
              </Grid>
            )}
          </Grid>
        </Container>
      </ServicesSection>

      {/* Services Grid */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <SectionTitle variant="h4" sx={{ mb: 2 }}>
              Our Services
            </SectionTitle>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              We offer a comprehensive range of services to help your business thrive in the digital age.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered={!isMobile}
              variant={isMobile ? 'scrollable' : 'standard'}
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-flexContainer': {
                  justifyContent: 'center',
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 500,
                  minWidth: 'auto',
                  mx: 1,
                  mb: 1,
                  borderRadius: '8px',
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              <Tab label="All Services" />
              <Tab label="Development" />
              <Tab label="Cloud & Data" />
            </Tabs>
          </Box>

          <Grid container spacing={4}>
            {filteredServices.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard elevation={0}>
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <ServiceIcon className="service-icon">
                        {service.icon}
                      </ServiceIcon>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                        {service.description}
                      </Typography>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                          Key Features:
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, mb: 3, '& li': { mb: 0.5, color: 'text.secondary', fontSize: '0.875rem' } }}>
                          {service.features.slice(0, 3).map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </Box>
                      </Box>
                      <Button
                        component={RouterLink}
                        to={`/services/${service.id}`}
                        endIcon={<ArrowRight />}
                        size="small"
                        sx={{
                          mt: 'auto',
                          alignSelf: 'flex-start',
                          color: 'primary.main',
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            color: 'primary.light',
                            '& .MuiSvgIcon-root': {
                              transform: 'translateX(4px)',
                            },
                          },
                          '& .MuiSvgIcon-root': {
                            transition: 'transform 0.3s ease',
                            fontSize: '1rem',
                            ml: 0.5,
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </ServiceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(15,15,26,0.1) 100%)' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(255,64,129,0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 30%, rgba(0, 188, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 64, 129, 0.1) 0%, transparent 50%)',
                zIndex: 0,
              },
            }}
          >
            <Box position="relative" zIndex={1}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
                Ready to Start Your Project?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
                Let's discuss how we can help you achieve your business goals with our expert technology solutions.
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowRight />}
                sx={{
                  borderRadius: '8px',
                  py: 1.5,
                  px: 6,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(0, 188, 212, 0.4)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0, 188, 212, 0.5)',
                  },
                }}
              >
                Get a Free Consultation
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
