import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Facebook, Twitter, LinkedIn, GitHub, Email, Phone, LocationOn } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  borderTop: `1px solid ${theme.palette.divider}`,
  background: 'linear-gradient(180deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 15, 26, 1) 100%)',
  backdropFilter: 'blur(10px)',
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: '40px',
    height: '3px',
    background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
    borderRadius: '2px',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: 'block',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(5px)',
    textDecoration: 'none',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  marginRight: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    transform: 'translateY(-3px)',
    boxShadow: `0 5px 15px ${theme.palette.primary.main}40`,
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  '& svg': {
    marginRight: theme.spacing(1.5),
    color: theme.palette.primary.main,
    fontSize: '1.2rem',
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Apps', path: '/services/mobile-apps' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { name: 'AI & ML', path: '/services/ai-ml' },
  ];

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <FooterTitle variant="h6" gutterBottom>
              VeleonEX
            </FooterTitle>
            <Typography variant="body2" color="text.secondary" paragraph>
              Timeless Innovation. Infinite Experience. Building intelligent, human-centered experiences that evolve with the future.
            </Typography>
            <Box mt={2}>
              <SocialIcon aria-label="Facebook">
                <Facebook />
              </SocialIcon>
              <SocialIcon aria-label="Twitter">
                <Twitter />
              </SocialIcon>
              <SocialIcon aria-label="LinkedIn">
                <LinkedIn />
              </SocialIcon>
              <SocialIcon aria-label="GitHub">
                <GitHub />
              </SocialIcon>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <FooterTitle variant="h6" gutterBottom>
              Quick Links
            </FooterTitle>
            {quickLinks.map((link) => (
              <FooterLink href={link.path} key={link.name}>
                {link.name}
              </FooterLink>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6" gutterBottom>
              Our Services
            </FooterTitle>
            {services.map((service) => (
              <FooterLink href={service.path} key={service.name}>
                {service.name}
              </FooterLink>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6" gutterBottom>
              Contact Us
            </FooterTitle>
            <ContactItem>
              <LocationOn />
              <Typography variant="body2">
                123 Tech Street, Silicon Valley, CA 94025, USA
              </Typography>
            </ContactItem>
            <ContactItem>
              <Phone />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </ContactItem>
            <ContactItem>
              <Email />
              <Typography variant="body2">info@chronosdisruptor.com</Typography>
            </ContactItem>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Chronos Disruptor. All rights reserved.
          </Typography>
          <Box mt={{ xs: 2, sm: 0 }}>
            <FooterLink href="/privacy-policy" sx={{ display: 'inline', mr: 2 }}>
              Privacy Policy
            </FooterLink>
            <FooterLink href="/terms" sx={{ display: 'inline', mr: 2 }}>
              Terms of Service
            </FooterLink>
            <FooterLink href="/cookies" sx={{ display: 'inline' }}>
              Cookie Policy
            </FooterLink>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
