import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery, Tabs, Tab, Chip, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { KeyboardArrowRight, RocketLaunch, Code, Cloud, Security, Smartphone, DesignServices, ArrowRight, Launch } from '@mui/icons-material';

// Using a placeholder image URL
const HeroImage = 'https://via.placeholder.com/800x600/0A0F29/C9CCD6?text=Welcome+to+VeleonEX';

const HeroSection = styled(Box)(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '80px',
  backgroundColor: '#0A0F29', // Midnight Blue - Keeping dark background
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 30%, rgba(0, 188, 212, 0.15) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(255, 64, 129, 0.15) 0%, transparent 30%)', // Revert to Cyan/Pink
    zIndex: 0,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
  },
}));

// Properly type the motion component for Typography


// Extend the Typography props to include motion props
interface AnimatedTextProps extends React.ComponentProps<typeof Typography> {
  component?: React.ElementType;
  initial?: any;
  animate?: any;
  transition?: any;
}

// Create a properly typed version of AnimatedText
const TypographyMotion = motion(Typography) as React.FC<AnimatedTextProps>;

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  height: '100%',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(0, 188, 212, 0.5)',
  },
}));

const featureItems = [
  {
    icon: <RocketLaunch sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Timeless Design',
    description: 'We create systems built to last, not just to launch. Technology that endures.',
  },
  {
    icon: <Code sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Velocity of Thought',
    description: 'We move fast — but with clarity and purpose. Speed that never fades.',
  },
  {
    icon: <Cloud sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Human Experience',
    description: 'Every line of code, every product, begins with empathy. Innovation that feels natural.',
  },
  {
    icon: <Security sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Future Consciousness',
    description: 'Our work prepares the world for what’s next. Technology that evolves.',
  },
];

const ServiceCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '16px',
  padding: theme.spacing(4),
  height: '100%',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
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
  width: '70px',
  height: '70px',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(15,15,26,0.1) 100%)',
  transition: 'all 0.3s ease',
  '& svg': {
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
}));

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies to deliver exceptional user experiences.',
    icon: <Code />,
    link: '/services/web-development'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences.',
    icon: <Smartphone />,
    link: '/services/mobile-apps'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and drive conversions.',
    icon: <DesignServices />,
    link: '/services/ui-ux-design'
  }
];

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(0, 188, 212, 0.5)',
    '& .project-image': {
      transform: 'scale(1.05)',
    },
  },
}));

const projects = [
  {
    id: 1,
    title: 'FinEdge Banking',
    industry: 'FinTech',
    image: 'https://via.placeholder.com/600x400/0A0F29/00bcd4?text=FinTech+App',
    description: 'A next-gen banking platform with AI-driven insights and real-time transaction monitoring.',
    link: '/portfolio/finedge'
  },
  {
    id: 2,
    title: 'MediCare Connect',
    industry: 'HealthTech',
    image: 'https://via.placeholder.com/600x400/0A0F29/00bcd4?text=Health+Platform',
    description: 'Telemedicine solution connecting patients with specialists via secure video consultations.',
    link: '/portfolio/medicare'
  },
  {
    id: 3,
    title: 'Shopify Plus Custom',
    industry: 'E-commerce',
    image: 'https://via.placeholder.com/600x400/0A0F29/00bcd4?text=E-commerce',
    description: 'High-performance headless commerce storefront designed for maximum conversion.',
    link: '/portfolio/shop-plus'
  },
  {
    id: 4,
    title: 'CryptoVault',
    industry: 'Blockchain',
    image: 'https://via.placeholder.com/600x400/0A0F29/00bcd4?text=Crypto+Wallet',
    description: 'Secure multi-chain wallet with biometric authentication and decentralized exchange integration.',
    link: '/portfolio/cryptovault'
  }
];

