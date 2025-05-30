import React, { useState } from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface FlipCardProps {
  img: string;
  title: string;
  desc: string;
  note: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ img, title, desc, note }) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

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
          <img src={img} alt={title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
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
