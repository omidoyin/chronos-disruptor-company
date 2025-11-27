import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { KeyboardArrowRight, RocketLaunch, Code, Cloud, Security } from '@mui/icons-material';

// Using a placeholder image URL
const HeroImage = 'https://via.placeholder.com/800x600/0A0F29/C9CCD6?text=Welcome+to+VeleonEX';

const HeroSection = styled(Box)(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '80px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 30%, rgba(0, 188, 212, 0.15) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(255, 64, 129, 0.15) 0%, transparent 30%)',
    zIndex: -1,
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
    title: 'Innovative Solutions',
    description: 'We create cutting-edge technology solutions that drive business growth and innovation.',
  },
  {
    icon: <Code sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Expert Development',
    description: 'Our team of experienced developers delivers high-quality, scalable, and maintainable code.',
  },
  {
    icon: <Cloud sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Cloud Native',
    description: 'We build cloud-native applications that scale effortlessly with your business needs.',
  },
  {
    icon: <Security sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />,
    title: 'Secure by Design',
    description: 'Security is at the core of everything we build, ensuring your data is always protected.',
  },
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Building The Future
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    .
                  </Box>
                </TypographyMotion>

                <TypographyMotion
                  variant="h4"
                  component={motion.h2}
                  color="text.secondary"
                  sx={{ mb: 4, fontWeight: 400 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We help businesses transform through innovative technology solutions and digital experiences that matter.
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
                    component="img"
                    src={HeroImage}
                    alt="Hero Illustration"
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
      </HeroSection>

      {/* Features Section */}
      <Box sx={{ py: 10, position: 'relative' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Our Services
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              What We Offer
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '700px', mx: 'auto' }}
            >
              We provide comprehensive technology solutions to help your business thrive in the digital age.
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
