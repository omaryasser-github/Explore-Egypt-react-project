import { Box, Button, Typography, TextField, Checkbox, FormControlLabel, InputAdornment, Link, Container, Paper } from '@mui/material';
import { Email, Lock, Facebook, Google, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  newsletter: Yup.boolean(),
});

function SignUp() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#faf9f6', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
      <Container maxWidth="xs" sx={{ width: '100%' }}>
        <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontFamily: 'serif', mb: 2, mt: 1, fontStyle: 'italic' }}>
            Sign - up
          </Typography>
          <Button fullWidth startIcon={<Google />} sx={{ bgcolor: '#f5f5f5', color: '#222', mb: 1.5, textTransform: 'none', fontWeight: 500, fontSize: 16, borderRadius: 2 }}>
            continue with Google
          </Button>
          <Button fullWidth startIcon={<Facebook />} sx={{ bgcolor: '#5b8def', color: '#fff', mb: 2, textTransform: 'none', fontWeight: 500, fontSize: 16, borderRadius: 2, '&:hover': { bgcolor: '#4267B2' } }}>
            continue with Facebook
          </Button>
          <Typography align="center" sx={{ my: 1, color: '#444', fontWeight: 500 }}>Or</Typography>
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '', newsletter: false }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // handle signup logic here
              localStorage.setItem('user', 'true');
              navigate('/');
            }}
          >
            {({ errors, touched, handleChange, handleBlur, values, setFieldValue }) => (
              <Form>
                <TextField
                  fullWidth
                  margin="normal"
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: '#aaa' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: '#f5f5f5', borderRadius: 2 }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: '#aaa' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: '#f5f5f5', borderRadius: 2 }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email sx={{ color: '#aaa' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: '#f5f5f5', borderRadius: 2 }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: '#aaa' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: '#f5f5f5', borderRadius: 2 }}
                />
                <FormControlLabel
                  control={<Checkbox size="small" checked={values.newsletter} onChange={e => setFieldValue('newsletter', e.target.checked)} />}
                  label={<Typography sx={{ fontSize: 14, fontWeight: 500 }}>Subscribe to our Newsletter</Typography>}
                  sx={{ mt: 1, mb: 1 }}
                />
                <Typography sx={{ fontSize: 13, mb: 2, color: '#222' }}>
                  By creating an account you agree to the{' '}
                  <span style={{ color: 'green', fontWeight: 500 }}>Privacy Policy</span> to the{' '}
                  <span style={{ color: 'red', fontWeight: 500 }}>terms of use</span>
                </Typography>
                <Button fullWidth variant="contained" type="submit" sx={{ mt: 1, mb: 2, bgcolor: '#e6c97a', color: '#222', fontWeight: 'bold', fontSize: 16, borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#D4AF37' } }}>
                  Create your account
                </Button>
              </Form>
            )}
          </Formik>
          <Typography align="center" sx={{ fontSize: 14, mt: 1 }}>
            ALREADY HAVE ACCOUNT ?{' '}
            <Link component="button" onClick={() => navigate('/login')} sx={{ color: 'red', fontWeight: 500, fontSize: 14, ml: 0.5 }}>
              Log in to your account
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignUp;
