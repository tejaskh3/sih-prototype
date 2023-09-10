// import {
//   Button,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   Grid,
//   Box,
//   Typography,
//   Container
// } from '@mui/material';
// import { useState } from 'react';
// import {
//   createUserFromEmailAndPassword,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInUserWithEmailAndPassword
// } from '../utils/firebase/firebase.utils';

// const defaultUser = {
//   email: '',
//   password: ''
// };
// const UserSignInForm = () => {
//   const [user, setUser] = useState(defaultUser);
//   const { email, password } = user;

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };
//   const handleSubmit = async e => {
//     e.preventDefault();
//     // setUser({ ...user, role: 'user' });
//     const res = await signInUserWithEmailAndPassword(email, password);
//     console.log(res);
//   };
//   const handleGooglePopup = async () => {
//     try {
//       const res = await signInWithGooglePopup();
//       console.log(res.user);
//     } catch (error) {
//       console.log('error signing with google', error.message);
//     }
//   };
//   return (
//     <Container
//       component="main"
//       maxWidth="xs"
//       sx={{
//         color: 'black',
//         boxShadow:
//           'rgba(0, 0, 0, 0.24) 0px 3px 8px;rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
//         borderRadius: '5px',
//         width: 'content-fit'
//         // padding:'',
//       }}
//     >
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center'
//         }}
//       >
//         <Typography component="h1" fontSize={'42px'}>
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             value={password}
//             onChange={handleChange}
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Box
//             sx={{
//               display: 'flex',
//               // gap: '30px',
//               justifyContent: 'space-around'
//             }}
//           >
//             <Button
//               type="submit"
//               onClick={handleSubmit}
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Button
//               type="button"
//               variant="contained"
//               sx={{ mt: 3, mb: 2, backgroundColor: 'blue' }}
//               onClick={handleGooglePopup}
//             >
//               Sign In With Google
//             </Button>
//           </Box>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default UserSignInForm;

import authBanner from '../assets/left-bg-service-auth.png'
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function UserSignInForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:`url(https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
