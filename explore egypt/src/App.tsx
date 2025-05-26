import Navbar from "./common Components/navbar"
import Footer from "./common Components/footer"
import { Box, Typography, Container, Paper } from '@mui/material';

function App() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <Box sx={{ width: '100%', bgcolor: '#f5f5dc', pt: 2, pb: 4 }}>
        <Typography variant="h5" align="center" sx={{ fontFamily: 'serif', fontWeight: 'bold', mt: 2 }}>
          "Walk Through the Heart of Egypt"
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Explore Egypt Hero"
            style={{ width: '80%', maxWidth: 700, borderRadius: 8, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
          />
        </Box>
        <Typography variant="h2" align="center" sx={{ fontFamily: 'serif', fontWeight: 'bold', color: '#D4AF37', mt: 2, mb: 2, fontSize: { xs: 32, md: 56 } }}>
          Explore EGYPT
        </Typography>
      </Box>
      {/* Top Five Reasons Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
          The Top Five Reasons To Explore Book Your Tour With Us
        </Typography>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4
        }}>
          <Box sx={{ flex: '1 1 300px', maxWidth: 350, minWidth: 250 }}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent', boxShadow: 'none' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>🧑‍💼</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>The Ultimate Egypt Travel Experiences</Typography>
              <Typography variant="body2">
                Our website offers curated selection of the highest-rated tours, experiences, Nile cruises, and expert guides. Discover the official highlights, serene escapes, and hidden landmarks.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 300px', maxWidth: 350, minWidth: 250 }}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent', boxShadow: 'none' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>✔️</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Accurate, Up-to-Date, and Expert Verified</Typography>
              <Typography variant="body2">
                Enjoy the most reliable, authentic information from tour reviews and local experts. Every tour is checked by professionals and updated regularly.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 300px', maxWidth: 350, minWidth: 250 }}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent', boxShadow: 'none' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>GET<br />YOUR<br />GUIDE</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Elite Guides, Handpicked for You</Typography>
              <Typography variant="body2">
                Book only the best professional guides in Egypt — experienced, passionate, and multi-lingual. Only on our platform.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 300px', maxWidth: 350, minWidth: 250 }}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent', boxShadow: 'none' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>✔️</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Access the Unaccessible</Typography>
              <Typography variant="body2">
                Get advance booking access to otherwise inaccessible locations, structures, and off-the-map adventures — only through us.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 300px', maxWidth: 350, minWidth: 250 }}>
            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent', boxShadow: 'none' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>📱</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Bringing Egypt to You — Anywhere in the World</Typography>
              <Typography variant="body2">
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

export default App
