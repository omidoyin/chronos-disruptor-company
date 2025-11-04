import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Stack, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, CheckCircle, Group, EmojiObjects, ThumbUp } from '@mui/icons-material';

// Using a placeholder image URL
const aboutImage = 'https://via.placeholder.com/600x500/0f0f1a/00bcd4?text=About+Us';

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
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

const SectionTitle = styled(Typography)(({ theme }) => ({
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

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  '& svg': {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(0.5),
    flexShrink: 0,
  },
}));

const TeamMember = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.03)',
  },
}));

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '15+', label: 'Team Members' },
  { value: '5+', label: 'Years Experience' },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(15,15,26,0.1) 100%)',
          padding: theme.spacing(15, 0, 10),
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
                  About Us
                </Typography>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3 }}>
                  We Are <Box component="span" sx={{ color: 'primary.main' }}>Chronos Disruptor</Box>
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
                  A team of passionate innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
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
                  Get in Touch
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
                    src={aboutImage}
                    alt="About Us"
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
      </Box>

      {/* Our Story */}
      <AboutSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SectionTitle variant="h4" component="h2" sx={{ mb: 4 }}>
                  Our Story
                </SectionTitle>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Founded in 2020, Chronos Disruptor began as a small team of passionate technologists with a shared vision to revolutionize the way businesses leverage technology. What started as a modest startup has now grown into a leading technology solutions provider, serving clients across various industries.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our journey has been marked by innovation, dedication, and a relentless pursuit of excellence. We've had the privilege of working with startups and established enterprises alike, helping them navigate the complex digital landscape and achieve their business objectives.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={3}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} sm={3} key={index}>
                        <Box textAlign="center">
                          <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    To empower businesses through innovative technology solutions that drive growth, efficiency, and transformation in an ever-evolving digital landscape.
                  </Typography>
                  <FeatureItem>
                    <CheckCircle />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Innovation at Core
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
                      </Typography>
                    </Box>
                  </FeatureItem>
                  <FeatureItem>
                    <Group />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Client-Centric Approach
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Your success is our priority. We work closely with you to understand your unique needs.
                      </Typography>
                    </Box>
                  </FeatureItem>
                  <FeatureItem>
                    <EmojiObjects />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Creative Problem Solving
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We tackle complex challenges with innovative and practical solutions.
                      </Typography>
                    </Box>
                  </FeatureItem>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>

      {/* Our Team */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <SectionTitle variant="h4" component="h2" sx={{ mb: 2 }}>
              Meet Our Team
            </SectionTitle>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Our team of experts brings together diverse skills and experiences to deliver exceptional results for our clients.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamMember>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 150,
                        height: 150,
                        mx: 'auto',
                        mb: 3,
                        border: '3px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 5px 15px rgba(0, 188, 212, 0.3)',
                      }}
                    />
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                      {member.role}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                        <i className="fab fa-linkedin-in" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                        <i className="fab fa-twitter" />
                      </IconButton>
                      <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                        <i className="fab fa-github" />
                      </IconButton>
                    </Stack>
                  </TeamMember>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(15,15,26,0.1) 100%)' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              p: 4,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(255,64,129,0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Join Our Team
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
              We're always looking for talented individuals to join our growing team. Check out our open positions and become part of our success story.
            </Typography>
            <Button
              component={RouterLink}
              to="/careers"
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
              View Open Positions
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
