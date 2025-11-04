import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent, useTheme, useMediaQuery, Divider, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Send, LocationOn, Email, Phone, Schedule } from '@mui/icons-material';

// Using a placeholder image URL
const contactImage = 'https://via.placeholder.com/600x400/0f0f1a/00bcd4?text=Contact+Us';

const ContactSection = styled(Box)(({ theme }) => ({
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

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(0, 188, 212, 0.5)',
  },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSnackbarMessage('Your message has been sent successfully!');
      setIsError(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSnackbarMessage('Failed to send message. Please try again later.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: 'Our Location',
      description: '123 Tech Street, Silicon Valley, CA 94025, USA',
    },
    {
      icon: <Email />,
      title: 'Email Us',
      description: 'info@chronosdisruptor.com',
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
    },
    {
      icon: <Schedule />,
      title: 'Working Hours',
      description: 'Mon - Fri: 9:00 - 18:00',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <ContactSection>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}
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
              Get In Touch
            </Typography>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3 }}>
              We'd Love to <Box component="span" sx={{ color: 'primary.main' }}>Hear From You</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Have a question or want to discuss a project? Fill out the form below and our team will get back to you as soon as possible.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} lg={7}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.1)',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(0, 188, 212, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.1)',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(0, 188, 212, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            variant="outlined"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            error={!!errors.subject}
                            helperText={errors.subject}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.1)',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(0, 188, 212, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Your Message"
                            variant="outlined"
                            name="message"
                            multiline
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.1)',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(0, 188, 212, 0.5)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                              '& .MuiInputBase-multiline': {
                                padding: '16.5px 14px',
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={isSubmitting}
                            endIcon={<Send />}
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
                              '&.Mui-disabled': {
                                background: 'rgba(0, 188, 212, 0.5)',
                                color: 'rgba(255, 255, 255, 0.5)',
                              },
                            }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box mb={6}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
                    Contact Information
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    We're here to help and answer any questions you might have. We look forward to hearing from you.
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {contactInfo.map((item, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <ContactCard elevation={0}>
                          <CardContent sx={{ p: 3, height: '100%' }}>
                            <ContactInfoItem>
                              {item.icon}
                              <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                  {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {item.description}
                                </Typography>
                              </Box>
                            </ContactInfoItem>
                          </CardContent>
                        </ContactCard>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                
                <Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 3 }}>
                    Follow Us
                  </Typography>
                  <Box display="flex" gap={2}>
                    {['facebook', 'twitter', 'linkedin', 'github'].map((social, index) => (
                      <Button
                        key={social}
                        variant="outlined"
                        sx={{
                          minWidth: 'auto',
                          width: '44px',
                          height: '44px',
                          borderRadius: '8px',
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'text.secondary',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <i className={`fab fa-${social}`} />
                      </Button>
                    ))}
                  </Box>
                </Box>
                
                {!isMobile && (
                  <Box mt={6}>
                    <Box
                      component="img"
                      src={contactImage}
                      alt="Contact Us"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%',
                        borderRadius: '16px',
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                      }}
                    />
                  </Box>
                )}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
      
      {/* Map Section */}
      <Box sx={{ py: 0, pb: 10 }}>
        <Container maxWidth="lg">
          <Card
            elevation={0}
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              height: '500px',
            }}
          >
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.331196115105!2d-122.08424992420284!3d37.42199987905129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425bac8b%3A0x8d21f00a3c1c3e8d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Card>
        </Container>
      </Box>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={isError ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
