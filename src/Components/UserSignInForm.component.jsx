import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";

const defaultUser = {
  email: "",
  password: "",
};
const UserSignInForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUser);
  const { email, password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
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
      console.log("error signing with google", error.message);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box py={5}>
        <Typography
          component="h1"
          fontSize={"42px"}
          color={"#000"}
          sx={{ textAlign: "center" }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          color={"black"}
        >
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
              Sign In
            </Button>
            <Button
              type="button"
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none" }}
              onClick={handleGooglePopup}
            >
              Sign In With Google
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link sx={{ textAlign: "center" }} href="#" variant="body2">
              Forgot password?
            </Link>
            <Button
              onClick={() => navigate("/auth/user/sign-up")}
              variant="body2"
            >
              {"Don't have an account? Sign Up"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UserSignInForm;
