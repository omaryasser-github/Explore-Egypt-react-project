import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Button, TextField, Divider, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { img, title } = location.state || {};
  // For demo, hardcode price and date
  const price = 80;
  const date = 'june 20, 2024';



  return (
    <Box
      sx={{
        minHeight: '80vh',
        bgcolor: '#faf9f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 1, sm: 4 },
        px: { xs: 0, sm: 2 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          maxWidth: 420,
          width: '100%',
          position: 'relative',
          mx: { xs: 1, sm: 'auto' },
          bgcolor: '#f9f6e7',
          p: { xs: 2, sm: 4 },
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}
          aria-label="back"
        >
          <ArrowBackIcon fontSize="medium" />
        </IconButton>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 'bold', fontFamily: 'serif', mb: 2, mt: 2, fontSize: { xs: 28, sm: 36 } }}
        >
          Payment
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 3 }}>
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 2, mr: 2, boxShadow: 1 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 18, fontFamily: 'serif' }}>{title}</Typography>
            <Typography variant="body2" sx={{ color: '#444', fontSize: 13 }}>{date}</Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#222', fontFamily: 'serif' }}>
            ${price}
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'serif', mb: 2 }}>
          Card Details
        </Typography>
        <Box component="form" autoComplete="off" sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="card number"
            placeholder="**** **** **** ****"
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{
              sx: {
                borderRadius: 4,
                bgcolor: '#fff',
              },
            }}
            inputProps={{ type: "numeric" }}

          />
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mb: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'stretch' },
            }}
          >
            <TextField
              fullWidth
              label="MM / YY"
              placeholder="MM / YY"
              variant="outlined"
              sx={{ width: { xs: '60%', sm: '100%' } }}
              InputProps={{
                sx: {
                  borderRadius: 4,
                  bgcolor: '#fff',
                },
              }}
              inputProps={{ maxLength: 5 }}
            />
            <TextField
              fullWidth
              label="CVC"
              placeholder="CVC"
              variant="outlined"
              sx={{ width: { xs: '60%', sm: '100%' } }}
              InputProps={{
                sx: {
                  borderRadius: 4,
                  bgcolor: '#fff',
                },
              }}
              inputProps={{ maxLength: 4 }}
            />
          </Box>
          <TextField
            fullWidth
            label="Cardholder name"
            placeholder="Cardholder name"
            variant="outlined"
            InputProps={{
              sx: {
                mb: 3,
                borderRadius: 4,
                bgcolor: '#fff',
              },
            }}
            inputProps={{ type: "text", maxLength: 19 }}
          />
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column-reverse', sm: 'row' },
              mt: 0,
              alignItems: { xs: 'flex-start', sm: 'stretch' },
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                width: { xs: '60%', sm: '40%' },
                bgcolor: '#e0e0e0',
                color: '#222',
                fontWeight: 700,
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': { bgcolor: '#ccc' },
              }}
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                width: { xs: '100%', sm: '60%' },
                bgcolor: '#D4AF37',
                color: 'black',
                fontWeight: 700,
                borderRadius: 2,
                boxShadow: 'none',
                mb: { xs: 1, sm: 0 },
                '&:hover': { bgcolor: '#bfa233' },
              }}
              type="submit"
            >
              Pay
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 8, mb: -2, textAlign: 'center', bgcolor: '#D4AF37', borderRadius: 2, py: 0.5, opacity: 0.7, width: "100%" }}>
          <Typography variant="caption" sx={{ color: '#222', fontWeight: 500 }}>
            Copyright ©2024
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Payment;
