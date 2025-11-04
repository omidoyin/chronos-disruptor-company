import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Typography,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(15, 15, 26, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  padding: '0.5rem 0',
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 !important',
});

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.5rem',
  background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  marginRight: '2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  fontWeight: 500,
  fontSize: '1rem',
  margin: '0 0.5rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '70%',
  },
  '&.active': {
    color: '#00bcd4',
    '&::after': {
      width: '70%',
    },
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 280,
  height: '100%',
  background: theme.palette.background.default,
  padding: '2rem 1.5rem',
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle scroll effect
  const handleScroll = () => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const drawer = (
    <DrawerContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Logo>Chronos Disruptor</Logo>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 3, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.name}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: '8px',
              mb: 1,
              bgcolor: location.pathname === item.path ? 'rgba(0, 188, 212, 0.1)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontWeight: 500,
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={RouterLink}
          to="/contact"
          onClick={handleDrawerToggle}
          sx={{
            py: 1.5,
            borderRadius: '8px',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Get Started
        </Button>
      </Box>
    </DrawerContent>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!scrolled}>
        <StyledAppBar position="fixed" elevation={0}>
          <Container maxWidth="lg">
            <StyledToolbar disableGutters>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Logo>Chronos Disruptor</Logo>
              </Box>

              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: 'white',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center">
                    {navItems.map((item) => (
                      <NavButton
                        key={item.name}
                        component={RouterLink}
                        to={item.path}
                        className={location.pathname === item.path ? 'active' : ''}
                      >
                        {item.name}
                      </NavButton>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/contact"
                    sx={{
                      ml: 2,
                      px: 3,
                      py: 1,
                      borderRadius: '8px',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.9375rem',
                      boxShadow: '0 4px 14px rgba(0, 188, 212, 0.4)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(0, 188, 212, 0.5)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              )}
            </StyledToolbar>
          </Container>
        </StyledAppBar>
      </Slide>
      <Toolbar />
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(15, 15, 26, 0.98)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
