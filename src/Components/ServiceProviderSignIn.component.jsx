import { useState } from "react";
import styles from "./SignInForm.module.css";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInProviderWithEmailAndPassword } from "../utils/firebase/firebase.utils";

const defaultCredentials = {
  email: "",
  password: "",
};
const ServiceProviderSignInForm = () => {
  const navigate = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState(defaultCredentials);
  const { email, password } = loginCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the given fields!");
    }
    try {
      const res = await signInProviderWithEmailAndPassword(email, password);
      console.log(res);
      setLoginCredentials(defaultCredentials);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("this email is not registered with us");
      }
      if (error.code === "auth/wrong-password") {
        alert("incorrect password");
      } else console.log("error while sining up service provider", error);
    }
  };
  return (
    <Grid container minHeight={"90vh"}>
      <Grid item xs={0} md={7}>
        <Box component="div" className={styles["outer-div"]}>
          <Box component={"div"} className={styles.image}></Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={5} px={{ xs: 3, md: 10 }} py={{ xs: 8, md: 15 }}>
        <Typography
          variant="h1"
          fontWeight={"bolder"}
          fontSize={"42px"}
          color={"rgba(18,17,39,.75)"}
        >
          Login to you account
        </Typography>
        <Typography variant="p" color={"rgba(18,17,39,.75)"}>
          See what is going on with your business.
        </Typography>
        <Box
          component={"form"}
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            value={password}
            onChange={handleChange}
            required
            type="password"
          />
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <Button
              type="submit"
              size="large"
              variant="contained"
              onClick={handleSubmit}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: " #ff912999",
                  color: "#fff",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
          <Box
            component={"div"}
            color="black"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <Typography>{"Don't have an account yet?"}</Typography>
            <Button
              onClick={() => navigate("sign-up")}
              color="secondary"
              sx={{
                fontSize: "inherit",
                textTransform: "none",
              }}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ServiceProviderSignInForm;
