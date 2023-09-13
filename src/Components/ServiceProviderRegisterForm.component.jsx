import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createServiceProviderDocumentFromAuth,
  createUserFromEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import styles from "./ServiceProviderRegister.module.css";

const serviceProviders = [
  {
    value: "advocate",
    label: "Advocate",
  },
  {
    value: "mediator",
    label: "Mediator",
  },
  {
    value: "notary",
    label: "Notary",
  },
  {
    value: "LegalFirm",
    label: "Legal Firm",
  },
];

const defaultCredentials = {
  displayName: "",
  email: "",
  password: "",
  role: "",
  barCouncilId: "",
};
const ServiceProviderRegisterForm = () => {
  const navigate = useNavigate();
  const [registerCredentials, setRegisterCredentials] =
    useState(defaultCredentials);
  const { displayName, email, password, role, barCouncilId } =
    registerCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterCredentials({ ...registerCredentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      let res = await createUserFromEmailAndPassword(email, password);
      console.log(res);
      res = { ...res, displayName };
      let ref = await createServiceProviderDocumentFromAuth(
        res.user,
        registerCredentials
      );
      console.log(ref);
      setRegisterCredentials(defaultCredentials);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
        return;
      }
      if (error.code === "auth/weak-password") {
        alert("password is too weak keep at least 6 words");
        return;
      } else
        console.log('error registering the service provider', error.message);
    }
  };

  return (
    <Grid container minHeight={"90vh"}>
      <Grid item xs={0} md={7}>
        <Box component="div" className={styles.image}></Box>
      </Grid>

      <Grid item xs={12} md={5} px={{ xs: 3, md: 10 }} py={{ xs: 8, md: 15 }}>
        <Typography
          variant="h1"
          fontWeight={"bolder"}
          fontSize={"42px"}
          color={"rgba(18,17,39,.75)"}
        >
          Register
        </Typography>
        <Typography variant="p" color={"rgba(18,17,39,.75)"}>
          Welcome to our Legal Duniya.
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
            label="Name"
            variant="outlined"
            type="text"
            name="displayName"
            value={displayName}
            required
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
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
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your role"
            name="role"
            value={role}
            required
            onChange={handleChange}
          >
            {serviceProviders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Bar Council Id"
            variant="outlined"
            name="barCouncilId"
            value={barCouncilId}
            required
            onChange={handleChange}
          />
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20%",
            }}
          >
            <Button
              type="submit"
              size="large"
              variant="contained"
              onClick={handleSubmit}
              sx={{ textTransform: "none" }}
            >
              Register
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
            <Typography variant="span">Already have an account ? </Typography>
            <Button
              onClick={() => navigate("/auth")}
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
      </Grid>
    </Grid>
  );
};

export default ServiceProviderRegisterForm;
