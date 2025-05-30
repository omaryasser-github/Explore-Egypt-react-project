import React, { useState, useEffect } from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

interface FlipCardProps {
  img: string;
  title: string;
  desc: string;
  note: string;
  onRemove?: (title: string) => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ img, title, desc, note, onRemove }) => {
  const [flipped, setFlipped] = useState(false);
  const [isLoved, setIsLoved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the card is already in wishlist on mount
    const currentWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const found = currentWishlist.some((card: FlipCardProps) => card.title === title);
    setIsLoved(found);
  }, [title]);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      // If onRemove prop exists, call it (used in Wishlist page)
      onRemove(title);
    } else {
      // Otherwise, use the default toggle wishlist logic
      const currentWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const cardData = { img, title, desc, note };
      let updatedWishlist;

      if (isLoved) {
        updatedWishlist = currentWishlist.filter((card: FlipCardProps) => card.title !== title);
        setIsLoved(false);
        console.log('Card removed from wishlist:', title);
      } else {
        updatedWishlist = [...currentWishlist, cardData];
        setIsLoved(true);
        console.log('Card added to wishlist:', title);
      }
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  };

  return (
    <Box
      sx={{
        perspective: 1200,
        width: '100%',
        height: 480,
        cursor: 'pointer',
      }}
      onClick={() => setFlipped((f) => !f)}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s cubic-bezier(.4,2,.6,1)',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        {/* Front */}
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#fffbe6',
            p: 2,
          }}
        >
          <Box sx={{ position: 'relative', width: '100%' }}>
            <IconButton
              onClick={handleHeartClick}
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                zIndex: 2,
                bgcolor: 'white',
                borderRadius: '50%',
                p: 0.5,
                boxShadow: 1,
              }}
              aria-label={isLoved ? 'remove from wishlist' : 'add to wishlist'}
            >
              {isLoved ? <FavoriteIcon sx={{ color: 'black', fontSize: 28 }} /> : <FavoriteBorderIcon sx={{ color: 'black', fontSize: 28 }} />}
            </IconButton>
            <img src={img} alt={title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
          </Box>
          <Typography variant="subtitle1" sx={{ fontSize: 24,fontWeight: 'bold', mb: 4, color: '#222', fontFamily: 'serif' }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, textAlign: 'center' ,whiteSpace: 'pre-line' }}>{desc}</Typography>
          <Button variant="contained" sx={{ bgcolor: '#D4AF37', color: 'black', fontWeight: 900,width:200 , height:40, borderRadius: 4, mt: 'auto', '&:hover': { bgcolor: '#bfa233' } }}
            onClick={e => {
              e.stopPropagation();
              navigate('/payment', { state: { img, title, desc, note } });
            }}
          >
            Book Now!
          </Button>
        </Paper>
        {/* Back */}
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#fff',
            color: 'crimson',
            fontWeight: 600,
            fontSize: 18,
            p: 2,
            transform: 'rotateY(180deg)',
          }}
        >
          <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 600, fontSize: 24 ,  whiteSpace: 'pre-line',}}>
            {note}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default FlipCard;
