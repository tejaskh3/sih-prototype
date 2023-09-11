import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material';
import { useState } from 'react';
import {
  createUserFromEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword
} from '../utils/firebase/firebase.utils';

const defaultUser = {
  email: '',
  password: ''
};
const UserSignInForm = () => {
  const [user, setUser] = useState(defaultUser);
  const { email, password } = user;

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    // setUser({ ...user, role: 'user' });
    const res = await signInUserWithEmailAndPassword(email, password);
    console.log(res);
  };
  const handleGooglePopup = async () => {
    try {
      const res = await signInWithGooglePopup();
      console.log(res.user);
    } catch (error) {
      console.log('error signing with google', error.message);
    }
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        color: 'black',
        boxShadow:
          'rgba(0, 0, 0, 0.24) 0px 3px 8px;rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        borderRadius: '5px',
        width: 'content-fit'
        // padding:'',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" fontSize={'42px'}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleChange}
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Box
            sx={{
              display: 'flex',
              // gap: '30px',
              justifyContent: 'space-around'
            }}
          >
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'blue' }}
              onClick={handleGooglePopup}
            >
              Sign In With Google
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default UserSignInForm;


