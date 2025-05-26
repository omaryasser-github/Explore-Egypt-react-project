import { Box, Typography, Container, Paper } from '@mui/material';
import Navbar from '../common Components/navbar';
import Footer from '../common Components/footer';

function Homepage() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        bgcolor: '#f5f5dc', 
        pt: 2, 
        pb: 4,
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 0
        }} />
        <Box sx={{ 
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: 2
        }}>
          <Typography variant="h5" align="center" sx={{ fontFamily: 'serif', fontWeight: 'bold', mt: 2 }}>
            "Walk Through the Heart of Egypt"
          </Typography>
          <Typography variant="h2" align="center" sx={{ fontFamily: 'serif', fontWeight: 'bold', color: '#D4AF37', mt: 2, mb: 2, fontSize: { xs: 32, md: 56 } }}>
            Explore EGYPT
          </Typography>
        </Box>
      </Box>
      {/* Top Five Reasons Section */}
      <Container sx={{ 
        py: 6,
        bgcolor: '#fff',
        maxWidth: 'lg'
      }}>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 4,
            color: '#333',
            fontFamily: 'serif'
          }}
        >
          The Top Five Reasons To Explore Book Your Tour With Us
        </Typography>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
          px: { xs: 2, md: 4 }
        }}>
          <Box sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Paper elevation={0} sx={{ 
              p: 2, 
              textAlign: 'center', 
              bgcolor: 'transparent', 
              boxShadow: 'none',
              height: '100%'
            }}>
              <Typography variant="h4" sx={{ mb: 1, color: '#D4AF37' }}>🧑‍💼</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>The Ultimate Egypt Travel Experiences</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Our website offers curated selection of the highest-rated tours, experiences, Nile cruises, and expert guides. Discover the official highlights, serene escapes, and hidden landmarks.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Paper elevation={0} sx={{ 
              p: 2, 
              textAlign: 'center', 
              bgcolor: 'transparent', 
              boxShadow: 'none',
              height: '100%'
            }}>
              <Typography variant="h4" sx={{ mb: 1, color: '#D4AF37' }}>✔️</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>Accurate, Up-to-Date, and Expert Verified</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Enjoy the most reliable, authentic information from tour reviews and local experts. Every tour is checked by professionals and updated regularly.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Paper elevation={0} sx={{ 
              p: 2, 
              textAlign: 'center', 
              bgcolor: 'transparent', 
              boxShadow: 'none',
              height: '100%'
            }}>
              <Typography variant="h4" sx={{ mb: 1, color: '#D4AF37' }}>👨‍🏫</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>Elite Guides, Handpicked for You</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Book only the best professional guides in Egypt — experienced, passionate, and multi-lingual. Only on our platform.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Paper elevation={0} sx={{ 
              p: 2, 
              textAlign: 'center', 
              bgcolor: 'transparent', 
              boxShadow: 'none',
              height: '100%'
            }}>
              <Typography variant="h4" sx={{ mb: 1, color: '#D4AF37' }}>🔒</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>Access the Unaccessible</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Get advance booking access to otherwise inaccessible locations, structures, and off-the-map adventures — only through us.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Paper elevation={0} sx={{ 
              p: 2, 
              textAlign: 'center', 
              bgcolor: 'transparent', 
              boxShadow: 'none',
              height: '100%'
            }}>
              <Typography variant="h4" sx={{ mb: 1, color: '#D4AF37' }}>📱</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>Bringing Egypt to You — Anywhere in the World</Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Can't visit Egypt yet? No problem. Our platform offers virtual tours, mobile content, and expert support to explore from home, at your own pace.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default Homepage
