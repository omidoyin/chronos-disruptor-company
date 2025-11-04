import React from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Divider, Chip, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ArrowBack, ArrowForward, GitHub, Language, Smartphone, DesktopWindows, Code as CodeIcon } from '@mui/icons-material';
import { projects } from './data'; // We'll create this data file next

const ProjectContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0, 10),
  background: theme.palette.background.default,
}));

const ProjectHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -20,
    left: 0,
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #00bcd4, #00acc1)',
    borderRadius: '2px',
  },
}));

const ProjectHero = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  marginBottom: theme.spacing(6),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(4),
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

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Find the current project
  const project = projects.find(p => p.id === parseInt(id || '0')) || projects[0];
  
  // Find the index of the current project
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h4" gutterBottom>Project not found</Typography>
        <Button component={RouterLink} to="/portfolio" variant="contained" color="primary">
          Back to Portfolio
        </Button>
      </Box>
    );
  }

  return (
    <ProjectContainer>
      <Container maxWidth="lg">
        <Button
          component={RouterLink}
          to="/portfolio"
          startIcon={<ArrowBack />}
          sx={{
            mb: 4,
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(0, 188, 212, 0.1)',
            },
          }}
        >
          Back to Portfolio
        </Button>

      

      {/* Project Navigation */}
      <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={5}>
            {prevProject && (
              <Button
                fullWidth
                component={RouterLink}
                to={`/portfolio/${prevProject.id}`}
                startIcon={<ArrowBack />}
                sx={{
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  p: 2,
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(0, 188, 212, 0.1)',
                  },
                }}
              >
                <Box>
                  <Typography variant="caption" color="text.secondary" display="block">Previous Project</Typography>
                  <Typography variant="subtitle1" color="text.primary">
                    {prevProject.title}
                  </Typography>
                </Box>
              </Button>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={5} sx={{ ml: 'auto' }}>
            {nextProject && (
              <Button
                fullWidth
                component={RouterLink}
                to={`/portfolio/${nextProject.id}`}
                endIcon={<ArrowForward />}
                sx={{
                  justifyContent: 'flex-end',
                  textAlign: 'right',
                  p: 2,
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(0, 188, 212, 0.1)',
                  },
                }}
              >
                <Box>
                  <Typography variant="caption" color="text.secondary" display="block">Next Project</Typography>
                  <Typography variant="subtitle1" color="text.primary">
                    {nextProject.title}
                  </Typography>
                </Box>
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  </ProjectContainer>
  );
};

export default ProjectDetail;