const industries = ['All', 'FinTech', 'HealthTech', 'E-commerce', 'Blockchain'];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [projectTab, setProjectTab] = useState(0);

  const handleProjectTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setProjectTab(newValue);
  };

  const filteredProjects = projectTab === 0
    ? projects
    : projects.filter(p => p.industry === industries[projectTab]);

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <HeroContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                    Welcome to VeleonEX
                  </Typography>
                </motion.div>

                <TypographyMotion
                  variant="h1"
                  component={motion.h1}
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: 'linear-gradient(90deg, #ffffff, #b5b5b5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Timeless Innovation.
                  <Box component="span" sx={{ display: 'block', color: 'primary.main', WebkitTextFillColor: 'initial' }}>
                    Infinite Experience.
                  </Box>
                </TypographyMotion>

                <TypographyMotion
                  variant="h4"
                  component={motion.h2}
                  color="text.secondary"
                  sx={{ mb: 4, fontWeight: 400, fontFamily: '"Inter", sans-serif', fontSize: '1.5rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Technology that transcends time. We build systems that evolve, adapt, and enrich human life.
                </TypographyMotion>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Button
                      component={RouterLink}
                      to="/contact"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<KeyboardArrowRight />}
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
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      component={RouterLink}
                      to="/services"
                      variant="outlined"
                      color="primary"
                      size="large"
                      sx={{
                        borderRadius: '8px',
                        py: 1.5,
                        px: 4,
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1rem',
                        borderWidth: '2px',
                        '&:hover': {
                          borderWidth: '2px',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Box>
              </HeroContent>
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Box
                    component="video"
                    src="/hero_company_logo_animated.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                      borderRadius: '20px',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    }}
                  />
                </motion.div>
              </Grid>
            )}
          </Grid>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Box sx={{ py: 10, position: 'relative' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: 'primary.main', fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Our DNA
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3, fontFamily: '"Space Grotesk", sans-serif' }}>
              The VeleonEX Standard
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto', fontFamily: '"Inter", sans-serif' }}
            >
              We don't just build software. We craft enduring experiences driven by our core values.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {featureItems.map((feature, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureCard>
                    {feature.icon}
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </FeatureCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Preview Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: 'primary.main', fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Expertise
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3, fontFamily: '"Space Grotesk", sans-serif' }}>
              Our Services
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto', fontFamily: '"Inter", sans-serif' }}
            >
              Comprehensive technology solutions tailored to your business needs.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard>
                    <ServiceIcon className="service-icon">
                      {service.icon}
                    </ServiceIcon>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, fontFamily: '"Space Grotesk", sans-serif' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, fontFamily: '"Inter", sans-serif' }}>
                      {service.description}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to={service.link}
                      endIcon={<ArrowRight />}
                      sx={{
                        alignSelf: 'flex-start',
                        textTransform: 'none',
                        fontWeight: 600,
                        p: 0,
                        '&:hover': {
                          bgcolor: 'transparent',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </ServiceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box textAlign="center" mt={6}>
            <Button
              component={RouterLink}
              to="/services"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                borderRadius: '8px',
                py: 1.5,
                px: 4,
                fontWeight: 600,
                textTransform: 'none',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 2, color: 'primary.main', fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Our Work
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3, fontFamily: '"Space Grotesk", sans-serif' }}>
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto', fontFamily: '"Inter", sans-serif' }}
            >
              Explore how we've helped clients across various industries achieve their digital goals.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Tabs
              value={projectTab}
              onChange={handleProjectTabChange}
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
                  fontFamily: '"Inter", sans-serif',
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              {industries.map((industry, index) => (
                <Tab key={index} label={industry} />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard>
                    <Box sx={{ overflow: 'hidden', position: 'relative', pt: '56.25%' }}>
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        className="project-image"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                        }}
                      >
                        <Chip
                          label={project.industry}
                          color="primary"
                          size="small"
                          sx={{ fontWeight: 600, backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 188, 212, 0.8)' }}
                        />
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, fontFamily: '"Space Grotesk", sans-serif' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Inter", sans-serif' }}>
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        component={RouterLink}
                        to={project.link}
                        endIcon={<Launch />}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: 'transparent',
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        View Case Study
                      </Button>
                    </CardActions>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(15, 15, 26, 0.1) 100%)' }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mb: 4 }}>
              Let's work together to create something amazing. Contact us today to discuss your project and how we can help you achieve your goals.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<KeyboardArrowRight />}
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
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
