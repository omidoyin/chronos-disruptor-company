import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Rating,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Button,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { ArrowRight } from "@mui/icons-material";
import { testimonials } from "./data";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  categories: string[];
}

const TestimonialsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0, 10),
  background: theme.palette.background.default,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "500px",
    background:
      "linear-gradient(180deg, rgba(0,188,212,0.1) 0%, rgba(0,0,0,0) 100%)",
    zIndex: 0,
  },
}));

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  marginBottom: theme.spacing(2),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -10,
    left: 0,
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #00bcd4, #00acc1)",
    borderRadius: "2px",
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
    borderColor: "rgba(0, 188, 212, 0.5)",
  },
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4, 3, 3),
  "&::before": {
    content: '"\u201C"',
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: "5rem",
    color: "rgba(0, 188, 212, 0.1)",
    fontFamily: "Georgia, serif",
    lineHeight: 1,
    zIndex: 0,
  },
}));

const testimonialCategories = [
  { id: "all", label: "All Testimonials" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "design", label: "UI/UX Design" },
  { id: "cloud", label: "Cloud Solutions" },
];

const Testimonials = () => {
  const [category, setCategory] = useState("all");
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(
    null
  );
  const theme = useTheme();
  // Remove unused isMobile since it's not being used

  const filteredTestimonials =
    category === "all"
      ? testimonials
      : testimonials.filter((testimonial: Testimonial) =>
          testimonial.categories.includes(category)
        );

  const toggleExpand = (id: number) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

  return (
    <TestimonialsSection>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8} position="relative">
          <Typography
            variant="h6"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: "40px",
                height: "2px",
                bgcolor: "primary.main",
                mr: 2,
              }}
            />
            Testimonials
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 800, mb: 3 }}
          >
            What Our{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Clients Say
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </Typography>
        </Box>

        {/* Category Tabs */}
        <Box
          sx={{
            mb: 6,
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTabs-indicator": {
              backgroundColor: theme.palette.primary.main,
              height: "3px",
              borderRadius: "3px 3px 0 0",
            },
          }}
        >
          <Tabs
            value={category}
            onChange={(e, newValue) => setCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.primary.main,
              },
              mb: 6,
            }}
          >
            {testimonialCategories.map((tab) => (
              <Tab key={tab.id} value={tab.id} label={tab.label} />
            ))}
          </Tabs>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {filteredTestimonials.map(
            (testimonial: Testimonial, index: number) => (
              <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard elevation={0}>
                    <TestimonialContent>
                      <Box position="relative" zIndex={1}>
                        <Box display="flex" alignItems="center" mb={3}>
                          <Rating
                            value={testimonial.rating}
                            readOnly
                            size="small"
                            sx={{
                              color: "#FFC107",
                              mr: 1,
                              "& .MuiRating-iconFilled": {
                                color: "#FFC107",
                              },
                            }}
                          />
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ ml: 1 }}
                          >
                            {testimonial?.date}
                          </Typography>
                        </Box>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            mb: 3,
                            display: "-webkit-box",
                            WebkitLineClamp:
                              expandedTestimonial === testimonial.id
                                ? "unset"
                                : 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "96px",
                          }}
                        >
                          {testimonial.content}
                        </Typography>

                        <Button
                          onClick={() => toggleExpand(testimonial.id)}
                          size="small"
                          sx={{
                            textTransform: "none",
                            color: "primary.main",
                            p: 0,
                            minWidth: "auto",
                            fontWeight: 500,
                            "&:hover": {
                              background: "transparent",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {expandedTestimonial === testimonial.id
                            ? "Show less"
                            : "Read more"}
                        </Button>

                        <Box
                          sx={{ mt: 3, display: "flex", alignItems: "center" }}
                        >
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{
                              width: 56,
                              height: 56,
                              mr: 2,
                              border: `2px solid ${theme.palette.primary.main}`,
                              padding: "2px",
                            }}
                          />
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.role}
                            </Typography>
                            <Typography variant="body2" color="primary">
                              {testimonial.company}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            mt: 2,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                          }}
                        >
                          {testimonial.categories
                            .filter((cat) => cat !== "all")
                            .map((cat: string) => (
                              <Chip
                                key={cat}
                                label={cat}
                                size="small"
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  backgroundColor: theme.palette.primary.light,
                                  color: theme.palette.primary.contrastText,
                                  textTransform: "capitalize",
                                }}
                              />
                            ))}
                        </Box>
                      </Box>
                    </TestimonialContent>
                  </TestimonialCard>
                </motion.div>
              </Grid>
            )
          )}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 12,
            p: { xs: 3, md: 6 },
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(15,15,26,0.1) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at 20% 30%, rgba(0, 188, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 64, 129, 0.1) 0%, transparent 50%)",
              zIndex: 0,
            },
          }}
        >
          <Box position="relative" zIndex={1}>
            <StyledSectionTitle
              variant="h3"
              component="h2"
              align="center"
              sx={{ mb: 1 }}
            >
              Ready to Start Your Project?
            </StyledSectionTitle>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}
            >
              Join our growing list of satisfied clients and experience the
              difference of working with a team that truly cares about your
              success.
            </Typography>
            <Button
              href="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowRight />}
              sx={{
                borderRadius: "8px",
                py: 1.5,
                px: 6,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                boxShadow: "0 4px 14px rgba(0, 188, 212, 0.4)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0, 188, 212, 0.5)",
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Box>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
