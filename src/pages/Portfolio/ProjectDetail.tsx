
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { projects } from './data'; // We'll create this data file next

const ProjectContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0, 10),
  background: theme.palette.background.default,
}));



const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();


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
