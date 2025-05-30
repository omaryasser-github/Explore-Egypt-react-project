import { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Navbar from '../common Components/navbar';
import Footer from '../common Components/footer';
import FlipCard from '../common Components/cards';

interface CardData {
  img: string;
  title: string;
  desc: string;
  note: string;
}

const Wishlist = () => {
  const [wishlistCards, setWishlistCards] = useState<CardData[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistCards(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (titleToRemove: string) => {
    const updatedWishlist = wishlistCards.filter(card => card.title !== titleToRemove);
    setWishlistCards(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', pb: 6 }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 6, pb: 2 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: 'serif',
            fontWeight: 'bold',
            color: '#D4AF37',
            letterSpacing: 2,
            mb: 4,
            mt: 2,
            textShadow: '0 1px 2px #fff, 0 0 2px #fff',
          }}
        >
          My Wishlist
        </Typography>

        {wishlistCards.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ color: '#555' }}>
            Your wishlist is empty.
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 10, sm: 14, md: 16 }, 
            }}
          >
            {wishlistCards.map((card, index) => (
              <Box
                key={index} 
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 40%' }, 
                  maxWidth: 400,
                  minWidth: 260,
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  my: { xs: 4, sm: 6, md: 8 }, 
                  position: 'relative', // Needed for absolute positioning of remove button
                }}
              >
                <FlipCard
                  img={card.img}
                  title={card.title}
                  desc={card.desc}
                  note={card.note}
                  onRemove={handleRemoveFromWishlist}
                />
              </Box>
            ))}
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  );
};

export default Wishlist;
