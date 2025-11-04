import * as React from 'react';
import { Link as RouterLink, useLocation, LinkProps as RouterLinkProps } from 'react-router-dom';
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
  ListItemButton,
  ListItemText,
  Slide,
  useTheme,
  useMediaQuery,
  Typography,
  Divider,
  ButtonProps,
  ButtonBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

// Type for NavButton props
type NavButtonProps = Omit<ButtonProps, 'component'> & {
  component?: React.ElementType;
  to?: string;
};

// Create a custom button that works with React Router
const RouterButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(({
  component: Component = Button,
  to,
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      component={to ? RouterLink : 'button'}
      to={to}
      {...props}
    />
  );
});

RouterButton.displayName = 'RouterButton';

// Create a styled NavButton
const NavButton = styled(RouterButton)({
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
});

// Create a custom Link component that works with React Router and MUI
const LinkBehavior = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink ref={ref} {...props} role={undefined} />
));

LinkBehavior.displayName = 'LinkBehavior';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const StyledAppBar = styled(AppBar)({
  background: 'rgba(15, 15, 26, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  padding: '0.5rem 0',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 !important',
});

const Logo = styled(Typography)({
  fontWeight: 800,
  fontSize: '1.5rem',
  background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  marginRight: '2rem',
  '@media (max-width: 600px)': {
    fontSize: '1.25rem',
  },
});

const DrawerContent = styled(Box)({
  width: 280,
  height: '100%',
  padding: '2rem 1.5rem',
  background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
});

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set display name for the component
  (Navbar as React.FC & { displayName: string }).displayName = 'Navbar';

  const drawer = (
    <DrawerContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box component={RouterLink} to="/" sx={{ height: '60px', display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}>
          <img 
            src="/company_logo.png" 
            alt="VeleonEX Logo" 
            style={{ 
              height: '100%', 
              width: 'auto',
              objectFit: 'contain'
            }} 
          />
          <Box 
            component="span"
            sx={{
              display: 'inline-block',
              position: 'relative',
              fontFamily: 'inherit',
              '& span': {
                display: 'inline-block',
                position: 'relative',
                color: 'white',
                fontWeight: 700,
                background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                transform: 'rotate(-2deg)',
                transformOrigin: 'left center',
                '&:nth-of-type(2n)': {
                  transform: 'rotate(2deg)',
                  position: 'relative',
                  top: '-0.1em'
                }
              }
            }}
          >
            {'VeleonEX'.split('').map((char, i) => (
              <Box 
                key={i} 
                component="span"
                sx={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: `translateY(${i % 2 ? '-3px' : '3px'})`,
                  }
                }}
              >
                {char}
              </Box>
            ))}
          </Box>
        </Box>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 3, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            sx={{
              mb: 1,
              borderRadius: '8px',
              bgcolor: location.pathname === item.path ? 'rgba(0, 188, 212, 0.1)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ListItemButton
              component={LinkBehavior}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: '8px',
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={LinkBehavior}
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
                  height: '100px',
                  
                }}
              >
                <img 
                  src="/company_logo.png" 
                  alt="VeleonEX Logo" 
                  style={{ 
                    height: '100%', 
                    width: 'auto',
                    objectFit: 'fill'
                  }} 
                />
                <Box 
                  component="span"
                  sx={{
                    display: 'inline-block',
                    position: 'relative',
                    fontFamily: 'inherit',
                    '& span': {
                      display: 'inline-block',
                      position: 'relative',
                      color: 'white',
                      fontWeight: 700,
                      background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      transform: 'rotate(-2deg)',
                      transformOrigin: 'left center',
                      '&:nth-of-type(2n)': {
                        transform: 'rotate(2deg)',
                        position: 'relative',
                        top: '-0.1em'
                      }
                    }
                  }}
                >
                  {'VeleonEX'.split('').map((char, i) => (
                    <Box 
                      key={i} 
                      component="span"
                      sx={{
                        display: 'inline-block',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: `translateY(${i % 2 ? '-3px' : '3px'})`,
                        }
                      }}
                    >
                      {char}
                    </Box>
                  ))}
                </Box>
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
                        component={LinkBehavior}
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
                    component={LinkBehavior}
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
          keepMounted: true,
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
