import { Box, Button, Typography, TextField, Checkbox, FormControlLabel, InputAdornment, Link, Container, Paper } from '@mui/material';
import { Email, Lock, Facebook, Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  remember: Yup.boolean(),
});

function LogIn() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#faf9f6', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
      <Container maxWidth="xs" sx={{ width: '100%' }}>
        <Paper elevation={0} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontFamily: 'serif', mb: 2, mt: 1, fontStyle: 'italic' }}>
            Login
          </Typography>
          <Button fullWidth startIcon={<Google />} sx={{ bgcolor: '#f5f5f5', color: '#222', mb: 1.5, textTransform: 'none', fontWeight: 500, fontSize: 16, borderRadius: 2 }}>
            continue with Google
          </Button>
          <Button fullWidth startIcon={<Facebook />} sx={{ bgcolor: '#5b8def', color: '#fff', mb: 2, textTransform: 'none', fontWeight: 500, fontSize: 16, borderRadius: 2, '&:hover': { bgcolor: '#4267B2' } }}>
            continue with Facebook
          </Button>
          <Typography align="center" sx={{ my: 1, color: '#444', fontWeight: 500 }}>Or</Typography>
          <Formik
            initialValues={{ email: '', password: '', remember: false }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              // handle login logic here
              localStorage.setItem('user', 'true');
              navigate('/');
            }}
          >
            {({ errors, touched, handleChange, handleBlur, values, setFieldValue }) => (
              <Form>
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                  <FormControlLabel
                    control={<Checkbox size="small" checked={values.remember} onChange={e => setFieldValue('remember', e.target.checked)} />}
                    label={<Typography sx={{ fontSize: 14 }}>remember me</Typography>}
                    sx={{ m: 0 }}
                  />
                  <Link href="#" underline="hover" sx={{ fontSize: 13, color: '#222' }}>Forget Password ?</Link>
                </Box>
                <Button fullWidth variant="contained" type="submit" sx={{ mt: 3, mb: 1, bgcolor: '#e6c97a', color: '#222', fontWeight: 'bold', fontSize: 18, borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#D4AF37' } }}>
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <Typography align="center" sx={{ fontSize: 14, mt: 1 }}>
            Do not have account ?{' '}
            <Link component="button" onClick={() => navigate('/signup')} sx={{ color: 'red', fontWeight: 500, fontSize: 14, ml: 0.5 }}>
              Let's Create an account
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default LogIn;