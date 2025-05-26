import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#D4AF37',
      color: 'black',
      opacity: 0.6,
      mt: 6,
      pt: 4,
      pb: 2,
      px: { xs: 2, md: 8 },
      fontFamily: 'serif',
    }}>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: { xs: 2, md: 6 },
        mb: 2
      }}>
        <Box sx={{ minWidth: 180, mb: { xs: 2, md: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Explore EGYPT
          </Typography>
        </Box>
        <Box sx={{ minWidth: 120, mb: { xs: 2, md: 0 } }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Company</Typography>
          <Box>
            <Link href="#" underline="none" color="inherit" display="block">About</Link>
            <Link href="#" underline="none" color="inherit" display="block">Careers</Link>
            <Link href="#" underline="none" color="inherit" display="block">Press</Link>
          </Box>
        </Box>
        <Box sx={{ minWidth: 120, mb: { xs: 2, md: 0 } }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Support</Typography>
          <Box>
            <Link href="#" underline="none" color="inherit" display="block">Contact</Link>
            <Link href="#" underline="none" color="inherit" display="block">Help Center</Link>
            <Link href="#" underline="none" color="inherit" display="block">FAQs</Link>
          </Box>
        </Box>
        <Box sx={{ minWidth: 120, mb: { xs: 2, md: 0 } }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Legal</Typography>
          <Box>
            <Link href="#" underline="none" color="inherit" display="block">Terms</Link>
            <Link href="#" underline="none" color="inherit" display="block">Privacy</Link>
            <Link href="#" underline="none" color="inherit" display="block">Cookies</Link>
          </Box>
        </Box>
        <Box sx={{ minWidth: 180 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Follow Us</Typography>
          <Box>
            <IconButton color="inherit" href="#"><FacebookIcon /></IconButton>
            <IconButton color="inherit" href="#"><TwitterIcon /></IconButton>
            <IconButton color="inherit" href="#"><InstagramIcon /></IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4, fontSize: 14 }}>
        <Typography variant="body2" sx={{ fontFamily: 'serif' }}>
          Copyright © 2024 Explore EGYPT. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
