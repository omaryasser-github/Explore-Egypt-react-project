import { Box, Typography, TextField, Button, IconButton, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function ContactUs() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: '100vh',
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
          p: { xs: 1, sm: 4 },
          borderRadius: 4,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          maxWidth: 900,
          width: '100%',
          position: 'relative',
          mx: { xs: 1, sm: 'auto' },
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ position: 'absolute', top: { xs: 8, sm: 16 }, left: { xs: 8, sm: 16 }, zIndex: 2 }}
          aria-label="back"
        >
          <ArrowBackIcon fontSize={window.innerWidth < 600 ? 'small' : 'medium'} />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'flex-start' },
            justifyContent: 'center',
            gap: { xs: 2, sm: 6 },
            mt: { xs: 5, sm: 4 },
          }}
        >
          <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 300 }, mb: { xs: 4, md: 0 } }}>
            <Typography
              variant={window.innerWidth < 600 ? 'h4' : 'h2'}
              sx={{
                fontWeight: 'bold',
                fontFamily: 'serif',
                mb: 3,
                textShadow: '2px 2px 4px #ccc',
                fontSize: { xs: 32, sm: 40, md: 48 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Contact Us
            </Typography>
            <Formik
              initialValues={{ fullName: '', email: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                alert('Your message has been sent successfully!');
                navigate(-1);
                resetForm();
              }}
            >
              {({ errors, touched, handleChange, handleBlur, values }) => (
                <Form>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    variant="standard"
                    sx={{ mb: 3, fontSize: { xs: 14, sm: 16 } }}
                    InputLabelProps={{ sx: { color: '#888', fontSize: { xs: 14, sm: 16 } } }}
                    inputProps={{ style: { fontSize: window.innerWidth < 600 ? 14 : 16 } }}
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                  />
                  <TextField
                    fullWidth
                    label="E-mail"
                    name="email"
                    variant="standard"
                    sx={{ mb: 3, fontSize: { xs: 14, sm: 16 } }}
                    InputLabelProps={{ sx: { color: '#888', fontSize: { xs: 14, sm: 16 } } }}
                    inputProps={{ style: { fontSize: window.innerWidth < 600 ? 14 : 16 } }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="standard"
                    sx={{ mb: 3, fontSize: { xs: 14, sm: 16 } }}
                    InputLabelProps={{ sx: { color: '#888', fontSize: { xs: 14, sm: 16 } } }}
                    inputProps={{ style: { fontSize: window.innerWidth < 600 ? 14 : 16 } }}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth={window.innerWidth < 600}
                    sx={{
                      bgcolor: '#e6c97a',
                      color: '#222',
                      fontWeight: 'bold',
                      borderRadius: 4,
                      px: { xs: 0, sm: 5 },
                      py: { xs: 1, sm: 1.5 },
                      mt: 2,
                      fontSize: { xs: 15, sm: 16 },
                      boxShadow: 'none',
                      '&:hover': { bgcolor: '#D4AF37' },
                    }}
                  >
                    Contact Us
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 220 }, mt: { xs: 0, md: 0 } }}>
            <Typography
              variant={window.innerWidth < 600 ? 'subtitle1' : 'h6'}
              sx={{ fontWeight: 'bold', mb: 1, textAlign: { xs: 'center', md: 'left' } }}
            >
              Contact
            </Typography>
            <Typography sx={{ mb: 0.5, textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: 14, sm: 16 } }}>
              hi@gmail.com
            </Typography>
            <Typography sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: 14, sm: 16 } }}>
              0123456789
            </Typography>
            <Typography
              variant={window.innerWidth < 600 ? 'subtitle1' : 'h6'}
              sx={{ fontWeight: 'bold', mb: 1, mt: 2, textAlign: { xs: 'center', md: 'left' } }}
            >
              Based in
            </Typography>
            <Typography sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: 14, sm: 16 } }}>
              Egypt
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton color="inherit" href="#" size={window.innerWidth < 600 ? 'small' : 'medium'}>
                <FacebookIcon fontSize={window.innerWidth < 600 ? 'small' : 'medium'} />
              </IconButton>
              <IconButton color="inherit" href="#" size={window.innerWidth < 600 ? 'small' : 'medium'}>
                <InstagramIcon fontSize={window.innerWidth < 600 ? 'small' : 'medium'} />
              </IconButton>
              <IconButton color="inherit" href="#" size={window.innerWidth < 600 ? 'small' : 'medium'}>
                <TwitterIcon fontSize={window.innerWidth < 600 ? 'small' : 'medium'} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ContactUs;