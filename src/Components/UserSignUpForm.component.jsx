import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBanner from "../assets/auth-banner.png";
import {
  createUserDocumentFromAuth,
  createUserFromEmailAndPassword,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";
const defaultUser = {
  displayName: "",
  email: "",
  role: "user",
  password: "",
};
// import {currentUser, setCurrentUser} from '../context/User.Context'
const UserSignUpForm = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(defaultUser);
  const { displayName, email, password } = userDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserFromEmailAndPassword(email, password);
      console.log(user);
      const userRef = await createUserDocumentFromAuth(user, userDetails);
      console.log(userRef);
      console("user created");
      setUserDetails(defaultUser);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
        return;
      }
      if (error.code === "auth/weak-password") {
        alert("password is too weak keep at least 6 words");
        return;
      }
      console.log("error registering the user", error.message);
    }
  };
  const handleGooglePopup = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userRef = await createUserDocumentFromAuth(user, userDetails);
      console.log(userRef);
    } catch (error) {
      console.log("error in google popup while registering", error.message);
    }
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${authBanner})`,
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
            my: 0,
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
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="text"
                  label="Enter Your Name"
                  name="displayName"
                  value={displayName}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={password}
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleSubmit}
                sx={{ mt: 3, textTransform: "none" }}
              >
                Sign Up
              </Button>
              <Button
                type="button"
                size="large"
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
                onClick={handleGooglePopup}
              >
                Sign In with Google
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              <Typography variant="span">Already have an account?</Typography>
              <Button
                onClick={() => navigate("/auth/user")}
                color="secondary"
                sx={{
                  fontSize: "inherit",
                  textTransform: "none",
                }}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default UserSignUpForm;
